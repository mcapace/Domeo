'use client';

import { useState } from 'react';

interface Event {
  id: string;
  title: string;
  organizer: {
    name: string;
    verified: boolean;
  };
  date: Date;
  location: string;
  attendees: number;
  maxAttendees: number;
  category: string;
  description: string;
  image?: string;
}

const sampleEvents: Event[] = [
  {
    id: '1',
    title: 'Sunset Hike & Wine',
    organizer: { name: 'Sarah M.', verified: true },
    date: new Date('2024-02-15T17:00:00'),
    location: 'Griffith Park, LA',
    attendees: 8,
    maxAttendees: 12,
    category: 'Outdoor',
    description: 'Easy 3-mile hike followed by wine and snacks at the summit.'
  },
  {
    id: '2',
    title: 'Book Club: February Pick',
    organizer: { name: 'Literary Ladies', verified: true },
    date: new Date('2024-02-20T19:00:00'),
    location: 'The Reading Room, NYC',
    attendees: 15,
    maxAttendees: 20,
    category: 'Books & Culture',
    description: 'Discussing "The Vanishing Half" with wine and good company.'
  },
  {
    id: '3',
    title: 'Beginner\'s Pottery Class',
    organizer: { name: 'Mike T.', verified: true },
    date: new Date('2024-02-18T14:00:00'),
    location: 'Clay Studio, Brooklyn',
    attendees: 6,
    maxAttendees: 8,
    category: 'Arts & Crafts',
    description: 'Learn basic pottery techniques in a relaxed, friendly environment.'
  }
];

const categories = [
  'All Events',
  'Outdoor',
  'Food & Drink',
  'Arts & Crafts',
  'Books & Culture',
  'Fitness',
  'Games',
  'Music',
  'Professional'
];

export default function SocialEvents() {
  const [selectedCategory, setSelectedCategory] = useState('All Events');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const filteredEvents = selectedCategory === 'All Events' 
    ? sampleEvents 
    : sampleEvents.filter(event => event.category === selectedCategory);

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-domeo-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b border-domeo-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-medium text-domeo-black">Social Events</h1>

            <button
              onClick={() => setShowCreateModal(true)}
              className="px-4 py-2 bg-domeo-black text-white text-sm font-medium rounded-lg hover:bg-domeo-charcoal transition-colors"
            >
              Create Event
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="px-6 pb-3">
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-50 text-blue-600'
                    : 'bg-domeo-gray-100 text-domeo-gray-600 hover:bg-domeo-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => window.location.href = `/social/events/${event.id}`}
            >
              {/* Event Image */}
              <div className="aspect-[16/9] bg-blue-50 rounded-t-xl flex items-center justify-center">
                <span className="text-4xl">🥾</span>
              </div>

              {/* Event Details */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-medium text-domeo-black line-clamp-2">
                    {event.title}
                  </h3>
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                    {event.category}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-domeo-gray-600">
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1"/>
                      <path d="M8 4V8L10 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                    </svg>
                    <span>{formatDate(event.date)}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-domeo-gray-600">
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                      <path d="M8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z" stroke="currentColor" strokeWidth="1"/>
                      <path d="M8 14C11 14 14 11 14 8C14 5 11 2 8 2C5 2 2 5 2 8C2 11 5 14 8 14Z" stroke="currentColor" strokeWidth="1"/>
                    </svg>
                    <span>{event.location}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-domeo-gray-600">
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                      <circle cx="5" cy="5" r="2" stroke="currentColor" strokeWidth="1"/>
                      <circle cx="11" cy="5" r="2" stroke="currentColor" strokeWidth="1"/>
                      <circle cx="8" cy="11" r="2" stroke="currentColor" strokeWidth="1"/>
                    </svg>
                    <span>{event.attendees}/{event.maxAttendees} attending</span>
                  </div>
                </div>

                <p className="text-sm text-domeo-gray-600 line-clamp-2 mb-4">
                  {event.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-domeo-gray-200 rounded-full"></div>
                    <span className="text-sm text-domeo-gray-700">
                      {event.organizer.name}
                    </span>
                    {event.organizer.verified && (
                      <div className="w-4 h-4 bg-domeo-accent rounded-full flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5L4 7L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                  </div>

                  {event.attendees < event.maxAttendees ? (
                    <span className="text-xs text-green-600 font-medium">Spots available</span>
                  ) : (
                    <span className="text-xs text-domeo-gray-500">Full</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📅</span>
            </div>
            <h3 className="text-lg font-medium text-domeo-black mb-2">No events found</h3>
            <p className="text-sm text-domeo-gray-600 mb-6">
              Be the first to create an event in this category!
            </p>
            <button
              onClick={() => setShowCreateModal(true)}
              className="px-6 py-3 bg-domeo-black text-white text-sm font-medium uppercase tracking-wider rounded-lg hover:bg-domeo-charcoal transition-colors"
            >
              Create Event
            </button>
          </div>
        )}
      </div>

      {/* Create Event Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-domeo-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-medium text-domeo-black">Create Event</h2>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="p-2 hover:bg-domeo-gray-100 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                    <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            </div>

            <form className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-domeo-gray-700 mb-2">
                  Event Title
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-domeo-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-domeo-accent/20 focus:border-domeo-accent"
                  placeholder="Sunset Hike & Wine"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-domeo-gray-700 mb-2">
                  Category
                </label>
                <select className="w-full px-4 py-2 border border-domeo-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-domeo-accent/20 focus:border-domeo-accent">
                  {categories.slice(1).map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-domeo-gray-700 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-domeo-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-domeo-accent/20 focus:border-domeo-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-domeo-gray-700 mb-2">
                    Time
                  </label>
                  <input
                    type="time"
                    className="w-full px-4 py-2 border border-domeo-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-domeo-accent/20 focus:border-domeo-accent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-domeo-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-domeo-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-domeo-accent/20 focus:border-domeo-accent"
                  placeholder="Griffith Park, LA"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-domeo-gray-700 mb-2">
                  Max Attendees
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-2 border border-domeo-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-domeo-accent/20 focus:border-domeo-accent"
                  placeholder="12"
                  min="2"
                  max="50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-domeo-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-domeo-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-domeo-accent/20 focus:border-domeo-accent resize-none"
                  rows={4}
                  placeholder="Describe your event..."
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 px-6 py-3 border border-domeo-gray-300 text-domeo-gray-700 rounded-lg hover:bg-domeo-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-domeo-black text-white rounded-lg hover:bg-domeo-charcoal transition-colors"
                >
                  Create Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 