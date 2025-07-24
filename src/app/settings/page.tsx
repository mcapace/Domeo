'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { DomeIcons } from '@/components/DomeIcons';
import DashboardNavigation from '@/components/DashboardNavigation';

type SettingsSection = 'privacy' | 'account' | 'notifications' | 'safety' | 'billing' | 'help';
type DomeType = 'connect' | 'explore' | 'social' | 'professional' | 'private';

const domes = [
  { id: 'connect' as DomeType, name: 'Connect', icon: DomeIcons.connect, color: 'text-domeo-gray-600' },
  { id: 'explore' as DomeType, name: 'Explore', icon: DomeIcons.explore, color: 'text-domeo-gray-600' },
  { id: 'social' as DomeType, name: 'Social', icon: DomeIcons.social, color: 'text-domeo-gray-600' },
  { id: 'professional' as DomeType, name: 'Professional', icon: DomeIcons.professional, color: 'text-domeo-gray-600' },
  { id: 'private' as DomeType, name: 'Private', icon: DomeIcons.private, color: 'text-domeo-gray-600' }
];

interface PrivacySettings {
  profileVisibility: 'everyone' | 'matches' | 'no_one';
  showLastActive: boolean;
  showDistance: boolean;
  readReceipts: boolean;
  domeSettings: Record<DomeType, {
    enabled: boolean;
    anonymous: boolean;
    hideFromContacts: boolean;
    blockedUsers: string[];
  }>;
}

export default function Settings() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<SettingsSection>('privacy');
  const [privacySettings, setPrivacySettings] = useState<PrivacySettings>({
    profileVisibility: 'everyone',
    showLastActive: true,
    showDistance: true,
    readReceipts: true,
    domeSettings: {
      connect: { enabled: true, anonymous: false, hideFromContacts: false, blockedUsers: [] },
      explore: { enabled: true, anonymous: false, hideFromContacts: true, blockedUsers: [] },
      social: { enabled: true, anonymous: false, hideFromContacts: false, blockedUsers: [] },
      professional: { enabled: true, anonymous: false, hideFromContacts: false, blockedUsers: [] },
      private: { enabled: false, anonymous: true, hideFromContacts: true, blockedUsers: [] }
    }
  });

  const sections = [
    { 
      id: 'privacy' as SettingsSection, 
      label: 'Privacy & Security', 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
          <path d="M10 2L3 5V9C3 11.5 5 13.5 10 14C15 13.5 17 11.5 17 9V5L10 2Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
          <circle cx="10" cy="10" r="1.5" stroke="currentColor" strokeWidth="1"/>
        </svg>
      )
    },
    { 
      id: 'account' as SettingsSection, 
      label: 'Account', 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="6" r="3" stroke="currentColor" strokeWidth="1"/>
          <path d="M3 17C3 13 6 10 10 10C14 10 17 13 17 17" stroke="currentColor" strokeWidth="1"/>
        </svg>
      )
    },
    { 
      id: 'notifications' as SettingsSection, 
      label: 'Notifications', 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
          <path d="M10 2C6 2 3 5 3 9V13L1 16H19L17 13V9C17 5 14 2 10 2Z" stroke="currentColor" strokeWidth="1"/>
          <circle cx="10" cy="18" r="1" fill="currentColor"/>
        </svg>
      )
    },
    { 
      id: 'safety' as SettingsSection, 
      label: 'Safety', 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
          <path d="M10 2L12 8H18L13 11L15 17L10 13L5 17L7 11L2 8H8L10 2Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      id: 'billing' as SettingsSection, 
      label: 'Billing', 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
          <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1"/>
          <path d="M6 8H14" stroke="currentColor" strokeWidth="1"/>
          <path d="M6 12H12" stroke="currentColor" strokeWidth="1"/>
        </svg>
      )
    },
    { 
      id: 'help' as SettingsSection, 
      label: 'Help & Support', 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1"/>
          <path d="M10 14V14.01" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
          <path d="M10 11C10 9 12 9 12 11C12 12 11 13 10 13" stroke="currentColor" strokeWidth="1"/>
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-domeo-gray-50">
      {/* Settings Header - positioned like edit profile page */}
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

            <h1 className="text-lg font-medium text-domeo-black">Settings</h1>

            <div className="w-16" /> {/* Spacer for alignment */}
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar - sticky positioning like edit profile page */}
        <aside className="w-64 bg-white border-r border-domeo-gray-200 sticky top-[176px] h-[calc(100vh-176px)] overflow-y-auto">
          <nav className="p-4 space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  activeSection === section.id
                    ? 'bg-domeo-gray-100 text-domeo-black font-medium'
                    : 'text-domeo-gray-600 hover:bg-domeo-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{section.icon}</span>
                  <span>{section.label}</span>
                </div>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {activeSection === 'privacy' && (
            <div className="space-y-8">
              {/* Privacy Header */}
              <div>
                <h2 className="text-2xl font-medium text-domeo-black mb-2">Privacy & Security</h2>
                <p className="text-domeo-gray-600">Control how your information is shared across all domes.</p>
              </div>

              {/* Dome Separation Promise */}
              <div className="bg-domeo-accent-muted border border-domeo-accent/20 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-domeo-accent flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 16 16" fill="none">
                      <path d="M8 2L3 5V9C3 11.5 5 13.5 8 14C11 13.5 13 11.5 13 9V5L8 2Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
                      <circle cx="8" cy="8" r="1.5" stroke="currentColor" strokeWidth="1"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-domeo-black mb-1">Dome Separation Promise</h3>
                    <p className="text-sm text-domeo-gray-600">
                      Your activity in one dome is completely separate from others. What happens in one dome stays in that dome.
                    </p>
                  </div>
                </div>
              </div>

              {/* Profile Visibility */}
              <div className="bg-white rounded-lg border border-domeo-gray-200 p-6">
                <h3 className="text-lg font-medium text-domeo-black mb-4">Profile Visibility</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-domeo-black">Who can see your profile</p>
                      <p className="text-sm text-domeo-gray-600">Control who can discover your profile</p>
                    </div>
                    <select 
                      value={privacySettings.profileVisibility}
                      onChange={(e) => setPrivacySettings({
                        ...privacySettings,
                        profileVisibility: e.target.value as 'everyone' | 'matches' | 'no_one'
                      })}
                      className="px-3 py-2 border border-domeo-gray-200 rounded-lg text-sm"
                    >
                      <option value="everyone">Everyone</option>
                      <option value="matches">Matches only</option>
                      <option value="no_one">No one</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Activity Privacy */}
              <div className="bg-white rounded-lg border border-domeo-gray-200 p-6">
                <h3 className="text-lg font-medium text-domeo-black mb-4">Activity Privacy</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-domeo-black">Show last active</p>
                      <p className="text-sm text-domeo-gray-600">Let others see when you were last online</p>
                    </div>
                    <button
                      onClick={() => setPrivacySettings({
                        ...privacySettings,
                        showLastActive: !privacySettings.showLastActive
                      })}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        privacySettings.showLastActive ? 'bg-domeo-accent' : 'bg-domeo-gray-200'
                      }`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                        privacySettings.showLastActive ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-domeo-black">Show distance</p>
                      <p className="text-sm text-domeo-gray-600">Display your approximate location</p>
                    </div>
                    <button
                      onClick={() => setPrivacySettings({
                        ...privacySettings,
                        showDistance: !privacySettings.showDistance
                      })}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        privacySettings.showDistance ? 'bg-domeo-accent' : 'bg-domeo-gray-200'
                      }`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                        privacySettings.showDistance ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-domeo-black">Read receipts</p>
                      <p className="text-sm text-domeo-gray-600">Show when you've read messages</p>
                    </div>
                    <button
                      onClick={() => setPrivacySettings({
                        ...privacySettings,
                        readReceipts: !privacySettings.readReceipts
                      })}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        privacySettings.readReceipts ? 'bg-domeo-accent' : 'bg-domeo-gray-200'
                      }`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                        privacySettings.readReceipts ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Dome-Specific Settings */}
              <div className="bg-white rounded-lg border border-domeo-gray-200 p-6">
                <h3 className="text-lg font-medium text-domeo-black mb-4">Dome-Specific Settings</h3>
                <div className="space-y-6">
                  {domes.map((dome) => (
                    <div key={dome.id} className="border border-domeo-gray-100 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-8 h-8 rounded-full bg-domeo-gray-100 flex items-center justify-center ${dome.color}`}>
                          {dome.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-domeo-black">{dome.name}</h4>
                          <p className="text-sm text-domeo-gray-600">Privacy settings for this dome</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-domeo-gray-600">Enable dome</span>
                          <button
                            onClick={() => setPrivacySettings({
                              ...privacySettings,
                              domeSettings: {
                                ...privacySettings.domeSettings,
                                [dome.id]: {
                                  ...privacySettings.domeSettings[dome.id],
                                  enabled: !privacySettings.domeSettings[dome.id].enabled
                                }
                              }
                            })}
                            className={`w-10 h-6 rounded-full transition-colors ${
                              privacySettings.domeSettings[dome.id].enabled ? 'bg-domeo-accent' : 'bg-domeo-gray-200'
                            }`}
                          >
                            <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                              privacySettings.domeSettings[dome.id].enabled ? 'translate-x-4' : 'translate-x-1'
                            }`} />
                          </button>
                        </div>
                        
                        {dome.id === 'private' && (
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-domeo-gray-600">Anonymous mode</span>
                            <button
                              onClick={() => setPrivacySettings({
                                ...privacySettings,
                                domeSettings: {
                                  ...privacySettings.domeSettings,
                                  [dome.id]: {
                                    ...privacySettings.domeSettings[dome.id],
                                    anonymous: !privacySettings.domeSettings[dome.id].anonymous
                                  }
                                }
                              })}
                              className={`w-10 h-6 rounded-full transition-colors ${
                                privacySettings.domeSettings[dome.id].anonymous ? 'bg-domeo-accent' : 'bg-domeo-gray-200'
                              }`}
                            >
                              <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                                privacySettings.domeSettings[dome.id].anonymous ? 'translate-x-4' : 'translate-x-1'
                              }`} />
                            </button>
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-domeo-gray-600">Hide from contacts</span>
                          <button
                            onClick={() => setPrivacySettings({
                              ...privacySettings,
                              domeSettings: {
                                ...privacySettings.domeSettings,
                                [dome.id]: {
                                  ...privacySettings.domeSettings[dome.id],
                                  hideFromContacts: !privacySettings.domeSettings[dome.id].hideFromContacts
                                }
                              }
                            })}
                            className={`w-10 h-6 rounded-full transition-colors ${
                              privacySettings.domeSettings[dome.id].hideFromContacts ? 'bg-domeo-accent' : 'bg-domeo-gray-200'
                            }`}
                          >
                            <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                              privacySettings.domeSettings[dome.id].hideFromContacts ? 'translate-x-4' : 'translate-x-1'
                            }`} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Data Controls */}
              <div className="bg-white rounded-lg border border-domeo-gray-200 p-6">
                <h3 className="text-lg font-medium text-domeo-black mb-4">Data & Privacy</h3>
                <div className="space-y-4">
                  <button className="w-full text-left p-4 border border-domeo-gray-200 rounded-lg hover:bg-domeo-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-domeo-black">Download my data</p>
                        <p className="text-sm text-domeo-gray-600">Get a copy of all your data</p>
                      </div>
                      <svg className="w-5 h-5 text-domeo-gray-400" viewBox="0 0 20 20" fill="none">
                        <path d="M10 2L10 12M10 12L6 8M10 12L14 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3 15H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </button>
                  
                  <button className="w-full text-left p-4 border border-domeo-gray-200 rounded-lg hover:bg-domeo-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-domeo-black">Clear chat history</p>
                        <p className="text-sm text-domeo-gray-600">Delete all your conversations</p>
                      </div>
                      <svg className="w-5 h-5 text-domeo-gray-400" viewBox="0 0 20 20" fill="none">
                        <path d="M3 6H17M8 6V4C8 3.44772 8.44772 3 9 3H11C11.5523 3 12 3.44772 12 4V6M14 6V16C14 17.1046 13.1046 18 12 18H8C6.89543 18 6 17.1046 6 16V6H14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </button>
                  
                  <button className="w-full text-left p-4 border border-red-200 rounded-lg hover:bg-red-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-red-700">Delete account</p>
                        <p className="text-sm text-red-600">Permanently delete your account and data</p>
                      </div>
                      <svg className="w-5 h-5 text-red-400" viewBox="0 0 20 20" fill="none">
                        <path d="M3 6H17M8 6V4C8 3.44772 8.44772 3 9 3H11C11.5523 3 12 3.44772 12 4V6M14 6V16C14 17.1046 13.1046 18 12 18H8C6.89543 18 6 17.1046 6 16V6H14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'account' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-medium text-domeo-black mb-2">Account Settings</h2>
                <p className="text-domeo-gray-600">Manage your account information and preferences.</p>
              </div>
              
              <div className="bg-white rounded-lg border border-domeo-gray-200 p-6">
                <h3 className="text-lg font-medium text-domeo-black mb-4">Profile Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-domeo-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-3 py-2 border border-domeo-gray-200 rounded-lg"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-domeo-gray-700 mb-2">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full px-3 py-2 border border-domeo-gray-200 rounded-lg"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <button className="px-4 py-2 bg-domeo-accent text-white rounded-lg hover:bg-domeo-accent/90 transition-colors">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'notifications' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-medium text-domeo-black mb-2">Notifications</h2>
                <p className="text-domeo-gray-600">Choose how you want to be notified about activity.</p>
              </div>
              
              <div className="bg-white rounded-lg border border-domeo-gray-200 p-6">
                <h3 className="text-lg font-medium text-domeo-black mb-4">Push Notifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-domeo-black">New matches</p>
                      <p className="text-sm text-domeo-gray-600">When someone matches with you</p>
                    </div>
                    <button className="w-12 h-6 rounded-full bg-domeo-accent">
                      <div className="w-4 h-4 bg-white rounded-full translate-x-6" />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-domeo-black">Messages</p>
                      <p className="text-sm text-domeo-gray-600">When you receive new messages</p>
                    </div>
                    <button className="w-12 h-6 rounded-full bg-domeo-accent">
                      <div className="w-4 h-4 bg-white rounded-full translate-x-6" />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-domeo-black">Profile views</p>
                      <p className="text-sm text-domeo-gray-600">When someone views your profile</p>
                    </div>
                    <button className="w-12 h-6 rounded-full bg-domeo-gray-200">
                      <div className="w-4 h-4 bg-white rounded-full translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'safety' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-medium text-domeo-black mb-2">Safety & Security</h2>
                <p className="text-domeo-gray-600">Tools to keep you safe and secure on Domeo.</p>
              </div>
              
              <div className="bg-white rounded-lg border border-domeo-gray-200 p-6">
                <h3 className="text-lg font-medium text-domeo-black mb-4">Blocked Users</h3>
                <div className="space-y-4">
                  <p className="text-sm text-domeo-gray-600">You haven't blocked any users yet.</p>
                  <button className="px-4 py-2 border border-domeo-gray-200 rounded-lg hover:bg-domeo-gray-50 transition-colors">
                    View Blocked Users
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border border-domeo-gray-200 p-6">
                <h3 className="text-lg font-medium text-domeo-black mb-4">Report Issues</h3>
                <div className="space-y-4">
                  <button className="w-full text-left p-4 border border-domeo-gray-200 rounded-lg hover:bg-domeo-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-domeo-black">Report a user</p>
                        <p className="text-sm text-domeo-gray-600">Report inappropriate behavior</p>
                      </div>
                      <svg className="w-5 h-5 text-domeo-gray-400" viewBox="0 0 20 20" fill="none">
                        <path d="M10 2L12 8H18L13 11L15 17L10 13L5 17L7 11L2 8H8L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </button>
                  
                  <button className="w-full text-left p-4 border border-domeo-gray-200 rounded-lg hover:bg-domeo-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-domeo-black">Report a bug</p>
                        <p className="text-sm text-domeo-gray-600">Help us improve Domeo</p>
                      </div>
                      <svg className="w-5 h-5 text-domeo-gray-400" viewBox="0 0 20 20" fill="none">
                        <path d="M10 2L12 8H18L13 11L15 17L10 13L5 17L7 11L2 8H8L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'billing' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-medium text-domeo-black mb-2">Billing & Subscription</h2>
                <p className="text-domeo-gray-600">Manage your subscription and payment methods.</p>
              </div>
              
              <div className="bg-white rounded-lg border border-domeo-gray-200 p-6">
                <h3 className="text-lg font-medium text-domeo-black mb-4">Current Plan</h3>
                <div className="bg-domeo-accent-muted border border-domeo-accent/20 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-domeo-black">Founding Member</p>
                      <p className="text-sm text-domeo-gray-600">$19.99/month • 3 months free</p>
                    </div>
                    <span className="px-3 py-1 bg-domeo-accent text-white text-xs rounded-full">Active</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border border-domeo-gray-200 p-6">
                <h3 className="text-lg font-medium text-domeo-black mb-4">Payment Methods</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-domeo-gray-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-domeo-gray-200 rounded flex items-center justify-center">
                        <span className="text-xs font-medium">💳</span>
                      </div>
                      <div>
                        <p className="font-medium text-domeo-black">•••• •••• •••• 4242</p>
                        <p className="text-sm text-domeo-gray-600">Expires 12/25</p>
                      </div>
                    </div>
                    <button className="text-domeo-accent hover:text-domeo-accent/80 text-sm">
                      Edit
                    </button>
                  </div>
                  
                  <button className="w-full p-4 border border-domeo-gray-200 rounded-lg hover:bg-domeo-gray-50 transition-colors text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-domeo-gray-100 rounded flex items-center justify-center">
                        <svg className="w-4 h-4 text-domeo-gray-600" viewBox="0 0 16 16" fill="none">
                          <path d="M8 2V8M8 8L5 5M8 8L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-domeo-gray-600">Add payment method</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'help' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-medium text-domeo-black mb-2">Help & Support</h2>
                <p className="text-domeo-gray-600">Get help with your account and find answers to common questions.</p>
              </div>
              
              <div className="bg-white rounded-lg border border-domeo-gray-200 p-6">
                <h3 className="text-lg font-medium text-domeo-black mb-4">Quick Help</h3>
                <div className="space-y-4">
                  <button className="w-full text-left p-4 border border-domeo-gray-200 rounded-lg hover:bg-domeo-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-domeo-black">How do domes work?</p>
                        <p className="text-sm text-domeo-gray-600">Learn about our unique community system</p>
                      </div>
                      <svg className="w-5 h-5 text-domeo-gray-400" viewBox="0 0 20 20" fill="none">
                        <path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </button>
                  
                  <button className="w-full text-left p-4 border border-domeo-gray-200 rounded-lg hover:bg-domeo-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-domeo-black">Privacy & safety</p>
                        <p className="text-sm text-domeo-gray-600">How we protect your information</p>
                      </div>
                      <svg className="w-5 h-5 text-domeo-gray-400" viewBox="0 0 20 20" fill="none">
                        <path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </button>
                  
                  <button className="w-full text-left p-4 border border-domeo-gray-200 rounded-lg hover:bg-domeo-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-domeo-black">Contact support</p>
                        <p className="text-sm text-domeo-gray-600">Get help from our team</p>
                      </div>
                      <svg className="w-5 h-5 text-domeo-gray-400" viewBox="0 0 20 20" fill="none">
                        <path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
} 