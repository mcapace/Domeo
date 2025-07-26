'use client';

import Link from 'next/link';

export default function Explore() {
  return (
    <div className="min-h-screen bg-domeo-gray-50 pt-20">
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-light text-domeo-black mb-4">Open Hearts, Open Minds</h2>
          <p className="text-domeo-gray-600 max-w-2xl mx-auto">
            Discover connections beyond traditional boundaries. Explore alternative lifestyles, 
            kinks, and preferences in a safe, judgment-free space.
          </p>
        </div>

        {/* Safety Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 text-white mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium mb-2">Consent & Communication Workshop</h3>
              <p className="text-white/80 text-sm">Tomorrow at 7PM • Virtual Event</p>
            </div>
            <button className="px-6 py-3 bg-white/20 backdrop-blur rounded-lg hover:bg-white/30 transition-colors">
              RSVP Free
            </button>
          </div>
        </div>

        {/* Experience Level Selector */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Your Experience Level</h3>
          <div className="grid grid-cols-4 gap-4">
            {[
              { level: 'Curious', icon: (
                <svg className="w-8 h-8 text-purple-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="16" cy="16" r="14" stroke="currentColor"/>
                  <path d="M16 8C16 8 16 12 16 16" stroke="currentColor" strokeLinecap="round"/>
                  <circle cx="16" cy="22" r="1" fill="currentColor"/>
                </svg>
              )},
              { level: 'Beginner', icon: (
                <svg className="w-8 h-8 text-purple-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 24L16 16L20 12L16 8L12 12L16 16L16 24Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 20L24 20" stroke="currentColor" strokeLinecap="round"/>
                </svg>
              )},
              { level: 'Experienced', icon: (
                <svg className="w-8 h-8 text-purple-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 4L20 12L28 16L20 20L16 28L12 20L4 16L12 12L16 4Z" stroke="currentColor"/>
                  <circle cx="16" cy="16" r="2" fill="currentColor"/>
                </svg>
              )},
              { level: 'Expert', icon: (
                <svg className="w-8 h-8 text-purple-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 4L20 8L24 4L20 12L28 16L20 20L24 28L20 24L16 28L12 24L8 28L12 20L4 16L12 12L8 8L12 4L16 4Z" stroke="currentColor"/>
                </svg>
              )}
            ].map(({ level, icon }) => (
              <button
                key={level}
                className="p-4 border-2 border-purple-200 rounded-xl hover:border-purple-500 hover:bg-purple-50 transition-all text-center"
              >
                <div className="flex justify-center mb-2">
                  {icon}
                </div>
                <span className="text-sm font-medium text-gray-700">{level}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Explore Connections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Couples Profile */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer">
            <div className="relative h-64">
              <div className="absolute inset-0 grid grid-cols-2">
                <img src="https://i.pravatar.cc/300?img=12" className="w-full h-full object-cover" />
                <img src="https://i.pravatar.cc/300?img=15" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute top-4 left-4 px-3 py-1 bg-purple-500 text-white text-sm rounded-full">
                Couple
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-lg font-medium mb-1">Alex & Jordan</h3>
                <p className="text-sm text-white/80">Looking for: Third for adventures</p>
              </div>
            </div>
            <div className="p-4">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">ENM</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Experienced</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Communicative</span>
              </div>
              <p className="text-sm text-gray-600">Together 5 years, exploring ethically</p>
            </div>
          </div>

          {/* Solo Poly Profile */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer">
            <div className="relative h-64">
              <img src="https://i.pravatar.cc/600?img=25" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute top-4 left-4 px-3 py-1 bg-indigo-500 text-white text-sm rounded-full">
                Solo Poly
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-lg font-medium mb-1">Sam, 32</h3>
                <p className="text-sm text-white/80">Relationship Anarchist</p>
              </div>
            </div>
            <div className="p-4">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">Autonomous</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">Kitchen Table</span>
              </div>
              <p className="text-sm text-gray-600">Building meaningful connections without hierarchy</p>
            </div>
          </div>

          {/* Community Event */}
          <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-6 hover:shadow-xl transition-all cursor-pointer">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 4L20 12L28 16L20 20L16 28L12 20L4 16L12 12L16 4Z" stroke="currentColor"/>
                  <circle cx="16" cy="16" r="2" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Community Meetup</h3>
                <p className="text-sm text-gray-600">Monthly • Virtual</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-4">
              Join our monthly community discussion about consent, boundaries, and ethical non-monogamy.
            </p>
            <button className="w-full py-2 bg-purple-500 text-white text-sm rounded-lg hover:bg-purple-600 transition-colors">
              Join Discussion
            </button>
          </div>
        </div>

        {/* Safety & Guidelines */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Safety & Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Consent First',
                description: 'Always ask for explicit consent before any interaction',
                icon: (
                  <svg className="w-8 h-8 text-green-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M8 16L12 20L16 16L20 20L24 16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 12L16 16L20 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: 'Respect Boundaries',
                description: 'Honor everyone\'s limits and comfort levels',
                icon: (
                  <svg className="w-8 h-8 text-blue-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M16 4L20 8L24 4L20 12L28 16L20 20L24 28L20 24L16 28L12 24L8 28L12 20L4 16L12 12L8 8L12 4L16 4Z" stroke="currentColor"/>
                  </svg>
                )
              },
              {
                title: 'Safe Space',
                description: 'No judgment, no pressure, just exploration',
                icon: (
                  <svg className="w-8 h-8 text-purple-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M16 4C12.6863 4 10 6.68629 10 10C10 13.3137 12.6863 16 16 16C19.3137 16 22 13.3137 22 10C22 6.68629 19.3137 4 16 4Z" stroke="currentColor"/>
                    <path d="M16 16L20 20L16 24L12 20L16 16Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
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