'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { DomeIcons } from '@/components/DomeIcons';

type DomeType = 'connect' | 'explore' | 'social' | 'professional' | 'private';

interface Like {
  id: string;
  name: string;
  age: number;
  photo: string;
  likedItem: string;
  time: string;
}

interface Match {
  id: string;
  name: string;
  age?: number;
  role?: string;
  photo: string;
  lastMessage: string;
  time: string;
  unread: number;
  isNew?: boolean;
}

const domes = [
  { id: 'connect' as DomeType, name: 'CONNECT', icon: DomeIcons.connect, color: 'text-pink-600', bgColor: 'bg-pink-50' },
  { id: 'explore' as DomeType, name: 'EXPLORE', icon: DomeIcons.explore, color: 'text-purple-600', bgColor: 'bg-purple-50' },
  { id: 'social' as DomeType, name: 'SOCIAL', icon: DomeIcons.social, color: 'text-blue-600', bgColor: 'bg-blue-50' },
  { id: 'professional' as DomeType, name: 'PROFESSIONAL', icon: DomeIcons.professional, color: 'text-gray-700', bgColor: 'bg-gray-50' },
  { id: 'private' as DomeType, name: 'PRIVATE', icon: DomeIcons.private, color: 'text-domeo-black', bgColor: 'bg-domeo-gray-100' }
];

// Sample matches data
const sampleMatches: Record<DomeType, { likes: Like[]; matches: Match[] }> = {
  connect: {
    likes: [
      { id: '1', name: 'Alex', age: 29, photo: '👤', likedItem: 'Your photo', time: '2 hours ago' },
      { id: '2', name: 'Sam', age: 31, photo: '👤', likedItem: 'Perfect Sunday answer', time: '5 hours ago' }
    ],
    matches: [
      { 
        id: '3', 
        name: 'David', 
        age: 32, 
        photo: '👤', 
        lastMessage: 'Dog park this weekend?', 
        time: '2h ago',
        unread: 2
      },
      { 
        id: '4', 
        name: 'Michael', 
        age: 30, 
        photo: '👤', 
        lastMessage: 'That hiking trail looks amazing!', 
        time: '5h ago',
        unread: 0
      },
      { 
        id: '5', 
        name: 'James', 
        age: 34, 
        photo: '👤', 
        lastMessage: 'Just matched!', 
        time: 'Just now',
        unread: 1,
        isNew: true
      }
    ]
  },
  explore: {
    likes: [],
    matches: [
      { 
        id: '6', 
        name: 'Jordan & Sam', 
        age: 28, 
        photo: '👥', 
        lastMessage: 'Dinner Friday?', 
        time: '1h ago',
        unread: 1
      }
    ]
  },
  social: {
    likes: [
      { id: '7', name: 'Priya', age: 31, photo: '👤', likedItem: 'Hiking group interest', time: '1 hour ago' }
    ],
    matches: [
      { 
        id: '8', 
        name: 'Priya', 
        age: 31, 
        photo: '👤', 
        lastMessage: 'Wine bar at 7?', 
        time: '30m ago',
        unread: 0
      }
    ]
  },
  professional: {
    likes: [],
    matches: [
      { 
        id: '9', 
        name: 'Alex Kim', 
        role: 'Founder', 
        photo: '👤', 
        lastMessage: 'Coffee Thursday?', 
        time: '4h ago',
        unread: 0
      }
    ]
  },
  private: {
    likes: [],
    matches: []
  }
};

export default function MatchesPage() {
  const router = useRouter();
  const [activeDome, setActiveDome] = useState<DomeType>('connect');
  const [activeTab, setActiveTab] = useState<'likes' | 'matches'>('matches');
  
  const currentDome = domes.find(d => d.id === activeDome)!;
  const currentData = sampleMatches[activeDome];
  const totalUnread = currentData.matches.reduce((sum, match) => sum + match.unread, 0);

  return (
    <div className="min-h-screen bg-domeo-gray-50 pt-32">
      {/* Page Header */}
      <div className="bg-white border-b border-domeo-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Back to Dashboard */}
          <Link href="/dashboard" className="flex items-center gap-2 text-domeo-gray-600 hover:text-domeo-black transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
              <path d="M12 5L7 10L12 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-sm">Back</span>
          </Link>

          {/* Title */}
          <h1 className="text-lg font-medium text-domeo-black">Matches & Messages</h1>

          {/* Notifications */}
          <button className="relative p-2 text-domeo-gray-600 hover:text-domeo-black transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
              <path d="M10 2C13.866 2 17 5.13401 17 9C17 12.866 13.866 16 10 16C9.5 16 9 15.9 8.5 15.8L4 17L5.2 12.5C4.4 11.5 4 10.3 4 9C4 5.13401 7.13401 2 10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {totalUnread > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-domeo-accent text-white text-xs rounded-full flex items-center justify-center">
                {totalUnread}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Dome Tabs */}
      <div className="bg-white border-b border-domeo-gray-200 px-6 pb-3">
        <div className="flex gap-1 bg-domeo-gray-100 rounded-lg p-1">
          {domes.map((dome) => (
            <button
              key={dome.id}
              onClick={() => setActiveDome(dome.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-md transition-all ${
                activeDome === dome.id
                  ? 'bg-white shadow-sm'
                  : 'hover:bg-domeo-gray-50'
              }`}
            >
              <span className={activeDome === dome.id ? dome.color : 'text-domeo-gray-500'}>
                {dome.icon}
              </span>
              <span className={`text-sm font-medium ${
                activeDome === dome.id ? 'text-domeo-black' : 'text-domeo-gray-600'
              }`}>
                {dome.name}
              </span>
              {sampleMatches[dome.id].matches.filter(m => m.unread > 0).length > 0 && (
                <span className={`w-2 h-2 rounded-full ${
                  activeDome === dome.id ? dome.bgColor : 'bg-domeo-gray-400'
                }`} />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-6">
        {/* Likes/Matches Toggle */}
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <div className="flex border-b border-domeo-gray-200">
            <button
              onClick={() => setActiveTab('likes')}
              className={`flex-1 py-4 text-center font-medium transition-colors relative ${
                activeTab === 'likes'
                  ? 'text-domeo-black'
                  : 'text-domeo-gray-500 hover:text-domeo-gray-700'
              }`}
            >
              Likes
              {currentData.likes.length > 0 && (
                <span className="ml-2 px-2 py-0.5 bg-domeo-accent text-white text-xs rounded-full">
                  {currentData.likes.length}
                </span>
              )}
              {activeTab === 'likes' && (
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${currentDome.bgColor}`} />
              )}
            </button>
            
            <button
              onClick={() => setActiveTab('matches')}
              className={`flex-1 py-4 text-center font-medium transition-colors relative ${
                activeTab === 'matches'
                  ? 'text-domeo-black'
                  : 'text-domeo-gray-500 hover:text-domeo-gray-700'
              }`}
            >
              Messages
              {totalUnread > 0 && (
                <span className="ml-2 px-2 py-0.5 bg-domeo-accent text-white text-xs rounded-full">
                  {totalUnread}
                </span>
              )}
              {activeTab === 'matches' && (
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${currentDome.bgColor}`} />
              )}
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {activeTab === 'likes' ? (
              <div>
                {currentData.likes.length > 0 ? (
                  <div className="space-y-4">
                    <p className="text-sm text-domeo-gray-600 mb-4">
                      People who liked you in {currentDome.name}
                    </p>
                    {currentData.likes.map((like) => (
                      <div
                        key={like.id}
                        className="flex items-center justify-between p-4 bg-domeo-gray-50 rounded-xl hover:bg-domeo-gray-100 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-domeo-gray-200 rounded-full flex items-center justify-center text-2xl">
                            {like.photo}
                          </div>
                          <div>
                            <p className="font-medium text-domeo-black">
                              {like.name}, {like.age}
                            </p>
                            <p className="text-sm text-domeo-gray-600">
                              Liked your {like.likedItem}
                            </p>
                            <p className="text-xs text-domeo-gray-500 mt-1">
                              {like.time}
                            </p>
                          </div>
                        </div>
                        <button className={`px-6 py-2 ${currentDome.bgColor} ${currentDome.color} text-sm font-medium rounded-lg hover:opacity-80 transition-opacity`}>
                          View Profile
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className={`w-20 h-20 ${currentDome.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <span className={`${currentDome.color} scale-150`}>{currentDome.icon}</span>
                    </div>
                    <h3 className="text-lg font-medium text-domeo-black mb-2">No likes yet</h3>
                    <p className="text-sm text-domeo-gray-600">
                      Keep swiping in {currentDome.name} to get more likes!
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div>
                {currentData.matches.length > 0 ? (
                  <div className="space-y-2">
                    {currentData.matches.map((match) => (
                      <button
                        key={match.id}
                        onClick={() => router.push(`/messages/${match.id}`)}
                        className="w-full flex items-center gap-4 p-4 hover:bg-domeo-gray-50 rounded-xl transition-colors text-left"
                      >
                        <div className="w-14 h-14 bg-domeo-gray-200 rounded-full flex items-center justify-center text-xl relative">
                          {match.photo}
                          {match.isNew && (
                            <span className="absolute -top-1 -right-1 w-4 h-4 bg-domeo-accent rounded-full flex items-center justify-center">
                              <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 10 10" fill="none">
                                <path d="M5 1L6 3.5L8.5 4L6.75 5.5L7.5 8L5 6.5L2.5 8L3.25 5.5L1.5 4L4 3.5L5 1Z" fill="currentColor"/>
                              </svg>
                            </span>
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-domeo-black">
                            {match.name} {match.age ? `• ${match.age}` : ''} {match.role ? `• ${match.role}` : ''}
                          </p>
                          <p className="text-sm text-domeo-gray-600 line-clamp-1">
                            {match.lastMessage}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-domeo-gray-500">{match.time}</p>
                          {match.unread > 0 && (
                            <span className="inline-block mt-1 px-2 py-0.5 bg-domeo-accent text-white text-xs rounded-full">
                              {match.unread}
                            </span>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className={`w-20 h-20 ${currentDome.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <span className={`${currentDome.color} scale-150`}>{currentDome.icon}</span>
                    </div>
                    <h3 className="text-lg font-medium text-domeo-black mb-2">No matches yet</h3>
                    <p className="text-sm text-domeo-gray-600 mb-6">
                      When you match with someone in {currentDome.name}, they'll appear here
                    </p>
                    <Link
                      href="/dashboard"
                      className="inline-block px-6 py-3 bg-domeo-black text-white text-sm font-medium uppercase tracking-wider rounded-lg hover:bg-domeo-charcoal transition-colors"
                    >
                      Start Swiping
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 