'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

interface Message {
  id: string;
  senderId: string;
  text?: string;
  image?: string;
  timestamp: Date;
  read: boolean;
  type?: 'text' | 'image' | 'date' | 'location' | 'voice';
  dateProposal?: {
    date: string;
    time: string;
    location: string;
  };
  location?: {
    lat: number;
    lng: number;
    address: string;
  };
  voiceNote?: {
    url: string;
    duration: number;
  };
}

interface Match {
  id: string;
  name: string;
  age: number;
  photo: string;
  verified: boolean;
  lastActive: string;
  likedItem?: {
    type: 'photo' | 'prompt';
    content: string;
  };
  dome: 'connect' | 'explore' | 'social' | 'professional' | 'private';
}

// Sample data
const sampleMatch: Match = {
  id: '3',
  name: 'David',
  age: 32,
  photo: '👤',
  verified: true,
  lastActive: 'Active now',
  likedItem: {
    type: 'prompt',
    content: 'Your "Perfect Sunday" answer'
  },
  dome: 'connect'
};

const sampleMessages: Message[] = [
  {
    id: '1',
    senderId: '3',
    text: "Hey! I loved your answer about farmers markets and cooking together. I'm a huge foodie too!",
    timestamp: new Date(Date.now() - 3600000 * 2),
    read: true
  },
  {
    id: '2',
    senderId: 'me',
    text: "Thanks! What's your favorite thing to cook?",
    timestamp: new Date(Date.now() - 3600000 * 1.5),
    read: true
  },
  {
    id: '3',
    senderId: '3',
    text: "I make a mean pasta carbonara! Would love to cook for you sometime 😊",
    timestamp: new Date(Date.now() - 3600000),
    read: true
  },
  {
    id: '4',
    senderId: '3',
    text: "Also, saw you have a dog in your photos. What breed?",
    timestamp: new Date(Date.now() - 3600000),
    read: true
  },
  {
    id: '5',
    senderId: 'me',
    text: "He's a golden retriever! His name is Charlie",
    timestamp: new Date(Date.now() - 1800000),
    read: true
  },
  {
    id: '6',
    senderId: '3',
    text: "Dog park this weekend?",
    timestamp: new Date(Date.now() - 600000),
    read: false
  }
];

export default function MessageThread() {
  const params = useParams();
  const router = useRouter();
  const [messages, setMessages] = useState(sampleMessages);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showMatchInfo, setShowMatchInfo] = useState(false);
  const [showSafetyMenu, setShowSafetyMenu] = useState(false);
  const [showDateProposal, setShowDateProposal] = useState(false);
  const [showLocationPicker, setShowLocationPicker] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [dateProposal, setDateProposal] = useState({
    date: '',
    time: '',
    location: ''
  });
  const [location, setLocation] = useState({
    lat: 0,
    lng: 0,
    address: ''
  });
  const [recordingTime, setRecordingTime] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const match = sampleMatch; // In real app, fetch based on matchId

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.safety-dropdown')) {
        setShowSafetyMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const newMsg: Message = {
      id: Date.now().toString(),
      senderId: 'me',
      text: newMessage.trim(),
      timestamp: new Date(),
      read: false,
      type: 'text'
    };

    setMessages(prev => [...prev, newMsg]);
    setNewMessage('');
    
    // Simulate typing indicator
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const responseMsg: Message = {
        id: (Date.now() + 1).toString(),
        senderId: match.id,
        text: `Thanks for your message! I'll get back to you soon.`,
        timestamp: new Date(),
        read: false
      };
      setMessages(prev => [...prev, responseMsg]);
    }, 2000);
  };

  // Image upload handler
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSendImage = () => {
    if (!selectedImage) return;

    const newMsg: Message = {
      id: Date.now().toString(),
      senderId: 'me',
      image: imagePreview!,
      timestamp: new Date(),
      read: false,
      type: 'image'
    };

    setMessages(prev => [...prev, newMsg]);
    setSelectedImage(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Date proposal handler
  const handleDateProposal = () => {
    if (!dateProposal.date || !dateProposal.time || !dateProposal.location) {
      return;
    }

    const newMsg: Message = {
      id: Date.now().toString(),
      senderId: 'me',
      text: `Let's meet on ${dateProposal.date} at ${dateProposal.time} at ${dateProposal.location}`,
      timestamp: new Date(),
      read: false,
      type: 'date',
      dateProposal: { ...dateProposal }
    };

    setMessages(prev => [...prev, newMsg]);
    setDateProposal({ date: '', time: '', location: '' });
    setShowDateProposal(false);
  };

  // Location sharing handler
  const handleShareLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude, address: 'Current Location' });
          
          const newMsg: Message = {
            id: Date.now().toString(),
            senderId: 'me',
            text: '📍 I shared my location',
            timestamp: new Date(),
            read: false,
            type: 'location',
            location: { lat: latitude, lng: longitude, address: 'Current Location' }
          };

          setMessages(prev => [...prev, newMsg]);
          setShowLocationPicker(false);
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Unable to get your location. Please check your permissions.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  // Voice recording handlers
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      
      const chunks: Blob[] = [];
      mediaRecorder.ondataavailable = (event) => {
        chunks.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/webm' });
        const url = URL.createObjectURL(blob);
        
        const newMsg: Message = {
          id: Date.now().toString(),
          senderId: 'me',
          text: '🎙️ Voice message',
          timestamp: new Date(),
          read: false,
          type: 'voice',
          voiceNote: { url, duration: recordingTime }
        };

        setMessages(prev => [...prev, newMsg]);
        setIsRecording(false);
        setRecordingTime(0);
        if (recordingIntervalRef.current) {
          clearInterval(recordingIntervalRef.current);
        }
      };

      mediaRecorder.start();
      setIsRecording(true);
      setRecordingTime(0);
      
      recordingIntervalRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    } catch (error) {
      console.error('Error starting recording:', error);
      alert('Unable to access microphone. Please check your permissions.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
    }
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / 3600000);
    
    if (hours < 1) {
      const mins = Math.floor(diff / 60000);
      return `${mins}m ago`;
    } else if (hours < 24) {
      return `${hours}h ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  // Dome-specific styling
  const domeColors = {
    connect: { bg: 'bg-pink-50', text: 'text-pink-600', border: 'border-pink-200' },
    explore: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' },
    social: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
    professional: { bg: 'bg-gray-50', text: 'text-gray-700', border: 'border-gray-300' },
    private: { bg: 'bg-domeo-gray-100', text: 'text-domeo-black', border: 'border-domeo-gray-300' }
  };

  const domeStyle = domeColors[match.dome];

  return (
    <div className="min-h-screen bg-domeo-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-domeo-gray-200 px-4 py-3 fixed top-24 left-0 right-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link 
              href="/matches" 
              className="p-2 -ml-2 text-domeo-gray-600 hover:text-domeo-black transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                <path d="M12 5L7 10L12 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            
            <button 
              onClick={() => setShowMatchInfo(!showMatchInfo)}
              className="flex items-center gap-3 hover:bg-domeo-gray-50 -m-2 p-2 rounded-lg transition-colors"
            >
              <div className="w-10 h-10 bg-domeo-gray-200 rounded-full flex items-center justify-center text-lg">
                {match.photo}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <h1 className="font-medium text-domeo-black">{match.name}, {match.age}</h1>
                  {match.verified && (
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5L4 7L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
                <p className="text-xs text-domeo-gray-500">{match.lastActive}</p>
              </div>
            </button>
          </div>

          <div className="flex items-center gap-2 relative">
            <button 
              onClick={() => setShowSafetyMenu(!showSafetyMenu)}
              className="px-4 py-2 text-domeo-accent hover:text-domeo-accent/80 transition-colors rounded text-lg font-bold min-w-[60px] min-h-[40px] pointer-events-auto cursor-pointer relative z-[9999] bg-white hover:bg-gray-50"
            >
              <span className="flex items-center justify-center space-x-1">
                <span>•</span>
                <span>•</span>
                <span>•</span>
              </span>
            </button>

            {/* Safety Menu Dropdown */}
            {showSafetyMenu && (
              <div className="safety-dropdown absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-domeo-gray-200 py-2 z-[9999]">
                <button 
                  onClick={() => {
                    setShowSafetyMenu(false);
                    // Handle unmatch
                  }}
                  className="w-full px-4 py-2 text-left text-sm text-domeo-gray-700 hover:bg-domeo-gray-50 transition-colors flex items-center gap-3"
                >
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1L15 8L8 15L1 8L8 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 4L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Unmatch
                </button>
                <button 
                  onClick={() => {
                    setShowSafetyMenu(false);
                    // Handle block
                  }}
                  className="w-full px-4 py-2 text-left text-sm text-domeo-gray-700 hover:bg-domeo-gray-50 transition-colors flex items-center gap-3"
                >
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                    <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M6 6L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 6L6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Block
                </button>
                <button 
                  onClick={() => {
                    setShowSafetyMenu(false);
                    // Handle report
                  }}
                  className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 transition-colors flex items-center gap-3"
                >
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1L15 8L8 15L1 8L8 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 4V8M8 12H8.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Report
                </button>
                <div className="border-t border-domeo-gray-100 my-1"></div>
                <button 
                  onClick={() => {
                    setShowSafetyMenu(false);
                    // Handle safety tips
                  }}
                  className="w-full px-4 py-2 text-left text-sm text-domeo-gray-700 hover:bg-domeo-gray-50 transition-colors flex items-center gap-3"
                >
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1L15 8L8 15L1 8L8 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 4V8M8 12H8.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 6H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Safety Tips
                </button>
                <button 
                  onClick={() => {
                    setShowSafetyMenu(false);
                    // Handle help
                  }}
                  className="w-full px-4 py-2 text-left text-sm text-domeo-gray-700 hover:bg-domeo-gray-50 transition-colors flex items-center gap-3"
                >
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M8 12V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 9C8 7.5 9 6.5 10 6.5C11 6.5 12 7.5 12 9C12 10.5 11 11.5 10 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Get Help
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto pt-32 pb-24">
        <div className="max-w-2xl mx-auto px-4">
          {messages.map((message) => {
            const isMe = message.senderId === 'me';
            return (
              <div key={message.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'} mb-4`}>
                <div className={`max-w-[70%] ${isMe ? 'order-2' : 'order-1'}`}>
                  <div className={`rounded-2xl px-4 py-3 ${
                    isMe 
                      ? 'bg-domeo-accent text-white' 
                      : 'bg-white border border-domeo-gray-200'
                  }`}>
                    {message.text && (
                      <p className="text-sm leading-relaxed">
                        {message.text}
                      </p>
                    )}
                    {message.image && (
                      <img src={message.image} alt="Sent image" className="rounded-lg max-w-full" />
                    )}
                    
                    {/* Date Proposal */}
                    {message.type === 'date' && message.dateProposal && (
                      <div className={`mt-2 p-3 rounded-lg ${
                        isMe ? 'bg-white/20' : 'bg-domeo-gray-50'
                      }`}>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-lg">📅</span>
                          <span className="font-medium">Date Proposal</span>
                        </div>
                        <div className="space-y-1 text-sm">
                          <div><strong>Date:</strong> {message.dateProposal.date}</div>
                          <div><strong>Time:</strong> {message.dateProposal.time}</div>
                          <div><strong>Location:</strong> {message.dateProposal.location}</div>
                        </div>
                        <div className="flex gap-2 mt-3">
                          <button className="px-3 py-1 bg-green-500 text-white text-xs rounded-full hover:bg-green-600 transition-colors">
                            Accept
                          </button>
                          <button className="px-3 py-1 bg-red-500 text-white text-xs rounded-full hover:bg-red-600 transition-colors">
                            Decline
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Location */}
                    {message.type === 'location' && message.location && (
                      <div className={`mt-2 p-3 rounded-lg ${
                        isMe ? 'bg-white/20' : 'bg-domeo-gray-50'
                      }`}>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-lg">📍</span>
                          <span className="font-medium">Location Shared</span>
                        </div>
                        <div className="text-sm">
                          <div><strong>Address:</strong> {message.location.address}</div>
                          <div className="text-xs opacity-75">
                            Lat: {message.location.lat.toFixed(6)}, Lng: {message.location.lng.toFixed(6)}
                          </div>
                        </div>
                        <button className="mt-2 px-3 py-1 bg-blue-500 text-white text-xs rounded-full hover:bg-blue-600 transition-colors">
                          View on Map
                        </button>
                      </div>
                    )}

                    {/* Voice Note */}
                    {message.type === 'voice' && message.voiceNote && (
                      <div className={`mt-2 p-3 rounded-lg ${
                        isMe ? 'bg-white/20' : 'bg-domeo-gray-50'
                      }`}>
                        <div className="flex items-center gap-3">
                          <button className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                              <path d="M6 4L12 8L6 12V4Z"/>
                            </svg>
                          </button>
                          <div className="flex-1">
                            <div className="w-full bg-white/20 rounded-full h-2">
                              <div className="bg-white h-2 rounded-full" style={{ width: '0%' }}></div>
                            </div>
                          </div>
                          <span className="text-xs">
                            {Math.floor(message.voiceNote.duration / 60)}:{(message.voiceNote.duration % 60).toString().padStart(2, '0')}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                  <p className={`text-xs text-domeo-gray-500 mt-1 ${isMe ? 'text-right' : 'text-left'}`}>
                    {formatTime(message.timestamp)}
                    {isMe && (message.read ? ' • Read' : ' • Sent')}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white border border-domeo-gray-200 rounded-2xl px-4 py-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-domeo-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-domeo-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-domeo-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-domeo-gray-200 p-4 sticky bottom-0 z-30">
        <div className="max-w-2xl mx-auto">
          {/* Image Preview */}
          {imagePreview && (
            <div className="mb-3 p-3 bg-domeo-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <img src={imagePreview} alt="Preview" className="w-12 h-12 object-cover rounded" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Image ready to send</p>
                  <p className="text-xs text-domeo-gray-500">{selectedImage?.name}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      handleSendImage();
                    }}
                    className="px-3 py-1 bg-domeo-accent text-white text-xs rounded-full hover:bg-domeo-accent/80 transition-colors"
                  >
                    Send
                  </button>
                  <button
                    onClick={() => {
                      setSelectedImage(null);
                      setImagePreview(null);
                      if (fileInputRef.current) fileInputRef.current.value = '';
                    }}
                    className="px-3 py-1 bg-red-500 text-white text-xs rounded-full hover:bg-red-600 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Voice Recording Indicator */}
          {isRecording && (
            <div className="mb-3 p-3 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-red-700">Recording...</span>
                <span className="text-sm text-red-600">
                  {Math.floor(recordingTime / 60)}:{(recordingTime % 60).toString().padStart(2, '0')}
                </span>
                <button
                  onClick={() => {
                    stopRecording();
                  }}
                  className="ml-auto px-3 py-1 bg-red-500 text-white text-xs rounded-full hover:bg-red-600 transition-colors"
                >
                  Stop
                </button>
              </div>
            </div>
          )}

          <div className="flex items-end gap-2">
            {/* Image Upload Button */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <button 
              onClick={() => {
                fileInputRef.current?.click();
              }}
              className="p-2 text-domeo-gray-600 hover:text-domeo-black transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
                <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className="flex-1 relative">
              <textarea
                ref={inputRef}
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Type a message..."
                className="w-full px-4 py-3 bg-domeo-gray-50 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-domeo-accent/20 focus:bg-white transition-all"
                rows={1}
                style={{ minHeight: '48px', maxHeight: '120px' }}
              />
            </div>

            {/* Voice Recording Button */}
            <button
              onClick={() => {
                if (isRecording) {
                  stopRecording();
                } else {
                  startRecording();
                }
              }}
              className={`p-3 rounded-full transition-all ${
                isRecording 
                  ? 'bg-red-500 text-white hover:bg-red-600'
                  : 'text-domeo-gray-600 hover:text-domeo-black'
              }`}
            >
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                <path d="M10 1C11.66 1 13 2.34 13 4V8C13 9.66 11.66 11 10 11C8.34 11 7 9.66 7 8V4C7 2.34 8.34 1 10 1Z" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M15 8V10C15 12.76 12.76 15 10 15C7.24 15 5 12.76 5 10V8" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M10 15V19" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M7 19H13" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </button>

            <button
              onClick={() => {
                handleSend();
              }}
              disabled={!newMessage.trim()}
              className={`p-3 rounded-full transition-all ${
                newMessage.trim()
                  ? 'bg-domeo-accent text-white hover:bg-domeo-accent/80'
                  : 'bg-domeo-gray-200 text-domeo-gray-400'
              }`}
            >
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                {newMessage.trim() ? (
                  <path d="M18 10L3 2L7 10L3 18L18 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                ) : (
                  <path d="M2 10L17 2L13 10L17 18L2 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                )}
              </svg>
            </button>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-2 mt-2">
            <button 
              onClick={() => {
                setShowDateProposal(true);
              }}
              className="px-3 py-1.5 bg-domeo-gray-100 text-domeo-gray-600 text-xs rounded-full hover:bg-domeo-gray-200 transition-colors"
            >
              Suggest a date 📅
            </button>
            <button 
              onClick={() => {
                setShowLocationPicker(true);
              }}
              className="px-3 py-1.5 bg-domeo-gray-100 text-domeo-gray-600 text-xs rounded-full hover:bg-domeo-gray-200 transition-colors"
            >
              Share location 📍
            </button>
          </div>
        </div>
      </div>

      {/* Date Proposal Modal */}
      {showDateProposal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Suggest a Date</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-domeo-gray-700 mb-1">Date</label>
                <input
                  type="date"
                  value={dateProposal.date}
                  onChange={(e) => setDateProposal(prev => ({ ...prev, date: e.target.value }))}
                  className="w-full px-3 py-2 border border-domeo-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-domeo-accent/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-domeo-gray-700 mb-1">Time</label>
                <input
                  type="time"
                  value={dateProposal.time}
                  onChange={(e) => setDateProposal(prev => ({ ...prev, time: e.target.value }))}
                  className="w-full px-3 py-2 border border-domeo-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-domeo-accent/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-domeo-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  value={dateProposal.location}
                  onChange={(e) => setDateProposal(prev => ({ ...prev, location: e.target.value }))}
                  placeholder="e.g., Coffee shop downtown"
                  className="w-full px-3 py-2 border border-domeo-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-domeo-accent/20"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => {
                  setShowDateProposal(false);
                }}
                className="flex-1 px-4 py-2 text-domeo-gray-600 border border-domeo-gray-300 rounded-lg hover:bg-domeo-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleDateProposal();
                }}
                disabled={!dateProposal.date || !dateProposal.time || !dateProposal.location}
                className="flex-1 px-4 py-2 bg-domeo-accent text-white rounded-lg hover:bg-domeo-accent/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send Proposal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Location Picker Modal */}
      {showLocationPicker && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Share Location</h3>
            <p className="text-sm text-domeo-gray-600 mb-6">
              Share your current location with {match.name}?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowLocationPicker(false);
                }}
                className="flex-1 px-4 py-2 text-domeo-gray-600 border border-domeo-gray-300 rounded-lg hover:bg-domeo-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleShareLocation();
                }}
                className="flex-1 px-4 py-2 bg-domeo-accent text-white rounded-lg hover:bg-domeo-accent/80 transition-colors"
              >
                Share Location
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 