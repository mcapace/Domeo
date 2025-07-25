'use client';

import { useState } from 'react';
import Link from 'next/link';
import { DomeIcons } from '@/components/DomeIcons';
import SwipeCard from '@/components/SwipeCard';

type DomeType = 'connect' | 'explore' | 'social' | 'professional' | 'private';

const domes = [
  { id: 'connect' as DomeType, name: 'Connect', icon: DomeIcons.connect, color: 'text-pink-600' },
  { id: 'explore' as DomeType, name: 'Explore', icon: DomeIcons.explore, color: 'text-purple-600' },
  { id: 'social' as DomeType, name: 'Social', icon: DomeIcons.social, color: 'text-blue-600' },
  { id: 'professional' as DomeType, name: 'Professional', icon: DomeIcons.professional, color: 'text-gray-700' },
  { id: 'private' as DomeType, name: 'Private', icon: DomeIcons.private, color: 'text-domeo-black' }
];

// Sample user profile data
const userProfiles = {
  connect: {
    id: 'user',
    name: 'Maya',
    age: 29,
    distance: '0 miles',
    photos: ['/api/placeholder/400/600', '/api/placeholder/400/601'],
    prompts: [
      { question: "I'm looking for", answer: "Someone who can make me laugh and isn't afraid of deep conversations" },
      { question: "Perfect Sunday", answer: "Farmers market, cooking together, wine on the couch" },
      { question: "I geek out on", answer: "UX design and true crime podcasts" }
    ],
    verified: true,
    intentions: ['Long-term relationship']
  },
  explore: {
    id: 'user',
    name: 'Maya',
    age: 29,
    distance: '0 miles',
    photos: ['/api/placeholder/400/602'],
    prompts: [
      { question: "Currently exploring", answer: "ENM and building meaningful connections" },
      { question: "My boundaries", answer: "Communication is key. STI testing required." },
      { question: "Ideal dynamic", answer: "Equal partnership with spicy adventures" }
    ],
    verified: true,
    lifestyle: ['ENM', 'Exploring']
  },
  social: {
    id: 'user',
    name: 'Maya',
    age: 29,
    distance: '0 miles',
    photos: ['/api/placeholder/400/603'],
    prompts: [
      { question: "Looking for friends who", answer: "Love hiking and wine nights equally" },
      { question: "Let's bond over", answer: "True crime podcasts and design critiques" }
    ],
    verified: true,
    interests: ['Hiking', 'Wine', 'Design']
  },
  professional: {
    id: 'user',
    name: 'Maya Chen',
    age: 29,
    distance: '0 miles',
    photos: ['/api/placeholder/400/604'],
    prompts: [
      { question: "Currently building", answer: "AI-powered design tools at TechStartup" },
      { question: "I can help with", answer: "UX strategy and product thinking" }
    ],
    verified: true,
    profession: 'UX Designer'
  },
  private: {
    id: 'user',
    name: 'M.',
    age: 29,
    distance: 'Hidden',
    photos: ['/api/placeholder/400/605'],
    prompts: [
      { question: "Seeking", answer: "Discreet connections with mutual respect" },
      { question: "Available", answer: "Weekday evenings" }
    ],
    verified: true,
    anonymous: true
  }
};

export default function ProfilePreview() {
  const [activeDome, setActiveDome] = useState<DomeType>('connect');
  const [showInfo, setShowInfo] = useState(false);

  const currentProfile = userProfiles[activeDome];

  return (
    <div className="min-h-screen bg-domeo-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b border-domeo-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-medium text-domeo-black">Profile Preview</h1>

            <button
              onClick={() => setShowInfo(!showInfo)}
              className="p-2 text-domeo-gray-600 hover:text-domeo-black transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M10 6V10M10 14H10.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Info Banner */}
        {showInfo && (
          <div className="px-6 py-3 bg-domeo-accent-muted border-t border-domeo-accent/20">
            <p className="text-sm text-domeo-gray-700">
              This is how others see your profile. Swipe between domes to preview each version.
            </p>
          </div>
        )}
      </div>

      {/* Dome Selector */}
      <div className="bg-white border-b border-domeo-gray-200 px-6 py-3">
        <div className="flex gap-2 overflow-x-auto">
          {domes.map((dome) => (
            <button
              key={dome.id}
              onClick={() => setActiveDome(dome.id)}
              disabled={!userProfiles[dome.id]}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                activeDome === dome.id
                  ? 'bg-domeo-black text-white'
                  : userProfiles[dome.id]
                    ? 'bg-domeo-gray-100 text-domeo-gray-600 hover:bg-domeo-gray-200'
                    : 'bg-domeo-gray-50 text-domeo-gray-400 cursor-not-allowed'
              }`}
            >
              <span className={activeDome === dome.id ? 'text-white' : dome.color}>
                {dome.icon}
              </span>
              <span className="text-sm font-medium">{dome.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Preview Area */}
      <div className="flex justify-center items-center min-h-[calc(100vh-200px)] p-6">
        <div className="w-full max-w-md">
          <SwipeCard
            profile={currentProfile}
            onLike={() => console.log('Preview like')}
            onPass={() => console.log('Preview pass')}
          />
          
          {/* Edit Button */}
          <div className="text-center mt-6">
            <Link
              href={`/profile/edit?dome=${activeDome}`}
              className="inline-block px-6 py-3 bg-domeo-black text-white text-sm font-medium uppercase tracking-wider rounded-lg hover:bg-domeo-charcoal transition-colors"
            >
              Edit {domes.find(d => d.id === activeDome)?.name} Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 