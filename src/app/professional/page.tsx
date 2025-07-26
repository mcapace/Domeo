'use client';

import Link from 'next/link';

export default function Professional() {
  return (
    <div className="min-h-screen bg-domeo-gray-50 pt-20">
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-light text-domeo-black mb-4">Expand Your Network</h2>
          <p className="text-domeo-gray-600 max-w-2xl mx-auto">
            Connect with professionals in your field and discover new opportunities
          </p>
        </div>

        {/* Professional Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { 
              label: 'Connections', 
              value: '247', 
              change: '+12', 
              color: 'blue',
              icon: (
                <svg className="w-6 h-6 text-blue-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="3" stroke="currentColor"/>
                  <circle cx="20" cy="12" r="3" stroke="currentColor"/>
                  <circle cx="16" cy="20" r="3" stroke="currentColor"/>
                  <path d="M12 15L20 15" stroke="currentColor" strokeLinecap="round"/>
                  <path d="M14 17L18 17" stroke="currentColor" strokeLinecap="round"/>
                </svg>
              )
            },
            { 
              label: 'Profile Views', 
              value: '1.2k', 
              change: '+8%', 
              color: 'green',
              icon: (
                <svg className="w-6 h-6 text-green-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 8C12.6863 8 10 10.6863 10 14C10 17.3137 12.6863 20 16 20C19.3137 20 22 17.3137 22 14C22 10.6863 19.3137 8 16 8Z" stroke="currentColor"/>
                  <path d="M16 20L20 24L16 28L12 24L16 20Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )
            },
            { 
              label: 'Messages', 
              value: '34', 
              change: '+5', 
              color: 'purple',
              icon: (
                <svg className="w-6 h-6 text-purple-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 8L16 16L28 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="4" y="8" width="24" height="16" rx="2" stroke="currentColor"/>
                </svg>
              )
            },
            { 
              label: 'Opportunities', 
              value: '8', 
              change: '+2', 
              color: 'orange',
              icon: (
                <svg className="w-6 h-6 text-orange-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M8 8H24V24H8V8Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12H24" stroke="currentColor" strokeLinecap="round"/>
                  <path d="M12 16H20" stroke="currentColor" strokeLinecap="round"/>
                  <path d="M12 20H20" stroke="currentColor" strokeLinecap="round"/>
                  <path d="M16 8V12" stroke="currentColor" strokeLinecap="round"/>
                </svg>
              )
            }
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  {stat.icon}
                  <span className="text-2xl font-light text-gray-900">{stat.value}</span>
                </div>
                <span className={`text-sm font-medium ${
                  stat.color === 'blue' ? 'text-blue-600' :
                  stat.color === 'green' ? 'text-green-600' :
                  stat.color === 'purple' ? 'text-purple-600' : 'text-orange-600'
                }`}>
                  {stat.change}
                </span>
              </div>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Featured Opportunities */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-gray-900">Featured Opportunities</h3>
            <Link href="/professional/opportunities" className="text-sm text-gray-600 hover:text-gray-700">
              View all →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Senior Product Designer',
                company: 'TechCorp',
                location: 'San Francisco, CA',
                type: 'Full-time',
                salary: '$120k - $150k',
                posted: '2 days ago',
                tags: ['Remote', 'Design System', 'Figma'],
                icon: (
                  <svg className="w-8 h-8 text-blue-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M16 4L20 12L28 16L20 20L16 28L12 20L4 16L12 12L16 4Z" stroke="currentColor"/>
                    <circle cx="16" cy="16" r="2" fill="currentColor"/>
                  </svg>
                )
              },
              {
                title: 'Frontend Engineer',
                company: 'StartupXYZ',
                location: 'New York, NY',
                type: 'Contract',
                salary: '$80/hr',
                posted: '1 week ago',
                tags: ['React', 'TypeScript', 'Remote'],
                icon: (
                  <svg className="w-8 h-8 text-green-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="4" y="4" width="24" height="24" rx="2" stroke="currentColor"/>
                    <path d="M8 8H24" stroke="currentColor" strokeLinecap="round"/>
                    <path d="M8 12H24" stroke="currentColor" strokeLinecap="round"/>
                    <path d="M8 16H24" stroke="currentColor" strokeLinecap="round"/>
                    <path d="M8 20H24" stroke="currentColor" strokeLinecap="round"/>
                  </svg>
                )
              },
              {
                title: 'Marketing Manager',
                company: 'GrowthCo',
                location: 'Austin, TX',
                type: 'Full-time',
                salary: '$90k - $110k',
                posted: '3 days ago',
                tags: ['B2B', 'Analytics', 'Team Lead'],
                icon: (
                  <svg className="w-8 h-8 text-purple-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M16 2L20 10L28 12L20 14L16 22L12 14L4 12L12 10L16 2Z" stroke="currentColor"/>
                    <circle cx="16" cy="16" r="3" fill="currentColor"/>
                  </svg>
                )
              }
            ].map((job, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-gray-300 hover:shadow-md transition-all cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {job.icon}
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">{job.title}</h4>
                      <p className="text-sm text-gray-600">{job.company}</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">{job.posted}</span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M16 4C12.6863 4 10 6.68629 10 10C10 13.3137 12.6863 16 16 16C19.3137 16 22 13.3137 22 10C22 6.68629 19.3137 4 16 4Z" stroke="currentColor"/>
                      <path d="M8 24C8 20.6863 10.6863 18 14 18H18C21.3137 18 24 20.6863 24 24" stroke="currentColor" strokeLinecap="round"/>
                    </svg>
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="4" y="8" width="24" height="16" rx="2" stroke="currentColor"/>
                      <path d="M8 12H24" stroke="currentColor" strokeLinecap="round"/>
                      <path d="M8 16H24" stroke="currentColor" strokeLinecap="round"/>
                    </svg>
                    {job.type}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M16 2L20 10L28 12L20 14L16 22L12 14L4 12L12 10L16 2Z" stroke="currentColor"/>
                      <circle cx="16" cy="16" r="3" fill="currentColor"/>
                    </svg>
                    {job.salary}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Your Network */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Your Network</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Sarah Chen',
                role: 'Product Manager',
                company: 'Google',
                mutual: 12,
                avatar: 'https://i.pravatar.cc/150?img=1',
                icon: (
                  <svg className="w-6 h-6 text-blue-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="3" stroke="currentColor"/>
                    <circle cx="20" cy="12" r="3" stroke="currentColor"/>
                    <circle cx="16" cy="20" r="3" stroke="currentColor"/>
                    <path d="M12 15L20 15" stroke="currentColor" strokeLinecap="round"/>
                    <path d="M14 17L18 17" stroke="currentColor" strokeLinecap="round"/>
                  </svg>
                )
              },
              {
                name: 'Mike Rodriguez',
                role: 'Engineering Lead',
                company: 'Netflix',
                mutual: 8,
                avatar: 'https://i.pravatar.cc/150?img=2',
                icon: (
                  <svg className="w-6 h-6 text-green-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="4" y="4" width="24" height="24" rx="2" stroke="currentColor"/>
                    <path d="M8 8H24" stroke="currentColor" strokeLinecap="round"/>
                    <path d="M8 12H24" stroke="currentColor" strokeLinecap="round"/>
                    <path d="M8 16H24" stroke="currentColor" strokeLinecap="round"/>
                    <path d="M8 20H24" stroke="currentColor" strokeLinecap="round"/>
                  </svg>
                )
              },
              {
                name: 'Lisa Thompson',
                role: 'Design Director',
                company: 'Airbnb',
                mutual: 15,
                avatar: 'https://i.pravatar.cc/150?img=3',
                icon: (
                  <svg className="w-6 h-6 text-purple-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M16 4L20 12L28 16L20 20L16 28L12 20L4 16L12 12L16 4Z" stroke="currentColor"/>
                    <circle cx="16" cy="16" r="2" fill="currentColor"/>
                  </svg>
                )
              }
            ].map((contact) => (
              <div key={contact.name} className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer">
                <img src={contact.avatar} alt={contact.name} className="w-12 h-12 rounded-full" />
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{contact.name}</h4>
                  <p className="text-sm text-gray-600">{contact.role} at {contact.company}</p>
                  <p className="text-xs text-gray-500">{contact.mutual} mutual connections</p>
                </div>
                <div className="flex items-center gap-2">
                  {contact.icon}
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 8L16 16L28 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                      <rect x="4" y="8" width="24" height="16" rx="2" stroke="currentColor"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Guidelines */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Professional Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Keep It Professional',
                description: 'Maintain appropriate boundaries and communication',
                icon: (
                  <svg className="w-8 h-8 text-blue-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M16 4L20 12L28 16L20 20L16 28L12 20L4 16L12 12L16 4Z" stroke="currentColor"/>
                    <circle cx="16" cy="16" r="2" fill="currentColor"/>
                  </svg>
                )
              },
              {
                title: 'Respect Privacy',
                description: 'Professional info only - no personal dome data shared',
                icon: (
                  <svg className="w-8 h-8 text-green-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="4" y="8" width="24" height="16" rx="2" stroke="currentColor"/>
                    <circle cx="16" cy="16" r="2" fill="currentColor"/>
                  </svg>
                )
              },
              {
                title: 'Build Authentic Connections',
                description: 'Focus on genuine professional relationships',
                icon: (
                  <svg className="w-8 h-8 text-purple-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="3" stroke="currentColor"/>
                    <circle cx="20" cy="12" r="3" stroke="currentColor"/>
                    <circle cx="16" cy="20" r="3" stroke="currentColor"/>
                    <path d="M12 15L20 15" stroke="currentColor" strokeLinecap="round"/>
                    <path d="M14 17L18 17" stroke="currentColor" strokeLinecap="round"/>
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