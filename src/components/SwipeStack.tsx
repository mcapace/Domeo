'use client';

import { useState } from 'react';
import SwipeCard from './SwipeCard';

// Sample profiles for Connect dome
const sampleProfiles = [
  {
    id: '1',
    name: 'Sarah',
    age: 28,
    distance: '2 miles away',
    photos: ['/api/placeholder/400/600', '/api/placeholder/400/601', '/api/placeholder/400/602'],
    prompts: [
      {
        question: "I'm looking for",
        answer: "Someone who can make me laugh and isn't afraid of deep conversations over wine"
      },
      {
        question: "Perfect Sunday",
        answer: "Farmers market, cooking together, then getting lost in a good documentary"
      },
      {
        question: "I geek out on",
        answer: "True crime podcasts and perfectly organized spreadsheets (I know, I'm fun at parties)"
      }
    ],
    verified: true,
    intentions: ['Long-term relationship', 'Open to short']
  },
  {
    id: '2',
    name: 'Emma',
    age: 26,
    distance: '5 miles away',
    photos: ['/api/placeholder/400/603', '/api/placeholder/400/604'],
    prompts: [
      {
        question: "Dating me is like",
        answer: "Finding an extra fry at the bottom of the bag - a delightful surprise"
      },
      {
        question: "I'll fall for you if",
        answer: "You can beat me at Mario Kart (spoiler: you won't)"
      },
      {
        question: "My simple pleasures",
        answer: "Morning coffee, evening runs, and midnight conversations"
      }
    ],
    verified: true,
    intentions: ['Long-term relationship']
  },
  {
    id: '3',
    name: 'Olivia',
    age: 31,
    distance: '8 miles away',
    photos: ['/api/placeholder/400/605'],
    prompts: [
      {
        question: "The way to win me over is",
        answer: "Show me your book collection and cook me pasta"
      },
      {
        question: "I promise I won't judge you for",
        answer: "Crying during Pixar movies (I'll be crying too)"
      },
      {
        question: "Green flags I look for",
        answer: "Emotional intelligence, good with dogs, and tips well"
      }
    ],
    verified: true,
    intentions: ['Long-term relationship', 'Marriage minded']
  }
];

interface SwipeStackProps {
  dome: 'connect' | 'explore' | 'social' | 'professional' | 'private';
}

export default function SwipeStack({ dome }: SwipeStackProps) {
  const [profiles, setProfiles] = useState(sampleProfiles);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedProfiles, setLikedProfiles] = useState<string[]>([]);

  const currentProfile = profiles[currentIndex];

  const handleLike = (profileId: string, likedItem?: { type: 'photo' | 'prompt'; index: number }) => {
    console.log('Liked:', profileId, likedItem);
    setLikedProfiles([...likedProfiles, profileId]);
    moveToNext();
  };

  const handlePass = (profileId: string) => {
    console.log('Passed:', profileId);
    moveToNext();
  };

  const handleSuperLike = (profileId: string) => {
    console.log('Super Liked:', profileId);
    setLikedProfiles([...likedProfiles, profileId]);
    moveToNext();
  };

  const moveToNext = () => {
    if (currentIndex < profiles.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // No more profiles
      setCurrentIndex(-1);
    }
  };

  if (currentIndex === -1 || !currentProfile) {
    return (
      <div className="w-full max-w-sm mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
          <div className="w-20 h-20 bg-domeo-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-domeo-gray-400" viewBox="0 0 24 24" fill="none">
              <path d="M9 11L12 14L16 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-lg font-medium text-domeo-black mb-2">You've seen everyone!</h3>
          <p className="text-sm text-domeo-gray-600 mb-6">
            Check back later for new profiles or adjust your preferences
          </p>
          <button className="px-6 py-3 bg-domeo-black text-white text-sm font-medium uppercase tracking-wider rounded-lg hover:bg-domeo-charcoal transition-colors">
            Update Preferences
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <SwipeCard
        profile={currentProfile}
        onLike={handleLike}
        onPass={handlePass}
        onSuperLike={handleSuperLike}
      />
      
      {/* Profile Counter */}
      <div className="text-center mt-4">
        <p className="text-sm text-domeo-gray-500">
          {currentIndex + 1} of {profiles.length} profiles
        </p>
      </div>
    </div>
  );
} 