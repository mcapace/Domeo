'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { DomeIcons } from '@/components/DomeIcons';

type DomeType = 'connect' | 'explore' | 'social' | 'professional' | 'private';

interface CoreProfile {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
  verified: boolean;
  email: string;
  phone: string;
}

interface DomeProfile {
  enabled: boolean;
  photos: string[];
  prompts: {
    question: string;
    answer: string;
  }[];
  preferences: Record<string, any>;
}

const domes = [
  { id: 'connect' as DomeType, name: 'Connect', icon: DomeIcons.connect, color: 'text-pink-600', bgColor: 'bg-pink-50' },
  { id: 'explore' as DomeType, name: 'Explore', icon: DomeIcons.explore, color: 'text-purple-600', bgColor: 'bg-purple-50' },
  { id: 'social' as DomeType, name: 'Social', icon: DomeIcons.social, color: 'text-blue-600', bgColor: 'bg-blue-50' },
  { id: 'professional' as DomeType, name: 'Professional', icon: DomeIcons.professional, color: 'text-gray-700', bgColor: 'bg-gray-50' },
  { id: 'private' as DomeType, name: 'Private', icon: DomeIcons.private, color: 'text-domeo-black', bgColor: 'bg-domeo-gray-100' }
];

// Dome-specific prompt options
const domePrompts = {
  connect: [
    "I'm looking for",
    "Perfect Sunday",
    "I geek out on",
    "Dating me is like",
    "I'll fall for you if",
    "My simple pleasures",
    "The way to win me over is",
    "Green flags I look for",
    "I promise I won't judge you for"
  ],
  explore: [
    "Currently exploring",
    "My boundaries",
    "I'm experienced in",
    "Ideal dynamic",
    "Communication style",
    "Aftercare looks like",
    "I'm curious about",
    "Safe words are"
  ],
  social: [
    "Looking for friends who",
    "My ideal weekend",
    "Let's bond over",
    "I need a buddy for",
    "My interests include",
    "Friend deal breaker",
    "Best friend material if"
  ],
  professional: [
    "Currently building",
    "My superpower",
    "Looking to connect with",
    "I can help with",
    "Ask me about",
    "My expertise",
    "Collaboration style"
  ],
  private: [
    "Seeking",
    "Discretion level",
    "Available",
    "Boundaries",
    "Must understand",
    "Not looking for"
  ]
};

export default function EditProfile() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<'core' | DomeType>('core');
  const [coreProfile, setCoreProfile] = useState<CoreProfile>({
    firstName: 'Maya',
    lastName: 'Chen',
    age: 29,
    location: 'New York, NY',
    verified: true,
    email: 'maya@example.com',
    phone: '+1 (555) 123-4567'
  });

  const [domeProfiles, setDomeProfiles] = useState<Record<DomeType, DomeProfile>>({
    connect: {
      enabled: true,
      photos: ['/api/placeholder/400/600'],
      prompts: [
        { question: "I'm looking for", answer: "Someone who can make me laugh and isn't afraid of deep conversations" },
        { question: "Perfect Sunday", answer: "Farmers market, cooking together, wine on the couch" },
        { question: "I geek out on", answer: "UX design and true crime podcasts" }
      ],
      preferences: {
        ageRange: [27, 35],
        distance: 15,
        lookingFor: ['Long-term relationship']
      }
    },
    explore: {
      enabled: true,
      photos: [],
      prompts: [
        { question: "Currently exploring", answer: "" },
        { question: "My boundaries", answer: "" },
        { question: "Communication style", answer: "" }
      ],
      preferences: {
        ageRange: [25, 40],
        distance: 25,
        interests: []
      }
    },
    social: {
      enabled: true,
      photos: [],
      prompts: [],
      preferences: {}
    },
    professional: {
      enabled: true,
      photos: [],
      prompts: [],
      preferences: {}
    },
    private: {
      enabled: false,
      photos: [],
      prompts: [],
      preferences: {}
    }
  });

  const activeDome = activeSection !== 'core' ? activeSection as DomeType : null;
  const currentDomeProfile = activeDome ? domeProfiles[activeDome] : null;

  const handlePromptChange = (dome: DomeType, index: number, field: 'question' | 'answer', value: string) => {
    setDomeProfiles(prev => ({
      ...prev,
      [dome]: {
        ...prev[dome],
        prompts: prev[dome].prompts.map((p, i) => 
          i === index ? { ...p, [field]: value } : p
        )
      }
    }));
  };

  const addPrompt = (dome: DomeType) => {
    setDomeProfiles(prev => ({
      ...prev,
      [dome]: {
        ...prev[dome],
        prompts: [...prev[dome].prompts, { question: '', answer: '' }]
      }
    }));
  };

  const removePrompt = (dome: DomeType, index: number) => {
    setDomeProfiles(prev => ({
      ...prev,
      [dome]: {
        ...prev[dome],
        prompts: prev[dome].prompts.filter((_, i) => i !== index)
      }
    }));
  };

  return (
    <div className="min-h-screen bg-domeo-gray-50">
      {/* Profile Edit Header */}
      <header className="bg-white border-b border-domeo-gray-200 sticky top-[96px] z-30">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/dashboard" 
              className="flex items-center gap-2 text-domeo-gray-600 hover:text-domeo-black transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                <path d="M12 5L7 10L12 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-sm">Back</span>
            </Link>

            <h1 className="text-lg font-medium text-domeo-black">Edit Profile</h1>

            <button 
              className="px-4 py-2 bg-domeo-black text-white text-sm font-medium rounded-lg hover:bg-domeo-charcoal transition-colors"
              onClick={() => {
                // Save changes
                router.push('/dashboard');
              }}
            >
              Save
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Navigation */}
        <aside className="w-64 bg-white border-r border-domeo-gray-200 sticky top-[176px] h-[calc(100vh-176px)] overflow-y-auto">
          <nav className="p-4 space-y-1">
            <button
              onClick={() => setActiveSection('core')}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                activeSection === 'core'
                  ? 'bg-domeo-gray-100 text-domeo-black font-medium'
                  : 'text-domeo-gray-600 hover:bg-domeo-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="10" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M4 17C4 14.2386 6.23858 12 9 12H11C13.7614 12 16 14.2386 16 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span>Core Profile</span>
              </div>
            </button>

            <div className="pt-4 pb-2">
              <p className="px-4 text-xs font-medium text-domeo-gray-500 uppercase tracking-wider">
                Dome Profiles
              </p>
            </div>

            {domes.map((dome) => (
              <button
                key={dome.id}
                onClick={() => setActiveSection(dome.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  activeSection === dome.id
                    ? `${dome.bgColor} ${dome.color} font-medium`
                    : 'text-domeo-gray-600 hover:bg-domeo-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className={activeSection === dome.id ? dome.color : 'text-domeo-gray-500'}>
                      {dome.icon}
                    </span>
                    <span>{dome.name}</span>
                  </div>
                  {domeProfiles[dome.id].enabled && (
                    <span className={`w-2 h-2 rounded-full ${
                      activeSection === dome.id ? 'bg-current' : 'bg-domeo-gray-400'
                    }`} />
                  )}
                </div>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-3xl mx-auto">
            {activeSection === 'core' ? (
              // Core Profile Section
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-light text-domeo-black mb-2">Core Profile</h2>
                  <p className="text-domeo-gray-600">
                    This information is verified and shared across all domes
                  </p>
                </div>

                {/* Verification Status */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-domeo-black">Identity Verified</h3>
                      <p className="text-sm text-domeo-gray-600">
                        Your identity has been verified with government ID
                      </p>
                    </div>
                  </div>
                </div>

                {/* Basic Info */}
                <div className="bg-white rounded-xl border border-domeo-gray-200 p-6">
                  <h3 className="font-medium text-domeo-black mb-6">Basic Information</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-domeo-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        value={coreProfile.firstName}
                        onChange={(e) => setCoreProfile({ ...coreProfile, firstName: e.target.value })}
                        className="w-full px-4 py-2 border border-domeo-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-domeo-accent/20 focus:border-domeo-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-domeo-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={coreProfile.lastName}
                        onChange={(e) => setCoreProfile({ ...coreProfile, lastName: e.target.value })}
                        className="w-full px-4 py-2 border border-domeo-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-domeo-accent/20 focus:border-domeo-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-domeo-gray-700 mb-2">
                        Age
                      </label>
                      <input
                        type="number"
                        value={coreProfile.age}
                        onChange={(e) => setCoreProfile({ ...coreProfile, age: parseInt(e.target.value) })}
                        className="w-full px-4 py-2 border border-domeo-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-domeo-accent/20 focus:border-domeo-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-domeo-gray-700 mb-2">
                        Location
                      </label>
                      <input
                        type="text"
                        value={coreProfile.location}
                        onChange={(e) => setCoreProfile({ ...coreProfile, location: e.target.value })}
                        className="w-full px-4 py-2 border border-domeo-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-domeo-accent/20 focus:border-domeo-accent"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-white rounded-xl border border-domeo-gray-200 p-6">
                  <h3 className="font-medium text-domeo-black mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-domeo-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={coreProfile.email}
                        onChange={(e) => setCoreProfile({ ...coreProfile, email: e.target.value })}
                        className="w-full px-4 py-2 border border-domeo-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-domeo-accent/20 focus:border-domeo-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-domeo-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={coreProfile.phone}
                        onChange={(e) => setCoreProfile({ ...coreProfile, phone: e.target.value })}
                        className="w-full px-4 py-2 border border-domeo-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-domeo-accent/20 focus:border-domeo-accent"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : activeDome && currentDomeProfile ? (
              // Dome-specific Profile Section
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-light text-domeo-black mb-2">
                    {domes.find(d => d.id === activeDome)?.name} Profile
                  </h2>
                  <p className="text-domeo-gray-600">
                    Customize how you appear in {domes.find(d => d.id === activeDome)?.name}
                  </p>
                </div>

                {/* Enable/Disable Dome */}
                <div className={`${domes.find(d => d.id === activeDome)?.bgColor} border ${
                  domes.find(d => d.id === activeDome)?.bgColor.replace('bg-', 'border-')
                } rounded-xl p-6`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-domeo-black">
                        {currentDomeProfile.enabled ? 'Active' : 'Inactive'} in this dome
                      </h3>
                      <p className="text-sm text-domeo-gray-600 mt-1">
                        {currentDomeProfile.enabled 
                          ? `Your profile is visible in ${domes.find(d => d.id === activeDome)?.name}`
                          : `Enable to start matching in ${domes.find(d => d.id === activeDome)?.name}`
                        }
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setDomeProfiles(prev => ({
                          ...prev,
                          [activeDome]: {
                            ...prev[activeDome],
                            enabled: !prev[activeDome].enabled
                          }
                        }));
                      }}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        currentDomeProfile.enabled ? 'bg-domeo-accent' : 'bg-domeo-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          currentDomeProfile.enabled ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {currentDomeProfile.enabled && (
                  <>
                    {/* Photos */}
                    <div className="bg-white rounded-xl border border-domeo-gray-200 p-6">
                      <h3 className="font-medium text-domeo-black mb-6">Photos</h3>
                      <div className="grid grid-cols-3 gap-4">
                        {[...Array(6)].map((_, index) => (
                          <div
                            key={index}
                            className="aspect-[3/4] bg-domeo-gray-100 rounded-xl border-2 border-dashed border-domeo-gray-300 flex items-center justify-center hover:bg-domeo-gray-50 transition-colors cursor-pointer"
                          >
                            {currentDomeProfile.photos[index] ? (
                              <img 
                                src={currentDomeProfile.photos[index]} 
                                alt={`Photo ${index + 1}`}
                                className="w-full h-full object-cover rounded-xl"
                              />
                            ) : (
                              <svg className="w-8 h-8 text-domeo-gray-400" viewBox="0 0 24 24" fill="none">
                                <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                              </svg>
                            )}
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-domeo-gray-600 mt-4">
                        Add up to 6 photos for {domes.find(d => d.id === activeDome)?.name}
                      </p>
                    </div>

                    {/* Prompts */}
                    <div className="bg-white rounded-xl border border-domeo-gray-200 p-6">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="font-medium text-domeo-black">Prompts</h3>
                        {currentDomeProfile.prompts.length < 3 && (
                          <button
                            onClick={() => addPrompt(activeDome)}
                            className="text-sm text-domeo-accent hover:text-domeo-accent/80 transition-colors"
                          >
                            + Add prompt
                          </button>
                        )}
                      </div>
                      
                      <div className="space-y-6">
                        {currentDomeProfile.prompts.map((prompt, index) => (
                          <div key={index} className="relative">
                            <div className="space-y-3">
                              <select
                                value={prompt.question}
                                onChange={(e) => handlePromptChange(activeDome, index, 'question', e.target.value)}
                                className="w-full px-4 py-2 border border-domeo-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-domeo-accent/20 focus:border-domeo-accent"
                              >
                                <option value="">Select a prompt...</option>
                                {domePrompts[activeDome].map((q) => (
                                  <option key={q} value={q}>{q}</option>
                                ))}
                              </select>
                              
                              <textarea
                                value={prompt.answer}
                                onChange={(e) => handlePromptChange(activeDome, index, 'answer', e.target.value)}
                                placeholder="Your answer..."
                                className="w-full px-4 py-3 border border-domeo-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-domeo-accent/20 focus:border-domeo-accent resize-none"
                                rows={3}
                              />
                            </div>
                            
                            <button
                              onClick={() => removePrompt(activeDome, index)}
                              className="absolute -top-2 -right-2 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center hover:bg-red-200 transition-colors"
                            >
                              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                                <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                              </svg>
                            </button>
                          </div>
                        ))}
                      </div>
                      
                      {currentDomeProfile.prompts.length === 0 && (
                        <p className="text-center text-domeo-gray-500 py-8">
                          Add prompts to help people get to know you
                        </p>
                      )}
                    </div>

                    {/* Dome-specific Preferences */}
                    <div className="bg-white rounded-xl border border-domeo-gray-200 p-6">
                      <h3 className="font-medium text-domeo-black mb-6">
                        {domes.find(d => d.id === activeDome)?.name} Preferences
                      </h3>
                      
                      {activeDome === 'connect' && (
                        <div className="space-y-6">
                          <div>
                            <label className="block text-sm font-medium text-domeo-gray-700 mb-2">
                              Looking for
                            </label>
                            <div className="space-y-2">
                              {['Long-term relationship', 'Short-term dating', 'New friends', 'Marriage'].map((option) => (
                                <label key={option} className="flex items-center gap-3">
                                  <input
                                    type="checkbox"
                                    checked={currentDomeProfile.preferences.lookingFor?.includes(option)}
                                    onChange={(e) => {
                                      const current = currentDomeProfile.preferences.lookingFor || [];
                                      const updated = e.target.checked
                                        ? [...current, option]
                                        : current.filter((o: string) => o !== option);
                                      setDomeProfiles(prev => ({
                                        ...prev,
                                        [activeDome]: {
                                          ...prev[activeDome],
                                          preferences: {
                                            ...prev[activeDome].preferences,
                                            lookingFor: updated
                                          }
                                        }
                                      }));
                                    }}
                                    className="rounded border-domeo-gray-300 text-domeo-accent focus:ring-domeo-accent"
                                  />
                                  <span className="text-sm text-domeo-gray-700">{option}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {activeDome === 'explore' && (
                        <div className="space-y-6">
                          <div>
                            <label className="block text-sm font-medium text-domeo-gray-700 mb-2">
                              Relationship Style
                            </label>
                            <div className="space-y-2">
                              {['ENM', 'Polyamorous', 'Open relationship', 'Monogamous but curious'].map((option) => (
                                <label key={option} className="flex items-center gap-3">
                                  <input
                                    type="checkbox"
                                    className="rounded border-domeo-gray-300 text-domeo-accent focus:ring-domeo-accent"
                                  />
                                  <span className="text-sm text-domeo-gray-700">{option}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            ) : null}
          </div>
        </main>
      </div>
    </div>
  );
} 