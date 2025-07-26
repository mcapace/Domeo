'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('privacy');

  const tabs = [
    { id: 'privacy', label: 'Privacy', icon: '🔒' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' },
    { id: 'account', label: 'Account', icon: '👤' },
    { id: 'billing', label: 'Billing', icon: '💳' }
  ];

  return (
    <div className="min-h-screen bg-domeo-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-domeo-gray-200">
        <div className="px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/dashboard">
              <Logo size="xs" theme="dark" linkToHome={false} />
            </Link>
            <h1 className="text-xl font-light text-domeo-black">Settings</h1>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-2xl shadow-sm">
          {/* Tab Navigation */}
          <div className="border-b border-domeo-gray-200">
            <div className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-domeo-accent text-domeo-black'
                      : 'border-transparent text-domeo-gray-500 hover:text-domeo-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'privacy' && (
              <div className="space-y-6">
                <h2 className="text-lg font-medium text-domeo-black">Privacy Settings</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-domeo-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-medium text-domeo-black">Profile Visibility</h3>
                      <p className="text-sm text-domeo-gray-600">Control who can see your profile</p>
                    </div>
                    <select className="px-3 py-2 border border-domeo-gray-200 rounded-lg text-sm">
                      <option>All domes</option>
                      <option>Selected domes only</option>
                      <option>Private mode</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-domeo-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-medium text-domeo-black">Location Sharing</h3>
                      <p className="text-sm text-domeo-gray-600">Show your approximate location</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-domeo-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-domeo-accent/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-domeo-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-domeo-accent"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-domeo-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-medium text-domeo-black">Online Status</h3>
                      <p className="text-sm text-domeo-gray-600">Show when you're active</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-domeo-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-domeo-accent/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-domeo-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-domeo-accent"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <h2 className="text-lg font-medium text-domeo-black">Notification Preferences</h2>
                <p className="text-domeo-gray-600">Configure how you receive notifications</p>
              </div>
            )}

            {activeTab === 'account' && (
              <div className="space-y-6">
                <h2 className="text-lg font-medium text-domeo-black">Account Settings</h2>
                <p className="text-domeo-gray-600">Manage your account information</p>
              </div>
            )}

            {activeTab === 'billing' && (
              <div className="space-y-6">
                <h2 className="text-lg font-medium text-domeo-black">Billing & Subscription</h2>
                <p className="text-domeo-gray-600">Manage your subscription and payment methods</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 