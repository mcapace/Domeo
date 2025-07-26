'use client';

import Link from 'next/link';

export default function Social() {
  return (
    <div className="min-h-screen bg-domeo-gray-50 pt-20">
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-light text-domeo-black mb-4">Find Your Tribe</h2>
          <p className="text-domeo-gray-600 max-w-2xl mx-auto">
            Connect with like-minded people for friendship and activities
          </p>
        </div>

        {/* Activity Mood Matcher */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">What are you in the mood for?</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { 
                mood: 'Active', 
                icon: (
                  <svg className="w-8 h-8 text-blue-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M8 16L12 20L16 16L20 20L24 16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 12L16 16L20 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              { 
                mood: 'Creative', 
                icon: (
                  <svg className="w-8 h-8 text-purple-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M8 8L24 8L20 16L24 24L8 24L12 16L8 8Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 8V24" stroke="currentColor" strokeLinecap="round"/>
                  </svg>
                )
              },
              { 
                mood: 'Social', 
                icon: (
                  <svg className="w-8 h-8 text-green-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="3" stroke="currentColor"/>
                    <circle cx="20" cy="12" r="3" stroke="currentColor"/>
                    <circle cx="16" cy="20" r="3" stroke="currentColor"/>
                    <path d="M12 15L20 15" stroke="currentColor" strokeLinecap="round"/>
                    <path d="M14 17L18 17" stroke="currentColor" strokeLinecap="round"/>
                  </svg>
                )
              },
              { 
                mood: 'Chill', 
                icon: (
                  <svg className="w-8 h-8 text-orange-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M8 12C8 9.79086 9.79086 8 12 8H20C22.2091 8 24 9.79086 24 12V20C24 22.2091 22.2091 24 20 24H12C9.79086 24 8 22.2091 8 20V12Z" stroke="currentColor"/>
                    <path d="M12 16H20" stroke="currentColor" strokeLinecap="round"/>
                    <path d="M12 20H20" stroke="currentColor" strokeLinecap="round"/>
                    <path d="M16 8V12" stroke="currentColor" strokeLinecap="round"/>
                  </svg>
                )
              },
              { 
                mood: 'Adventure', 
                icon: (
                  <svg className="w-8 h-8 text-red-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="16" cy="16" r="12" stroke="currentColor"/>
                    <path d="M16 4L20 12L28 16L20 20L16 28L12 20L4 16L12 12L16 4Z" stroke="currentColor"/>
                    <path d="M16 8L16 24" stroke="currentColor" strokeLinecap="round"/>
                    <path d="M12 12L20 20" stroke="currentColor" strokeLinecap="round"/>
                    <path d="M20 12L12 20" stroke="currentColor" strokeLinecap="round"/>
                  </svg>
                )
              }
            ].map((activity) => (
              <button
                key={activity.mood}
                className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:scale-105 transition-transform"
              >
                <div className="flex justify-center mb-2">
                  {activity.icon}
                </div>
                <span className="text-sm font-medium text-gray-700">{activity.mood}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Happening This Week */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-medium text-gray-900">Happening This Week</h2>
            <Link href="/social/events" className="text-sm text-blue-600 hover:text-blue-700">
              View calendar →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                day: 'Tonight', 
                title: 'Board Game Cafe', 
                time: '7:00 PM', 
                attendees: 8, 
                spots: 2,
                tags: ['Games', 'Casual', 'Beginners Welcome'],
                icon: (
                  <svg className="w-6 h-6 text-blue-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="4" y="4" width="24" height="24" rx="2" stroke="currentColor"/>
                    <circle cx="10" cy="10" r="2" fill="currentColor"/>
                    <circle cx="22" cy="10" r="2" fill="currentColor"/>
                    <circle cx="10" cy="22" r="2" fill="currentColor"/>
                    <circle cx="22" cy="22" r="2" fill="currentColor"/>
                    <path d="M16 10L16 22" stroke="currentColor" strokeLinecap="round"/>
                  </svg>
                )
              },
              { 
                day: 'Tomorrow', 
                title: 'Sunset Hike', 
                time: '5:30 PM', 
                attendees: 12, 
                spots: 0,
                tags: ['Outdoor', 'Moderate', 'Dogs Welcome'],
                icon: (
                  <svg className="w-6 h-6 text-green-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M8 24L16 8L24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 20H20" stroke="currentColor" strokeLinecap="round"/>
                    <path d="M16 8L16 24" stroke="currentColor" strokeLinecap="round"/>
                  </svg>
                )
              },
              { 
                day: 'Saturday', 
                title: 'Brunch Club', 
                time: '11:00 AM', 
                attendees: 6, 
                spots: 4,
                tags: ['Food', 'Social', 'LGBTQ+ Friendly'],
                icon: (
                  <svg className="w-6 h-6 text-orange-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <ellipse cx="16" cy="16" rx="12" ry="8" stroke="currentColor"/>
                    <path d="M8 16L24 16" stroke="currentColor" strokeLinecap="round"/>
                    <path d="M12 12L20 12" stroke="currentColor" strokeLinecap="round"/>
                    <path d="M12 20L20 20" stroke="currentColor" strokeLinecap="round"/>
                    <path d="M16 8L16 24" stroke="currentColor" strokeLinecap="round"/>
                  </svg>
                )
              }
            ].map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="h-32 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="flex justify-center mb-2">
                      {event.icon}
                    </div>
                    <p className="text-sm opacity-80">{event.day}</p>
                    <p className="text-2xl font-medium">{event.time}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-medium text-gray-900 mb-2">{event.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      {event.attendees} attending
                    </span>
                    {event.spots > 0 ? (
                      <span className="text-sm font-medium text-green-600">{event.spots} spots left</span>
                    ) : (
                      <span className="text-sm font-medium text-red-600">Full</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Community Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Be Inclusive',
                description: 'Welcome everyone regardless of background or identity',
                icon: (
                  <svg className="w-8 h-8 text-blue-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="3" stroke="currentColor"/>
                    <circle cx="20" cy="12" r="3" stroke="currentColor"/>
                    <circle cx="16" cy="20" r="3" stroke="currentColor"/>
                    <path d="M12 15L20 15" stroke="currentColor" strokeLinecap="round"/>
                    <path d="M14 17L18 17" stroke="currentColor" strokeLinecap="round"/>
                  </svg>
                )
              },
              {
                title: 'Respect Boundaries',
                description: 'Always ask before joining activities or conversations',
                icon: (
                  <svg className="w-8 h-8 text-green-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M8 16L14 22L24 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="16" cy="16" r="14" stroke="currentColor"/>
                  </svg>
                )
              },
              {
                title: 'Stay Safe',
                description: 'Meet in public places and trust your instincts',
                icon: (
                  <svg className="w-8 h-8 text-purple-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M16 2L20 10L28 12L20 14L16 22L12 14L4 12L12 10L16 2Z" stroke="currentColor"/>
                    <circle cx="16" cy="16" r="3" fill="currentColor"/>
                  </svg>
                )
              }
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="flex justify-center mb-3">
                  {item.icon}
                </div>
                <h4 className="font-medium text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 