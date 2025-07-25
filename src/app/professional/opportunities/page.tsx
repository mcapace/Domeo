'use client';

import { useState } from 'react';

interface Opportunity {
  id: string;
  type: 'collaboration' | 'mentorship' | 'job' | 'investment';
  title: string;
  company: string;
  poster: {
    name: string;
    role: string;
    verified: boolean;
  };
  description: string;
  requirements: string[];
  tags: string[];
  postedDate: Date;
  applicants: number;
}

const sampleOpportunities: Opportunity[] = [
  {
    id: '1',
    type: 'collaboration',
    title: 'Looking for Technical Co-founder',
    company: 'Stealth Startup',
    poster: { name: 'Alex Kim', role: 'CEO & Founder', verified: true },
    description: 'Building an AI-powered tool for designers. Need a technical co-founder to lead engineering.',
    requirements: ['5+ years engineering', 'ML/AI experience', 'Startup experience preferred'],
    tags: ['AI', 'B2B SaaS', 'Design Tools'],
    postedDate: new Date('2024-02-10'),
    applicants: 12
  },
  {
    id: '2',
    type: 'mentorship',
    title: 'Offering Product Design Mentorship',
    company: 'Personal',
    poster: { name: 'Sarah Chen', role: 'Head of Design @ TechCo', verified: true },
    description: 'Mentoring early-career designers on portfolio, career growth, and design thinking.',
    requirements: ['1-3 years experience', 'Portfolio required', 'Committed to growth'],
    tags: ['Design', 'Mentorship', 'Career Growth'],
    postedDate: new Date('2024-02-12'),
    applicants: 8
  },
  {
    id: '3',
    type: 'job',
    title: 'Senior Product Manager',
    company: 'FinTech Startup',
    poster: { name: 'Mike Thompson', role: 'VP Product', verified: true },
    description: 'Leading product strategy for our payment platform. Remote-first culture.',
    requirements: ['5+ years PM experience', 'FinTech background', 'Data-driven mindset'],
    tags: ['Product', 'FinTech', 'Remote'],
    postedDate: new Date('2024-02-08'),
    applicants: 45
  }
];

const typeConfig = {
  collaboration: { color: 'text-purple-600', bg: 'bg-purple-50', icon: '🤝' },
  mentorship: { color: 'text-blue-600', bg: 'bg-blue-50', icon: '🌟' },
  job: { color: 'text-green-600', bg: 'bg-green-50', icon: '💼' },
  investment: { color: 'text-yellow-600', bg: 'bg-yellow-50', icon: '💰' }
};

export default function ProfessionalOpportunities() {
  const [selectedType, setSelectedType] = useState<'all' | keyof typeof typeConfig>('all');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const filteredOpportunities = selectedType === 'all'
    ? sampleOpportunities
    : sampleOpportunities.filter(opp => opp.type === selectedType);

  const formatDate = (date: Date) => {
    const days = Math.floor((new Date().getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    if (days < 7) return `${days} days ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="min-h-screen bg-domeo-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b border-domeo-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-medium text-domeo-black">Opportunities</h1>

            <button
              onClick={() => setShowCreateModal(true)}
              className="px-4 py-2 bg-domeo-black text-white text-sm font-medium rounded-lg hover:bg-domeo-charcoal transition-colors"
            >
              Post Opportunity
            </button>
          </div>
        </div>

        {/* Type Filter */}
        <div className="px-6 pb-3">
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedType('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedType === 'all'
                  ? 'bg-domeo-gray-900 text-white'
                  : 'bg-domeo-gray-100 text-domeo-gray-600 hover:bg-domeo-gray-200'
              }`}
            >
              All
            </button>
            {Object.entries(typeConfig).map(([type, config]) => (
              <button
                key={type}
                onClick={() => setSelectedType(type as keyof typeof typeConfig)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  selectedType === type
                    ? `${config.bg} ${config.color}`
                    : 'bg-domeo-gray-100 text-domeo-gray-600 hover:bg-domeo-gray-200'
                }`}
              >
                <span>{config.icon}</span>
                <span className="capitalize">{type}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Opportunities List */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="space-y-4">
          {filteredOpportunities.map((opportunity) => {
            const config = typeConfig[opportunity.type];
            return (
              <div
                key={opportunity.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 cursor-pointer"
                onClick={() => window.location.href = `/professional/opportunities/${opportunity.id}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`${config.bg} ${config.color} px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1`}>
                        <span>{config.icon}</span>
                        <span className="capitalize">{opportunity.type}</span>
                      </span>
                      <span className="text-sm text-domeo-gray-500">{formatDate(opportunity.postedDate)}</span>
                    </div>
                    <h3 className="text-lg font-medium text-domeo-black mb-1">
                      {opportunity.title}
                    </h3>
                    <p className="text-sm text-domeo-gray-600">{opportunity.company}</p>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-sm text-domeo-gray-500">{opportunity.applicants} interested</p>
                  </div>
                </div>

                <p className="text-domeo-gray-700 mb-4 line-clamp-2">
                  {opportunity.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {opportunity.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-domeo-gray-100 text-domeo-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-domeo-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-domeo-gray-200 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium text-domeo-black">{opportunity.poster.name}</p>
                      <p className="text-xs text-domeo-gray-600">{opportunity.poster.role}</p>
                    </div>
                    {opportunity.poster.verified && (
                      <div className="w-4 h-4 bg-domeo-accent rounded-full flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5L4 7L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                  </div>

                  <button className="px-4 py-2 bg-domeo-black text-white text-sm font-medium rounded-lg hover:bg-domeo-charcoal transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredOpportunities.length === 0 && (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-domeo-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">💼</span>
            </div>
            <h3 className="text-lg font-medium text-domeo-black mb-2">No opportunities found</h3>
            <p className="text-sm text-domeo-gray-600 mb-6">
              Be the first to post an opportunity in this category!
            </p>
            <button
              onClick={() => setShowCreateModal(true)}
              className="px-6 py-3 bg-domeo-black text-white text-sm font-medium uppercase tracking-wider rounded-lg hover:bg-domeo-charcoal transition-colors"
            >
              Post Opportunity
            </button>
          </div>
        )}
      </div>

      {/* Create Opportunity Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-domeo-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-medium text-domeo-black">Post Opportunity</h2>
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
                  Opportunity Type
                </label>
                <select className="w-full px-4 py-2 border border-domeo-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-domeo-accent/20 focus:border-domeo-accent">
                  <option value="collaboration">Collaboration</option>
                  <option value="mentorship">Mentorship</option>
                  <option value="job">Job</option>
                  <option value="investment">Investment</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-domeo-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-domeo-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-domeo-accent/20 focus:border-domeo-accent"
                  placeholder="e.g., Looking for Technical Co-founder"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-domeo-gray-700 mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-domeo-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-domeo-accent/20 focus:border-domeo-accent"
                  placeholder="e.g., Stealth Startup"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-domeo-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-domeo-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-domeo-accent/20 focus:border-domeo-accent resize-none"
                  rows={4}
                  placeholder="Describe the opportunity..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-domeo-gray-700 mb-2">
                  Requirements
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-domeo-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-domeo-accent/20 focus:border-domeo-accent resize-none"
                  rows={3}
                  placeholder="List key requirements..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-domeo-gray-700 mb-2">
                  Tags
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-domeo-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-domeo-accent/20 focus:border-domeo-accent"
                  placeholder="e.g., AI, B2B SaaS, Design Tools"
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
                  Post Opportunity
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 