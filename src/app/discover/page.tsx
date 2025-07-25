'use client';

import { useState } from 'react';
import { DomeIcons } from '@/components/DomeIcons';
import SwipeStack from '@/components/SwipeStack';

type DomeType = 'connect' | 'explore' | 'social' | 'professional' | 'private';

// Filter type definitions
type RangeFilter = {
  id: string;
  label: string;
  type: 'range';
  min: number;
  max: number;
  value: [number, number];
};

type SliderFilter = {
  id: string;
  label: string;
  type: 'slider';
  max: number;
  value: number;
  unit: string;
};

type MultiFilter = {
  id: string;
  label: string;
  type: 'multi';
  options: string[];
};

type TagsFilter = {
  id: string;
  label: string;
  type: 'tags';
  options: string[];
};

type SingleFilter = {
  id: string;
  label: string;
  type: 'single';
  options: string[];
};

type Filter = RangeFilter | SliderFilter | MultiFilter | TagsFilter | SingleFilter;

type FilterCategory = {
  name: string;
  filters: Filter[];
};

type FilterConfig = {
  categories: FilterCategory[];
};

const domes = [
  { id: 'connect' as DomeType, name: 'Connect', icon: DomeIcons.connect, color: 'text-pink-600', bgColor: 'bg-pink-50' },
  { id: 'explore' as DomeType, name: 'Explore', icon: DomeIcons.explore, color: 'text-purple-600', bgColor: 'bg-purple-50' },
  { id: 'social' as DomeType, name: 'Social', icon: DomeIcons.social, color: 'text-blue-600', bgColor: 'bg-blue-50' },
  { id: 'professional' as DomeType, name: 'Professional', icon: DomeIcons.professional, color: 'text-gray-700', bgColor: 'bg-gray-50' },
  { id: 'private' as DomeType, name: 'Private', icon: DomeIcons.private, color: 'text-domeo-black', bgColor: 'bg-domeo-gray-100' }
];

// Dome-specific filter configurations
const filterConfigs: Record<DomeType, FilterConfig> = {
  connect: {
    categories: [
      {
        name: 'Basics',
        filters: [
          { id: 'age', label: 'Age Range', type: 'range', min: 18, max: 80, value: [25, 35] } as RangeFilter,
          { id: 'distance', label: 'Distance', type: 'slider', max: 100, value: 25, unit: 'miles' } as SliderFilter,
          { id: 'gender', label: 'Show Me', type: 'multi', options: ['Men', 'Women', 'Non-binary', 'Everyone'] } as MultiFilter
        ]
      },
      {
        name: 'Intentions',
        filters: [
          { id: 'looking_for', label: 'Looking For', type: 'multi', options: ['Long-term relationship', 'Short-term dating', 'New friends', 'Marriage'] } as MultiFilter,
          { id: 'lifestyle', label: 'Lifestyle', type: 'multi', options: ['Wants kids', 'Has kids', 'Doesn\'t want kids', 'Open to kids'] } as MultiFilter
        ]
      }
    ]
  },
  explore: {
    categories: [
      {
        name: 'Basics',
        filters: [
          { id: 'age', label: 'Age Range', type: 'range', min: 18, max: 80, value: [25, 40] } as RangeFilter,
          { id: 'distance', label: 'Distance', type: 'slider', max: 100, value: 50, unit: 'miles' } as SliderFilter
        ]
      },
      {
        name: 'Relationship Style',
        filters: [
          { id: 'style', label: 'Relationship Type', type: 'multi', options: ['ENM', 'Polyamorous', 'Open relationship', 'Swinging', 'Relationship anarchy'] } as MultiFilter,
          { id: 'experience', label: 'Experience Level', type: 'multi', options: ['New/Curious', 'Some experience', 'Experienced', 'Expert'] } as MultiFilter
        ]
      },
      {
        name: 'Interests',
        filters: [
          { id: 'kinks', label: 'Interests', type: 'tags', options: ['Communication', 'Boundaries', 'Aftercare', 'Education', 'Community'] } as TagsFilter,
          { id: 'role', label: 'Dynamic', type: 'multi', options: ['Dominant', 'Submissive', 'Switch', 'Vanilla', 'Exploring'] } as MultiFilter
        ]
      }
    ]
  },
  social: {
    categories: [
      {
        name: 'Basics',
        filters: [
          { id: 'age', label: 'Age Range', type: 'range', min: 18, max: 80, value: [25, 45] } as RangeFilter,
          { id: 'distance', label: 'Distance', type: 'slider', max: 50, value: 15, unit: 'miles' } as SliderFilter
        ]
      },
      {
        name: 'Interests',
        filters: [
          { id: 'activities', label: 'Activities', type: 'tags', options: ['Hiking', 'Book clubs', 'Gaming', 'Fitness', 'Art', 'Music', 'Food & Wine', 'Travel'] } as TagsFilter,
          { id: 'friendship_type', label: 'Looking For', type: 'multi', options: ['Activity partner', 'Close friendship', 'Group activities', 'Casual hangouts'] } as MultiFilter
        ]
      }
    ]
  },
  professional: {
    categories: [
      {
        name: 'Professional',
        filters: [
          { id: 'industry', label: 'Industry', type: 'multi', options: ['Tech', 'Finance', 'Healthcare', 'Creative', 'Education', 'Non-profit'] } as MultiFilter,
          { id: 'role', label: 'Role', type: 'multi', options: ['Founder', 'Executive', 'Manager', 'Individual Contributor', 'Freelancer'] } as MultiFilter
        ]
      },
      {
        name: 'Goals',
        filters: [
          { id: 'looking_for', label: 'Seeking', type: 'multi', options: ['Mentorship', 'Collaboration', 'Investment', 'Job opportunities', 'Networking'] } as MultiFilter,
          { id: 'skills', label: 'Skills', type: 'tags', options: ['Product', 'Engineering', 'Design', 'Marketing', 'Sales', 'Operations'] } as TagsFilter
        ]
      }
    ]
  },
  private: {
    categories: [
      {
        name: 'Privacy',
        filters: [
          { id: 'discretion', label: 'Discretion Level', type: 'single', options: ['Very discreet', 'Discreet', 'Open'] } as SingleFilter,
          { id: 'verification', label: 'Verification', type: 'single', options: ['Photo verified only', 'All profiles'] } as SingleFilter
        ]
      },
      {
        name: 'Availability',
        filters: [
          { id: 'when', label: 'Available', type: 'multi', options: ['Weekdays', 'Weekends', 'Evenings', 'Travel'] } as MultiFilter,
          { id: 'arrangement', label: 'Arrangement', type: 'multi', options: ['Casual', 'Ongoing', 'Travel companion', 'Social events'] } as MultiFilter
        ]
      }
    ]
  }
};

export default function DiscoverPage() {
  const [activeDome, setActiveDome] = useState<DomeType>('connect');
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Record<string, string[] | string>>({});
  
  const currentFilters = filterConfigs[activeDome];

  const handleFilterChange = (filterId: string, value: string[] | string) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterId]: value
    }));
  };

  const activeFilterCount = Object.keys(activeFilters).filter(key => {
    const value = activeFilters[key];
    return value && (Array.isArray(value) ? value.length > 0 : true);
  }).length;

  return (
    <div className="min-h-screen bg-domeo-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b border-domeo-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-medium text-domeo-black">Discover</h1>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-domeo-gray-100 rounded-lg hover:bg-domeo-gray-200 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                <path d="M3 5H17M7 10H13M9 15H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span className="text-sm font-medium">Filters</span>
              {activeFilterCount > 0 && (
                <span className="w-5 h-5 bg-domeo-accent text-white text-xs rounded-full flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Dome Selector */}
        <div className="px-6 pb-3">
          <div className="flex gap-2 overflow-x-auto">
            {domes.map((dome) => (
              <button
                key={dome.id}
                onClick={() => setActiveDome(dome.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  activeDome === dome.id
                    ? `${dome.bgColor} ${dome.color}`
                    : 'bg-domeo-gray-100 text-domeo-gray-600 hover:bg-domeo-gray-200'
                }`}
              >
                <span className={activeDome === dome.id ? dome.color : 'text-domeo-gray-500'}>
                  {dome.icon}
                </span>
                <span className="text-sm font-medium">{dome.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Filters Sidebar */}
        {showFilters && (
          <aside className="w-80 bg-white border-r border-domeo-gray-200 h-[calc(100vh-200px)] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-medium text-domeo-black">Filters</h2>
                <button
                  onClick={() => setActiveFilters({})}
                  className="text-sm text-domeo-accent hover:text-domeo-accent/80"
                >
                  Clear all
                </button>
              </div>

              {currentFilters.categories.map((category) => (
                <div key={category.name} className="mb-8">
                  <h3 className="text-sm font-medium text-domeo-gray-700 uppercase tracking-wider mb-4">
                    {category.name}
                  </h3>
                  
                  <div className="space-y-4">
                    {category.filters.map((filter) => {
                      if (filter.type === 'range') {
                        const rangeFilter = filter as RangeFilter;
                        return (
                          <div key={filter.id}>
                            <label className="text-sm font-medium text-domeo-black mb-2 block">
                              {filter.label}: {rangeFilter.value[0]} - {rangeFilter.value[1]}
                            </label>
                            {/* Add range slider component here */}
                          </div>
                        );
                      }
                      
                      if (filter.type === 'slider') {
                        const sliderFilter = filter as SliderFilter;
                        return (
                          <div key={filter.id}>
                            <label className="text-sm font-medium text-domeo-black mb-2 block">
                              {filter.label}: {sliderFilter.value} {sliderFilter.unit}
                            </label>
                            {/* Add slider component here */}
                          </div>
                        );
                      }
                      
                      if (filter.type === 'multi' || filter.type === 'tags') {
                        const multiFilter = filter as MultiFilter | TagsFilter;
                        return (
                          <div key={filter.id}>
                            <label className="text-sm font-medium text-domeo-black mb-3 block">
                              {filter.label}
                            </label>
                            <div className={filter.type === 'tags' ? 'flex flex-wrap gap-2' : 'space-y-2'}>
                              {multiFilter.options.map((option: string) => (
                                <label
                                  key={option}
                                  className={filter.type === 'tags' 
                                    ? 'inline-flex items-center px-3 py-1 bg-domeo-gray-100 rounded-full text-sm cursor-pointer hover:bg-domeo-gray-200 transition-colors'
                                    : 'flex items-center gap-3 cursor-pointer'
                                  }
                                >
                                  <input
                                    type="checkbox"
                                    checked={Array.isArray(activeFilters[filter.id]) 
                                      ? (activeFilters[filter.id] as string[]).includes(option) 
                                      : false}
                                    onChange={(e) => {
                                      const current = Array.isArray(activeFilters[filter.id]) 
                                        ? activeFilters[filter.id] as string[] 
                                        : [];
                                      const updated = e.target.checked
                                        ? [...current, option]
                                        : current.filter((o: string) => o !== option);
                                      handleFilterChange(filter.id, updated);
                                    }}
                                    className={filter.type === 'tags' ? 'sr-only' : 'rounded border-domeo-gray-300 text-domeo-accent focus:ring-domeo-accent'}
                                  />
                                  <span className="text-sm text-domeo-gray-700">{option}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        );
                      }
                      
                      if (filter.type === 'single') {
                        const singleFilter = filter as SingleFilter;
                        return (
                          <div key={filter.id}>
                            <label className="text-sm font-medium text-domeo-black mb-3 block">
                              {filter.label}
                            </label>
                            <div className="space-y-2">
                              {singleFilter.options.map((option: string) => (
                                <label key={option} className="flex items-center gap-3 cursor-pointer">
                                  <input
                                    type="radio"
                                    name={filter.id}
                                    checked={activeFilters[filter.id] === option}
                                    onChange={() => handleFilterChange(filter.id, option)}
                                    className="border-domeo-gray-300 text-domeo-accent focus:ring-domeo-accent"
                                  />
                                  <span className="text-sm text-domeo-gray-700">{option}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        );
                      }
                      
                      return null;
                    })}
                  </div>
                </div>
              ))}
            </div>
          </aside>
        )}

        {/* Swipe Area */}
        <main className="flex-1 p-6 pt-4">
          <div className="max-w-md mx-auto">
            <SwipeStack dome={activeDome} />
          </div>
        </main>
      </div>
    </div>
  );
} 