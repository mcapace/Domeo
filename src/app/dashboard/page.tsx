'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { DomeIcons } from '@/components/DomeIcons';
import MobileNav from '@/components/MobileNav';
import { motion, AnimatePresence } from 'framer-motion';

type DomeType = 'connect' | 'explore' | 'social' | 'professional' | 'private';

const domes = [
  { id: 'connect' as DomeType, name: 'Connect', icon: DomeIcons.connect, color: 'text-pink-600', bgColor: 'bg-pink-50', gradient: 'from-pink-500 to-rose-500' },
  { id: 'explore' as DomeType, name: 'Explore', icon: DomeIcons.explore, color: 'text-purple-600', bgColor: 'bg-purple-50', gradient: 'from-purple-500 to-indigo-500' },
  { id: 'social' as DomeType, name: 'Social', icon: DomeIcons.social, color: 'text-blue-600', bgColor: 'bg-blue-50', gradient: 'from-blue-500 to-cyan-500' },
  { id: 'professional' as DomeType, name: 'Professional', icon: DomeIcons.professional, color: 'text-gray-700', bgColor: 'bg-gray-50', gradient: 'from-gray-600 to-gray-800' },
  { id: 'private' as DomeType, name: 'Private', icon: DomeIcons.private, color: 'text-domeo-black', bgColor: 'bg-domeo-gray-100', gradient: 'from-gray-900 to-black' }
];

export default function Dashboard() {
  const router = useRouter();
  const [activeDome, setActiveDome] = useState<DomeType>('connect');
  const [greeting, setGreeting] = useState('');
  const [profileComplete, setProfileComplete] = useState(60);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');
  }, []);

  const currentDome = domes.find(d => d.id === activeDome)!;

  // Sample data - matches original dashboard
  const stats = {
    connect: { likes: 12, matches: 3, views: 47 },
    explore: { connections: 2, interests: 5, events: 3 },
    social: { friends: 8, events: 2, groups: 3 },
    professional: { connections: 15, opportunities: 4, views: 23 },
    private: { messages: 0, views: 0, connections: 0 }
  };

  const recentMatches = [
    { id: 1, name: 'David', age: 32, photo: 'https://i.pravatar.cc/150?img=33', message: 'Dog park this weekend?', time: '2h ago', unread: 2 },
    { id: 2, name: 'Michael', age: 30, photo: 'https://i.pravatar.cc/150?img=32', message: 'That hiking trail looks amazing!', time: '5h ago', unread: 0 },
    { id: 3, name: 'James', age: 34, photo: 'https://i.pravatar.cc/150?img=31', message: 'Just matched!', time: 'Just now', unread: 1, isNew: true }
  ];

  const recentActivity = [
    { id: 1, type: 'like', message: 'Sarah liked your photo', time: '2m ago', icon: '❤️', color: 'bg-pink-100' },
    { id: 2, type: 'match', message: 'New match with Emma!', time: '1h ago', icon: '✨', color: 'bg-purple-100' },
    { id: 3, type: 'message', message: 'David sent you a message', time: '2h ago', icon: '💬', color: 'bg-blue-100' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modern Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo & Greeting */}
            <div className="flex items-center gap-6">
              <Link href="/dashboard" className="text-2xl font-extralight tracking-tight text-gray-900">
                domeo
              </Link>
              <span className="hidden lg:block text-sm text-gray-600">
                {greeting}, Maya
              </span>
            </div>

            {/* Desktop Dome Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-gray-100 rounded-xl p-1">
              {domes.map((dome) => (
                <button
                  key={dome.id}
                  onClick={() => setActiveDome(dome.id)}
                  className={`group relative px-4 py-2.5 rounded-lg transition-all ${
                    activeDome === dome.id 
                      ? 'bg-white shadow-sm' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`text-lg ${activeDome === dome.id ? dome.color : 'text-gray-500'}`}>
                      {dome.icon}
                    </span>
                    <span className={`text-sm font-medium ${
                      activeDome === dome.id ? 'text-gray-900' : 'text-gray-600'
                    }`}>
                      {dome.name}
                    </span>
                  </div>
                </button>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button className="relative p-2 text-gray-600 hover:text-gray-900">
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                  <path d="M10 18C12.775 18 15 15.825 15.825 13H4.175C5 15.825 7.225 18 10 18ZM4 11H16C16 7.686 13.314 5 10 5C6.686 5 4 7.686 4 11Z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <Link href="/profile" className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-medium">
                MC
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Dome Pills */}
        <div className="lg:hidden px-4 pb-3 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2">
            {domes.map((dome) => (
              <button
                key={dome.id}
                onClick={() => setActiveDome(dome.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  activeDome === dome.id
                    ? `bg-gradient-to-r ${dome.gradient} text-white shadow-md`
                    : 'bg-white border border-gray-200 text-gray-600'
                }`}
              >
                <span className={activeDome === dome.id ? 'text-white' : dome.color}>
                  {dome.icon}
                </span>
                <span className="text-sm font-medium">{dome.name}</span>
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row">
        {/* Desktop Sidebar / Mobile Cards */}
        <aside className="w-full lg:w-80 bg-white lg:bg-transparent lg:border-r border-gray-200 lg:min-h-[calc(100vh-73px)]">
          <div className="p-4 lg:p-6 space-y-6">
            {/* Profile Completion Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-2xl p-6 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-xl"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-2">Complete Your Profile</h3>
                <p className="text-white/90 text-sm mb-4">Get 5x more matches</p>
                
                <div className="space-y-3 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      {profileComplete >= 20 ? '✓' : '○'}
                    </div>
                    <span className="text-sm">Verified identity</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      {profileComplete >= 60 ? '4/6' : '○'}
                    </div>
                    <span className="text-sm">Add 2 more photos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      !
                    </div>
                    <span className="text-sm">Write your bio</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Profile Strength</span>
                    <span>{profileComplete}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-white rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${profileComplete}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>
                
                <Link
                  href="/profile/edit"
                  className="block text-center py-3 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-50 transition-all"
                >
                  Complete Profile
                </Link>
              </div>
            </motion.div>

            {/* Connect Activity Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <h3 className="font-semibold text-gray-900 mb-4">Connect Activity</h3>
              <div className="space-y-4">
                {Object.entries(stats[activeDome]).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 capitalize">{key}</span>
                    <span className="text-2xl font-light text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/discover"
                className={`mt-6 w-full py-3 ${currentDome.bgColor} ${currentDome.color} text-center rounded-xl font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2`}
              >
                <span>Discover Singles</span>
                <span className="text-xs opacity-70">127</span>
              </Link>
            </motion.div>

            {/* Quick Actions - Desktop Only */}
            <div className="hidden lg:block">
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-4">
                Quick Actions
              </h3>
              <div className="space-y-2">
                <button className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                  Update dating preferences →
                </button>
                <button className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                  Boost your profile →
                </button>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-8 pb-20 lg:pb-8">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Discover Singles Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl lg:text-2xl font-medium text-gray-900">Discover Singles</h2>
                <button className="text-sm text-gray-600 hover:text-gray-900">
                  Filters
                </button>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-sm p-8 lg:p-12 text-center"
              >
                <div className={`w-20 h-20 ${currentDome.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <span className={`text-3xl ${currentDome.color}`}>{currentDome.icon}</span>
                </div>
                <p className="text-gray-600 mb-6">Ready to start swiping in {currentDome.name}?</p>
                <Link
                  href="/discover"
                  className="inline-block px-8 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-colors"
                >
                  Start Discovering
                </Link>
              </motion.div>
            </section>

            {/* Recent Matches Section */}
            <section>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Recent Matches</h3>
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                {recentMatches.map((match, index) => (
                  <motion.button
                    key={match.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => router.push(`/messages/${match.id}`)}
                    className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
                  >
                    <div className="relative">
                      <img 
                        src={match.photo} 
                        alt={match.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      {match.isNew && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 rounded-full flex items-center justify-center">
                          <span className="text-xs text-white">★</span>
                        </div>
                      )}
                    </div>
                    <div className="flex-1 text-left">
                      <p className="font-medium text-gray-900">
                        {match.name} • {match.age}
                      </p>
                      <p className="text-sm text-gray-600 line-clamp-1">{match.message}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">{match.time}</p>
                      {match.unread > 0 && (
                        <span className="inline-block mt-1 px-2 py-1 bg-pink-500 text-white text-xs rounded-full">
                          {match.unread}
                        </span>
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </section>

            {/* Recent Activity - Mobile Shows Less */}
            <section className="lg:hidden">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {recentActivity.slice(0, 2).map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-4"
                  >
                    <div className={`w-10 h-10 ${activity.color} rounded-full flex items-center justify-center`}>
                      <span>{activity.icon}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                    <button className="text-sm text-pink-600 font-medium">View</button>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Desktop Activity Feed & Cards */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-6">
              {/* Activity Feed */}
              <div className="lg:col-span-2">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Recent Activity</h3>
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  {recentActivity.map((activity, index) => (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors cursor-pointer border-b border-gray-100 last:border-0"
                    >
                      <div className={`w-12 h-12 ${activity.color} rounded-xl flex items-center justify-center text-xl`}>
                        {activity.icon}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{activity.message}</p>
                        <p className="text-sm text-gray-500">{activity.time}</p>
                      </div>
                      <button className="text-sm text-pink-600 hover:text-pink-700 font-medium">
                        View
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Side Cards */}
              <div className="space-y-4">
                {/* Boost Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`bg-gradient-to-br ${currentDome.gradient} text-white rounded-2xl p-6`}
                >
                  <h4 className="text-lg font-semibold mb-2">Boost Profile</h4>
                  <p className="text-white/90 text-sm mb-4">Be seen by 10x more people</p>
                  <button className="w-full py-2.5 bg-white/20 backdrop-blur text-white font-medium rounded-xl hover:bg-white/30 transition-all">
                    Boost Now
                  </button>
                </motion.div>

                {/* Who Likes You */}
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <h4 className="text-lg font-medium text-gray-900 mb-4">Who Likes You</h4>
                  <div className="flex -space-x-3 mb-4">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-12 h-12 bg-gray-200 rounded-full border-3 border-white"></div>
                    ))}
                    <div className="w-12 h-12 bg-gray-100 rounded-full border-3 border-white flex items-center justify-center">
                      <span className="text-xs font-medium text-gray-600">+8</span>
                    </div>
                  </div>
                  <Link
                    href="/matches?tab=likes"
                    className="block text-center py-2.5 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-all"
                  >
                    See Who Likes You
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Navigation */}
      <MobileNav />
    </div>
  );
} 