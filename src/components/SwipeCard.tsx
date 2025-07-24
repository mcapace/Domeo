'use client';

import { useState } from 'react';
import Image from 'next/image';

interface SwipeProfile {
  id: string;
  name: string;
  age: number;
  distance: string;
  photos: string[];
  prompts: {
    question: string;
    answer: string;
  }[];
  verified: boolean;
  lastActive?: string;
  // Dome-specific fields
  intentions?: string[]; // Connect
  lifestyle?: string[]; // Explore
  interests?: string[]; // Social
  profession?: string; // Professional
  anonymous?: boolean; // Private
}

interface SwipeCardProps {
  profile: SwipeProfile;
  onLike: (profileId: string, likedItem?: { type: 'photo' | 'prompt'; index: number }) => void;
  onPass: (profileId: string) => void;
  onSuperLike?: (profileId: string) => void;
}

export default function SwipeCard({ profile, onLike, onPass, onSuperLike }: SwipeCardProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  const handlePhotoNavigation = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && currentPhotoIndex > 0) {
      setCurrentPhotoIndex(currentPhotoIndex - 1);
    } else if (direction === 'next' && currentPhotoIndex < profile.photos.length - 1) {
      setCurrentPhotoIndex(currentPhotoIndex + 1);
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Photo Section */}
        <div className="relative aspect-[3/4] bg-domeo-gray-100">
          {/* Photo */}
          {!imageError && profile.photos[currentPhotoIndex] ? (
            <Image
              src={profile.photos[currentPhotoIndex]}
              alt={`${profile.name}'s photo`}
              fill
              className="object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <svg className="w-32 h-32 text-domeo-gray-400" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
          )}

          {/* Photo Navigation */}
          {profile.photos.length > 1 && (
            <>
              <button
                onClick={() => handlePhotoNavigation('prev')}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-24 flex items-center justify-start"
                aria-label="Previous photo"
              >
                <div className="w-8 h-8 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 16 16" fill="none">
                    <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
              
              <button
                onClick={() => handlePhotoNavigation('next')}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-24 flex items-center justify-end"
                aria-label="Next photo"
              >
                <div className="w-8 h-8 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
            </>
          )}

          {/* Photo Dots */}
          <div className="absolute top-4 left-0 right-0 flex justify-center gap-1">
            {profile.photos.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentPhotoIndex ? 'w-6 bg-white' : 'w-1 bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Basic Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 pt-16">
            <div className="flex items-end justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-2xl font-medium text-white">
                    {profile.name}, {profile.age}
                  </h2>
                  {profile.verified && (
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                        <path d="M3 6L5 8L9 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
                <p className="text-sm text-white/80">{profile.distance}</p>
              </div>
              
              {/* Like Photo Button */}
              <button
                onClick={() => onLike(profile.id, { type: 'photo', index: currentPhotoIndex })}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Like photo"
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="none">
                  <path d="M10 18L8.74 16.8827C4.06 12.7238 1 10.0457 1 6.79533C1 4.11786 3.078 2 5.695 2C7.214 2 8.672 2.68385 9.611 3.76908L10 4.20259L10.389 3.76908C11.328 2.68385 12.786 2 14.305 2C16.922 2 19 4.11786 19 6.79533C19 10.0457 15.94 12.7238 11.26 16.8827L10 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-6">
          {/* Intentions/Lifestyle Tags */}
          {profile.intentions && (
            <div className="flex flex-wrap gap-2">
              {profile.intentions.map((intention, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-pink-50 text-pink-600 text-xs font-medium rounded-full"
                >
                  {intention}
                </span>
              ))}
            </div>
          )}

          {/* Prompts */}
          <div className="space-y-4">
            {profile.prompts.map((prompt, index) => (
              <div
                key={index}
                className="p-4 bg-domeo-gray-50 rounded-xl hover:bg-domeo-gray-100 transition-colors cursor-pointer group"
                onClick={() => onLike(profile.id, { type: 'prompt', index })}
              >
                <p className="text-sm text-domeo-gray-600 mb-2">{prompt.question}</p>
                <p className="text-base text-domeo-black">{prompt.answer}</p>
                
                {/* Like Prompt Button */}
                <button
                  className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-sm text-domeo-accent"
                  aria-label="Like this answer"
                >
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                    <path d="M8 14L7 13C3.5 9.8 1 7.4 1 4.5C1 2.4 2.4 1 4.5 1C5.7 1 6.9 1.5 7.6 2.3L8 2.7L8.4 2.3C9.1 1.5 10.3 1 11.5 1C13.6 1 15 2.4 15 4.5C15 7.4 12.5 9.8 9 13L8 14Z" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  Like this answer
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-6 pb-6">
          <div className="flex items-center justify-center gap-4">
            {/* Pass */}
            <button
              onClick={() => onPass(profile.id)}
              className="w-14 h-14 rounded-full border-2 border-domeo-gray-300 flex items-center justify-center hover:bg-domeo-gray-50 transition-colors"
              aria-label="Pass"
            >
              <svg className="w-6 h-6 text-domeo-gray-600" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Super Like */}
            {onSuperLike && (
              <button
                onClick={() => onSuperLike(profile.id)}
                className="w-14 h-14 rounded-full border-2 border-blue-500 flex items-center justify-center hover:bg-blue-50 transition-colors"
                aria-label="Super Like"
              >
                <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L14.09 8.26L21 9.27L16.5 13.14L17.82 20L12 16.77L6.18 20L7.5 13.14L3 9.27L9.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </button>
            )}

            {/* Like */}
            <button
              onClick={() => onLike(profile.id)}
              className="w-14 h-14 rounded-full border-2 border-domeo-accent flex items-center justify-center hover:bg-domeo-accent/10 transition-colors"
              aria-label="Like"
            >
              <svg className="w-6 h-6 text-domeo-accent" viewBox="0 0 24 24" fill="none">
                <path d="M12 21C12 21 21 16.5 21 9.5C21 6.5 18.8 4 15.8 4C13.9 4 12.3 5.1 12 6.5C11.7 5.1 10.1 4 8.2 4C5.2 4 3 6.5 3 9.5C3 16.5 12 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 