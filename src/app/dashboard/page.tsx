'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { DomeIcons } from '@/components/DomeIcons';
import MobileNav from '@/components/MobileNav';
import Logo from '@/components/Logo';
import { motion, AnimatePresence } from 'framer-motion';

type DomeType = 'connect' | 'explore' | 'social' | 'professional' | 'private';

const domes = [
  { id: 'connect' as DomeType, name: 'CONNECT', icon: DomeIcons.connect, color: 'text-pink-600', bgColor: 'bg-pink-50', gradient: 'from-pink-500 to-rose-500' },
  { id: 'explore' as DomeType, name: 'EXPLORE', icon: DomeIcons.explore, color: 'text-purple-600', bgColor: 'bg-purple-50', gradient: 'from-purple-500 to-indigo-500' },
  { id: 'social' as DomeType, name: 'SOCIAL', icon: DomeIcons.social, color: 'text-blue-600', bgColor: 'bg-blue-50', gradient: 'from-blue-500 to-cyan-500' },
  { id: 'professional' as DomeType, name: 'PROFESSIONAL', icon: DomeIcons.professional, color: 'text-gray-700', bgColor: 'bg-gray-50', gradient: 'from-gray-600 to-gray-800' },
  { id: 'private' as DomeType, name: 'PRIVATE', icon: DomeIcons.private, color: 'text-domeo-black', bgColor: 'bg-domeo-gray-100', gradient: 'from-gray-900 to-black' }
];

// 1. AI Compatibility Engine with Real-time Analysis
const AICompatibilityEngine = ({ match }: { match: any }) => {
  const [analyzing, setAnalyzing] = useState(false);
  const [insights, setInsights] = useState<any>(null);

  const analyzeCompatibility = async () => {
    setAnalyzing(true);
    setTimeout(() => {
      setInsights({
        overall: 94,
        communication: 89,
        lifestyle: 92,
        values: 96,
        chemistry: 88,
        longevity: 91,
        prediction: "High likelihood of meaningful connection",
        tips: ["Share your love of hiking", "Ask about their podcast recommendations"],
        warnings: ["Different sleep schedules", "Varying social energy levels"]
      });
      setAnalyzing(false);
    }, 2000);
  };

  return (
    <motion.div 
      className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-2xl p-6 opacity-0 group-hover:opacity-100 transition-all z-20 pointer-events-none group-hover:pointer-events-auto"
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
    >
      {!insights ? (
        <button
          onClick={analyzeCompatibility}
          className="w-full h-full flex flex-col items-center justify-center text-white"
        >
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 hover:bg-white/30 transition-colors">
            <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M16 4L20 12L28 16L20 20L16 28L12 20L4 16L12 12L16 4Z" stroke="currentColor"/>
              <circle cx="16" cy="16" r="2" fill="currentColor"/>
            </svg>
          </div>
          <p className="text-lg font-medium mb-2">AI Deep Compatibility Analysis</p>
          <p className="text-sm text-white/80">Click to analyze match potential</p>
        </button>
      ) : (
        <div className="h-full flex flex-col">
          {analyzing ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="w-20 h-20 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
            </div>
          ) : (
            <>
              <h4 className="text-white font-medium mb-4">AI Match Insights</h4>
              <div className="flex-1 space-y-3 overflow-y-auto">
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-white mb-1">{insights.overall}%</div>
                  <p className="text-sm text-white/80">Overall Compatibility</p>
                </div>
                <div className="space-y-2">
                  {Object.entries(insights).filter(([key]) => ['communication', 'lifestyle', 'values', 'chemistry', 'longevity'].includes(key)).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-sm text-white/80 capitalize">{key}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-white rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${value}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                          />
                        </div>
                        <span className="text-xs text-white/60 w-8">{value as number}%</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-white/10 rounded-lg">
                  <p className="text-xs text-white/90 mb-2">{insights.prediction}</p>
                  <p className="text-xs text-white/70">💡 {insights.tips[0]}</p>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </motion.div>
  );
};

// 2. Cross-Dome Synergy Indicator
const CrossDomeSynergy = ({ userId }: { userId: string }) => {
  const synergies = [
    { from: 'social', to: 'connect', count: 3, description: '3 friends became romantic matches' },
    { from: 'professional', to: 'social', count: 5, description: '5 colleagues became friends' },
    { from: 'explore', to: 'connect', count: 2, description: '2 explore partners in Connect' }
  ];

  return (
    <motion.div 
      className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white"
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
        <span>🔄</span> Cross-Dome Synergies
      </h3>
      <div className="space-y-3">
        {synergies.map((synergy, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between p-3 bg-white/10 rounded-lg backdrop-blur-sm"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <span className="text-lg">{DomeIcons[synergy.from as keyof typeof DomeIcons]}</span>
                <svg className="w-4 h-4" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 24L20 16L12 8" stroke="currentColor" strokeLinecap="round"/>
                </svg>
                <span className="text-lg">{DomeIcons[synergy.to as keyof typeof DomeIcons]}</span>
              </div>
            </div>
            <p className="text-xs text-white/80">{synergy.description}</p>
          </motion.div>
        ))}
      </div>
      <button className="mt-4 w-full py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors text-sm font-medium">
        View Connection Map →
      </button>
    </motion.div>
  );
};

// 3. Voice Intro Player
const VoiceIntroPlayer = ({ audioUrl, name }: { audioUrl?: string; name: string }) => {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (playing) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setPlaying(false);
            return 0;
          }
          return prev + 3.33;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [playing]);

  return (
    <div className="absolute bottom-4 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent z-30">
      <div className="bg-black/20 backdrop-blur-sm rounded-full p-2 flex items-center gap-2">
        <button
          onClick={() => setPlaying(!playing)}
          className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:scale-105 transition-transform"
        >
          {playing ? (
            <svg className="w-4 h-4 text-gray-900" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
              <rect x="10" y="8" width="3" height="16" fill="currentColor"/>
              <rect x="19" y="8" width="3" height="16" fill="currentColor"/>
            </svg>
          ) : (
            <svg className="w-4 h-4 text-gray-900 ml-0.5" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M8 6L24 16L8 26V6Z" fill="currentColor"/>
            </svg>
          )}
        </button>
        <div className="flex-1">
          <p className="text-xs text-white/90 font-medium mb-1">Voice Intro by {name}</p>
          <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-white rounded-full"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>
        <span className="text-xs text-white/80">0:30</span>
      </div>
    </div>
  );
};

// 4. Live Activity Heat Map
const LiveActivityMap = () => {
  const [selectedLocation, setSelectedLocation] = useState<any>(null);
  
  const hotspots = [
    { id: 1, x: '20%', y: '30%', intensity: 'high', count: 47, area: 'Manhattan' },
    { id: 2, x: '45%', y: '50%', intensity: 'medium', count: 23, area: 'Brooklyn' },
    { id: 3, x: '70%', y: '40%', intensity: 'low', count: 12, area: 'Queens' }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Live Activity Map</h3>
      <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100"></div>
        </div>
        
        {hotspots.map((spot) => (
          <motion.div
            key={spot.id}
            className="absolute cursor-pointer"
            style={{ left: spot.x, top: spot.y }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            onClick={() => setSelectedLocation(spot)}
          >
            <div className={`relative w-16 h-16 rounded-full ${
              spot.intensity === 'high' ? 'bg-red-500/30' :
              spot.intensity === 'medium' ? 'bg-yellow-500/30' :
              'bg-green-500/30'
            }`}>
              <div className={`absolute inset-2 rounded-full ${
                spot.intensity === 'high' ? 'bg-red-500/50' :
                spot.intensity === 'medium' ? 'bg-yellow-500/50' :
                'bg-green-500/50'
              }`}>
                <div className={`absolute inset-2 rounded-full ${
                  spot.intensity === 'high' ? 'bg-red-500' :
                  spot.intensity === 'medium' ? 'bg-yellow-500' :
                  'bg-green-500'
                } flex items-center justify-center text-white text-xs font-bold`}>
                  {spot.count}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        
        {selectedLocation && (
          <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg p-3 shadow-lg">
            <p className="text-sm font-medium text-gray-900">{selectedLocation.area}</p>
            <p className="text-xs text-gray-600">{selectedLocation.count} active users</p>
          </div>
        )}
      </div>
      
      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-gray-600">
          <span className="font-medium text-gray-900">127</span> people active near you
        </p>
        <button className="text-sm text-domeo-accent hover:text-domeo-accent/80 font-medium">
          Explore Map →
        </button>
      </div>
    </div>
  );
};

// 5. Mood-Based Matching
const MoodMatcher = () => {
  const [currentMood, setCurrentMood] = useState('adventurous');
  
  const moods = [
    { id: 'adventurous', icon: 'target', color: 'from-orange-500 to-red-500' },
    { id: 'romantic', icon: 'heart', color: 'from-pink-500 to-rose-500' },
    { id: 'social', icon: 'users', color: 'from-blue-500 to-indigo-500' },
    { id: 'chill', icon: 'leaf', color: 'from-green-500 to-teal-500' },
    { id: 'intellectual', icon: 'brain', color: 'from-purple-500 to-indigo-500' }
  ];

  return (
    <motion.div 
      className="bg-white rounded-2xl p-6 shadow-sm"
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-lg font-medium text-gray-900 mb-4">Today's Mood</h3>
      <div className="grid grid-cols-5 gap-2 mb-4">
        {moods.map((mood) => (
          <button
            key={mood.id}
            onClick={() => setCurrentMood(mood.id)}
            className={`relative p-4 rounded-xl transition-all ${
              currentMood === mood.id ? 'scale-110' : 'scale-100 opacity-60 hover:opacity-100'
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${mood.color} rounded-xl ${
              currentMood === mood.id ? 'opacity-100' : 'opacity-20'
            } transition-opacity`}></div>
            <span className="relative w-6 h-6 flex items-center justify-center">
              {mood.icon === 'target' && (
                <svg className={`w-5 h-5 ${currentMood === mood.id ? 'text-white' : 'text-gray-600'}`} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="16" cy="16" r="12" stroke="currentColor"/>
                  <circle cx="16" cy="16" r="6" stroke="currentColor"/>
                  <circle cx="16" cy="16" r="2" fill="currentColor"/>
                </svg>
              )}
              {mood.icon === 'heart' && (
                <svg className={`w-5 h-5 ${currentMood === mood.id ? 'text-white' : 'text-gray-600'}`} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M16 8C18.2091 8 20 9.79086 20 12C20 14.2091 18.2091 16 16 16C13.7909 16 12 14.2091 12 12C12 9.79086 13.7909 8 16 8Z" stroke="currentColor"/>
                  <path d="M16 16L20 20C22.2091 22.2091 24 24 24 26C24 28.2091 22.2091 30 20 30C17.7909 30 16 28.2091 16 26C16 28.2091 14.2091 30 12 30C9.79086 30 8 28.2091 8 26C8 24 9.79086 22.2091 12 20L16 16Z" stroke="currentColor"/>
                </svg>
              )}
              {mood.icon === 'users' && (
                <svg className={`w-5 h-5 ${currentMood === mood.id ? 'text-white' : 'text-gray-600'}`} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="16" cy="10" r="3" stroke="currentColor"/>
                  <circle cx="10" cy="20" r="3" stroke="currentColor"/>
                  <circle cx="22" cy="20" r="3" stroke="currentColor"/>
                  <path d="M16 13V17M10 17L12 15M20 15L22 17" stroke="currentColor"/>
                </svg>
              )}
              {mood.icon === 'leaf' && (
                <svg className={`w-5 h-5 ${currentMood === mood.id ? 'text-white' : 'text-gray-600'}`} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M8 24C8 20 12 16 16 16C20 16 24 20 24 24" stroke="currentColor"/>
                  <path d="M16 8V16" stroke="currentColor"/>
                  <path d="M12 12L16 8L20 12" stroke="currentColor"/>
                </svg>
              )}
              {mood.icon === 'brain' && (
                <svg className={`w-5 h-5 ${currentMood === mood.id ? 'text-white' : 'text-gray-600'}`} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M16 8C20.4183 8 24 11.5817 24 16C24 20.4183 20.4183 24 16 24C11.5817 24 8 20.4183 8 16C8 11.5817 11.5817 8 16 8Z" stroke="currentColor"/>
                  <path d="M12 12C12 14.2091 13.7909 16 16 16C18.2091 16 20 14.2091 20 12" stroke="currentColor"/>
                  <path d="M14 18C14 19.1046 14.8954 20 16 20C17.1046 20 18 19.1046 18 18" stroke="currentColor"/>
                </svg>
              )}
            </span>
          </button>
        ))}
      </div>
      <p className="text-sm text-gray-600 text-center">
        AI matching adjusted for your <span className="font-medium text-gray-900">{currentMood}</span> mood
      </p>
    </motion.div>
  );
};

// 6. AR Date Preview (Simplified for web)
const ARDatePreview = ({ match }: { match: any }) => {
  const [showAR, setShowAR] = useState(false);
  
  return (
    <motion.div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-6 text-white">
      <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
        <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="4" y="8" width="24" height="16" rx="2" stroke="currentColor"/>
          <path d="M8 12H24" stroke="currentColor"/>
          <path d="M8 16H24" stroke="currentColor"/>
          <path d="M8 20H24" stroke="currentColor"/>
          <circle cx="16" cy="14" r="1" fill="currentColor"/>
        </svg>
        AR Date Preview
      </h3>
      <p className="text-sm text-white/80 mb-4">
        See how you'd look together at popular date spots
      </p>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {['Coffee Shop', 'Park', 'Restaurant'].map((place) => (
          <button
            key={place}
            onClick={() => setShowAR(true)}
            className="p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors text-xs"
          >
            {place}
          </button>
        ))}
      </div>
      {showAR && (
        <div className="bg-white/10 rounded-lg p-4 text-center">
          <p className="text-xs">AR preview launching...</p>
        </div>
      )}
    </motion.div>
  );
};

// 7. AI Conversation Coach
const ConversationCoach = () => {
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  
  const generateSuggestions = () => {
    setSuggestions([
      "Ask about their recent hiking adventure",
      "Share your favorite podcast episode",
      "Suggest a creative first date idea"
    ]);
  };

  return (
    <motion.div 
      className="fixed bottom-20 right-4 z-30"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {activeChat && (
        <div className="bg-white rounded-2xl shadow-xl p-4 mb-4 max-w-xs">
          <h4 className="text-sm font-medium text-gray-900 mb-3">AI Conversation Tips</h4>
          <div className="space-y-2">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                className="w-full text-left p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-xs text-gray-700"
              >
                <svg className="w-3 h-3 inline mr-1" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M16 4C20.4183 4 24 7.58172 24 12C24 16.4183 20.4183 20 16 20C11.5817 20 8 16.4183 8 12C8 7.58172 11.5817 4 16 4Z" stroke="currentColor"/>
                  <path d="M16 20V24" stroke="currentColor"/>
                  <path d="M12 24H20" stroke="currentColor"/>
                </svg>
                {suggestion}
              </button>
            ))}
          </div>
          <button
            onClick={() => setActiveChat(null)}
            className="mt-3 w-full text-xs text-gray-500 hover:text-gray-700"
          >
            Close
          </button>
        </div>
      )}
      
      <button
        onClick={() => {
          setActiveChat('active');
          generateSuggestions();
        }}
        className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
      >
        <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="16" cy="16" r="14" stroke="currentColor"/>
          <path d="M16 12V16M16 20H16.01" stroke="currentColor" strokeLinecap="round"/>
        </svg>
      </button>
    </motion.div>
  );
};

// 8. Dome Karma System
const DomeKarma = () => {
  const karma = {
    overall: 92,
    connect: { score: 95, trend: 'up' },
    explore: { score: 88, trend: 'stable' },
    social: { score: 97, trend: 'up' },
    professional: { score: 90, trend: 'stable' },
    private: { score: 0, trend: 'none' }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
        <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="16" cy="16" r="14" stroke="currentColor"/>
          <path d="M12 12L16 16L20 12" stroke="currentColor" strokeLinecap="round"/>
          <path d="M12 20L16 16L20 20" stroke="currentColor" strokeLinecap="round"/>
          <path d="M16 8V24" stroke="currentColor"/>
        </svg>
        Your Dome Karma
      </h3>
      <div className="text-center mb-4">
        <div className="text-3xl font-bold text-gray-900">{karma.overall}</div>
        <p className="text-sm text-gray-600">Overall Score</p>
      </div>
      <div className="space-y-3">
        {Object.entries(karma).filter(([key]) => key !== 'overall').map(([dome, data]) => {
          const domeData = data as { score: number; trend: string };
          return (
            <div key={dome} className="flex items-center justify-between">
              <span className="text-sm text-gray-600 capitalize">{dome}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-900">{domeData.score}</span>
                {domeData.trend === 'up' && (
                  <svg className="w-3 h-3 text-green-500" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                    <path d="M16 24L8 16L16 8"/>
                  </svg>
                )}
                {domeData.trend === 'down' && (
                  <svg className="w-3 h-3 text-red-500" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                    <path d="M16 8L8 16L16 24"/>
                  </svg>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// 9. Predictive Compatibility Timeline
const CompatibilityTimeline = ({ match }: { match: any }) => {
  const milestones = [
    { month: 1, probability: 85, event: 'First meaningful date' },
    { month: 3, probability: 72, event: 'Exclusive relationship' },
    { month: 6, probability: 68, event: 'Meeting friends/family' },
    { month: 12, probability: 61, event: 'Moving in together' }
  ];

  return (
    <div className="bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl p-6 text-white">
      <h3 className="text-lg font-medium mb-4">Relationship Timeline</h3>
      <div className="space-y-3">
        {milestones.map((milestone, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="text-sm font-medium w-20">{milestone.month} month</div>
            <div className="flex-1">
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-white rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${milestone.probability}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                />
              </div>
            </div>
            <div className="text-xs w-10">{milestone.probability}%</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// 10. Anonymous Voice Rooms
const VoiceRooms = () => {
  const rooms = [
    { id: 1, topic: 'Dating Horror Stories', participants: 12, active: true },
    { id: 2, topic: 'First Date Ideas', participants: 8, active: true },
    { id: 3, topic: 'Red Flags Discussion', participants: 15, active: false }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
        <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M16 8C18.2091 8 20 9.79086 20 12V16C20 18.2091 18.2091 20 16 20C13.7909 20 12 18.2091 12 16V12C12 9.79086 13.7909 8 16 8Z" stroke="currentColor"/>
          <path d="M8 16C8 20.4183 11.5817 24 16 24C20.4183 24 24 20.4183 24 16" stroke="currentColor"/>
          <path d="M16 24V28" stroke="currentColor"/>
        </svg>
        Live Voice Rooms
      </h3>
      <div className="space-y-3">
        {rooms.map((room) => (
          <button
            key={room.id}
            className="w-full p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors text-left"
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-medium text-gray-900">{room.topic}</h4>
              {room.active && (
                <span className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded-full">
                  Live
                </span>
              )}
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-600">
              <span>{room.participants} participants</span>
              <span>Anonymous</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

// 11. Smart Calendar Integration
const SmartCalendar = () => {
  const [suggestedTimes, setSuggestedTimes] = useState([
    { day: 'Friday', time: '7:00 PM', available: true },
    { day: 'Saturday', time: '2:00 PM', available: true },
    { day: 'Sunday', time: '11:00 AM', available: false }
  ]);

  return (
    <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-6 text-white">
      <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
        <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="6" y="8" width="20" height="18" rx="2" stroke="currentColor"/>
          <path d="M6 12H26" stroke="currentColor"/>
          <path d="M10 4V8" stroke="currentColor"/>
          <path d="M22 4V8" stroke="currentColor"/>
          <path d="M12 16H14" stroke="currentColor"/>
          <path d="M18 16H20" stroke="currentColor"/>
          <path d="M12 20H14" stroke="currentColor"/>
          <path d="M18 20H20" stroke="currentColor"/>
        </svg>
        Smart Date Scheduling
      </h3>
      <p className="text-sm text-white/80 mb-4">
        AI suggests optimal meeting times
      </p>
      <div className="space-y-2">
        {suggestedTimes.map((slot, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg flex items-center justify-between ${
              slot.available ? 'bg-white/20 hover:bg-white/30' : 'bg-white/10 opacity-60'
            } transition-colors`}
          >
            <span className="text-sm">{slot.day} at {slot.time}</span>
            <span className="text-xs flex items-center gap-1">
              {slot.available ? (
                <>
                  <svg className="w-3 h-3" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                    <path d="M8 16L14 22L24 10"/>
                  </svg>
                  Available
                </>
              ) : (
                <>
                  <svg className="w-3 h-3" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                    <path d="M8 8L24 24M8 24L24 8"/>
                  </svg>
                  Busy
                </>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// 12. Biometric Compatibility (Simulated)
const BiometricSync = () => {
  const [heartRate, setHeartRate] = useState(72);
  const [syncing, setSyncing] = useState(false);

  useEffect(() => {
    if (syncing) {
      const interval = setInterval(() => {
        setHeartRate(prev => 70 + Math.floor(Math.random() * 10));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [syncing]);

  return (
    <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl p-6 text-white">
      <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
        <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M16 8C20.4183 8 24 11.5817 24 16C24 20.4183 20.4183 24 16 24C11.5817 24 8 20.4183 8 16C8 11.5817 11.5817 8 16 8Z" stroke="currentColor"/>
          <path d="M16 12C18.2091 12 20 13.7909 20 16C20 18.2091 18.2091 20 16 20C13.7909 20 12 18.2091 12 16C12 13.7909 13.7909 12 16 12Z" stroke="currentColor"/>
        </svg>
        Chemistry Detector
      </h3>
      <div className="text-center">
        <motion.div
          className="text-5xl font-bold mb-2"
          animate={{ scale: syncing ? [1, 1.1, 1] : 1 }}
          transition={{ duration: 0.6, repeat: syncing ? Infinity : 0 }}
        >
          {heartRate}
        </motion.div>
        <p className="text-sm text-white/80 mb-4">BPM during video chat</p>
        <button
          onClick={() => setSyncing(!syncing)}
          className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors text-sm"
        >
          {syncing ? 'Stop Monitoring' : 'Start Monitoring'}
        </button>
      </div>
    </div>
  );
};

// Main Dashboard Component
export default function Dashboard() {
  const router = useRouter();
  const [activeDome, setActiveDome] = useState<DomeType>('connect');
  const [showProfileComplete, setShowProfileComplete] = useState(true);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');
  }, []);

  const recentMatches = [
    { id: 1, name: 'David', age: 32, photo: 'https://i.pravatar.cc/300?img=33', message: 'Dog park this weekend?', time: '2h ago', verified: true },
    { id: 2, name: 'Michael', age: 30, photo: 'https://i.pravatar.cc/300?img=12', message: 'That hiking trail looks amazing!', time: '5h ago', verified: true },
    { id: 3, name: 'James', age: 34, photo: 'https://i.pravatar.cc/300?img=68', message: 'Just matched!', time: 'Just now', isNew: true, verified: false }
  ];

  const todaysPicks = [
    { id: 1, name: 'Sarah', age: 28, photo: 'https://i.pravatar.cc/600?img=1', match: 94, location: '2 miles away', prompt: 'I\'m looking for someone who can make me laugh and isn\'t afraid of deep conversations over wine', verified: true, audioUrl: '/audio/sarah.mp3' },
    { id: 2, name: 'Emma', age: 26, photo: 'https://i.pravatar.cc/600?img=5', match: 91, location: '5 miles away', prompt: 'Perfect Sunday: Farmers market, cooking together, then getting lost in a good documentary', verified: true, audioUrl: '/audio/emma.mp3' },
    { id: 3, name: 'Olivia', age: 31, photo: 'https://i.pravatar.cc/600?img=9', match: 87, location: '7 miles away', prompt: 'I geek out on true crime podcasts and perfectly organized spreadsheets', verified: false, audioUrl: '/audio/olivia.mp3' }
  ];

  const currentDome = domes.find(d => d.id === activeDome)!;

  return (
    <div className="min-h-screen bg-domeo-gray-50 pb-16 md:pb-0">
      {/* Header */}
      <header className="bg-white border-b border-domeo-gray-200 sticky top-0 z-40">
        <div className="px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <Logo size="xs" theme="dark" linkToHome={false} />

            <nav className="hidden md:flex items-center gap-8">
              {domes.map((dome) => (
                <button
                  key={dome.id}
                  onClick={() => {
                    setActiveDome(dome.id);
                    // Route to appropriate dome page
                    if (dome.id === 'professional') {
                      router.push('/professional');
                    } else if (dome.id === 'social') {
                      router.push('/social');
                    } else if (dome.id === 'explore') {
                      router.push('/explore');
                    } else if (dome.id === 'private') {
                      router.push('/private');
                    } else {
                      // Stay on dashboard for connect
                      router.push('/dashboard');
                    }
                  }}
                  className={`flex flex-col items-center gap-1 transition-all ${
                    activeDome === dome.id ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                  }`}
                >
                  <span className={activeDome === dome.id ? dome.color : 'text-domeo-gray-600'}>
                    {dome.icon}
                  </span>
                  <span className="text-[10px] font-medium text-domeo-gray-600">
                    {dome.name}
                  </span>
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button className="p-2 text-domeo-gray-500 hover:text-domeo-gray-700 md:block hidden">
                <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="16" cy="16" r="14" stroke="currentColor"/>
                  <path d="M16 12V16M16 20H16.01" stroke="currentColor" strokeLinecap="round"/>
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-domeo-gray-300 flex items-center justify-center text-sm font-medium text-domeo-gray-700">
                MC
              </button>
            </div>
          </div>
        </div>

        {activeDome === 'connect' && (
          <div className="px-4 md:px-6 py-2 bg-pink-50 border-t border-pink-100">
            <div className="flex items-center gap-2 text-xs text-domeo-gray-600">
              <svg className="w-4 h-4" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="16" cy="16" r="14" stroke="currentColor"/>
                <path d="M16 12V16M16 20H16.01" stroke="currentColor" strokeLinecap="round"/>
              </svg>
              <span>Your dating profile is separate from other domes</span>
              <Link href="/settings" className="ml-auto text-domeo-accent hover:underline">
                Privacy settings →
              </Link>
            </div>
          </div>
        )}

        <div className="md:hidden px-4 pb-3 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2">
            {domes.map((dome) => (
              <button
                key={dome.id}
                onClick={() => {
                  setActiveDome(dome.id);
                  // Route to appropriate dome page
                  if (dome.id === 'professional') {
                    router.push('/professional');
                  } else if (dome.id === 'social') {
                    router.push('/social');
                  } else if (dome.id === 'explore') {
                    router.push('/explore');
                  } else if (dome.id === 'private') {
                    router.push('/private');
                  } else {
                    // Stay on dashboard for connect
                    router.push('/dashboard');
                  }
                }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs whitespace-nowrap transition-all ${
                  activeDome === dome.id
                    ? `bg-gradient-to-r ${dome.gradient} text-white`
                    : 'bg-white border border-domeo-gray-200 text-domeo-gray-600'
                }`}
              >
                {dome.icon}
                <span>{dome.name}</span>
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="md:flex">
        {/* Sidebar */}
        <aside className="hidden md:block w-80 bg-white border-r border-domeo-gray-200 min-h-[calc(100vh-73px)]">
          <div className="p-6 space-y-8">
            {showProfileComplete && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative"
              >
                <button
                  onClick={() => setShowProfileComplete(false)}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-domeo-gray-100 rounded-full flex items-center justify-center hover:bg-domeo-gray-200 transition-colors"
                >
                  <svg className="w-3 h-3" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                    <path d="M8 8L24 24M8 24L24 8"/>
                  </svg>
                </button>
                
                <h3 className="font-medium text-domeo-black mb-4">Complete Your Profile</h3>
                <div className="space-y-3 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                        <path d="M8 16L14 22L24 10"/>
                      </svg>
                    </div>
                    <span className="text-sm text-domeo-gray-600">Verified identity</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-domeo-gray-100 flex items-center justify-center text-xs font-medium">
                      4/6
                    </div>
                    <span className="text-sm text-domeo-gray-600">Add 2 more photos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-domeo-gray-100 flex items-center justify-center">
                      <span className="text-xs">!</span>
                    </div>
                    <span className="text-sm text-domeo-gray-600">Write your bio</span>
                  </div>
                </div>
                <Link href="/profile/edit">
                  <button 
                    className="w-full py-3 bg-domeo-black text-white text-xs font-medium uppercase tracking-wider rounded-lg hover:bg-domeo-charcoal transition-colors"
                  >
                    Complete Profile
                  </button>
                </Link>
              </motion.div>
            )}

            <DomeKarma />
            <CrossDomeSynergy userId="current-user" />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8">
          <div className="max-w-6xl mx-auto space-y-8">
            
            {/* EXPLORE DOME LAYOUT */}
            {activeDome === 'explore' && (
              <>
                {/* Explore Header */}
                <div className="text-center md:text-left">
                  <h1 className="text-2xl md:text-3xl font-light text-domeo-black mb-2">
                    Explore Your Boundaries
                  </h1>
                  <p className="text-domeo-gray-600">
                    Safe space for ENM, poly, and alternative relationships
                  </p>
                </div>

                {/* Safety First Banner */}
                <motion.div 
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Consent & Communication Workshop</h3>
                      <p className="text-white/80 text-sm">Tomorrow at 7PM • Virtual Event</p>
                    </div>
                    <button className="px-6 py-3 bg-white/20 backdrop-blur rounded-lg hover:bg-white/30 transition-colors">
                      RSVP Free
                    </button>
                  </div>
                </motion.div>

                {/* Experience Level Selector */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Your Experience Level</h3>
                  <div className="grid grid-cols-4 gap-4">
                    {['Curious', 'Beginner', 'Experienced', 'Expert'].map((level) => (
                      <button
                        key={level}
                        className="p-4 border-2 border-purple-200 rounded-xl hover:border-purple-500 hover:bg-purple-50 transition-all text-center"
                      >
                        <span className="text-2xl mb-2 block">
                          {level === 'Curious' ? '🌱' : level === 'Beginner' ? '🌿' : level === 'Experienced' ? '🌳' : '🏔️'}
                        </span>
                        <span className="text-sm font-medium text-gray-700">{level}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Explore Connections Grid */}
                <section>
                  <h2 className="text-xl font-medium text-gray-900 mb-6">Explore Connections</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Couples Profile */}
                    <motion.div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer">
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
                    </motion.div>

                    {/* Solo Poly Profile */}
                    <motion.div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer">
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
                    </motion.div>

                    {/* Community Event */}
                    <motion.div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-6 hover:shadow-xl transition-all cursor-pointer">
                      <div className="text-center">
                        <span className="text-5xl mb-4 block">🎭</span>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Poly Munch</h3>
                        <p className="text-sm text-gray-600 mb-4">Monthly community meetup</p>
                        <div className="space-y-2 text-sm text-gray-700">
                          <p>📅 First Sunday</p>
                          <p>👥 20-30 attendees</p>
                          <p>🏷️ Casual & friendly</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </section>

                {/* Educational Resources */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Learning Paths</h3>
                    <div className="space-y-3">
                      {[
                        { title: 'ENM 101', progress: 100, icon: '📚' },
                        { title: 'Communication Skills', progress: 60, icon: '💬' },
                        { title: 'Jealousy Management', progress: 30, icon: '💚' },
                        { title: 'Boundary Setting', progress: 0, icon: '🛡️' }
                      ].map((course) => (
                        <div key={course.title} className="flex items-center gap-4">
                          <span className="text-2xl">{course.icon}</span>
                          <div className="flex-1">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium text-gray-700">{course.title}</span>
                              <span className="text-xs text-gray-500">{course.progress}%</span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                              <motion.div 
                                className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${course.progress}%` }}
                                transition={{ duration: 1 }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <VoiceRooms />
                </section>
              </>
            )}

            {/* SOCIAL DOME LAYOUT */}
            {activeDome === 'social' && (
              <>
                {/* Social Header */}
                <div className="text-center md:text-left">
                  <h1 className="text-2xl md:text-3xl font-light text-domeo-black mb-2">
                    Find Your Tribe
                  </h1>
                  <p className="text-domeo-gray-600">
                    Connect with like-minded people for friendship and activities
                  </p>
                </div>

                {/* Activity Mood Matcher */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">What are you in the mood for?</h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {[
                      { mood: 'Active', emoji: '🏃‍♀️', color: 'from-orange-500 to-red-500' },
                      { mood: 'Creative', emoji: '🎨', color: 'from-purple-500 to-pink-500' },
                      { mood: 'Social', emoji: '🎉', color: 'from-blue-500 to-cyan-500' },
                      { mood: 'Chill', emoji: '☕', color: 'from-green-500 to-teal-500' },
                      { mood: 'Adventure', emoji: '🗺️', color: 'from-yellow-500 to-orange-500' }
                    ].map((activity) => (
                      <button
                        key={activity.mood}
                        className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:scale-105 transition-transform"
                      >
                        <span className="text-4xl mb-2 block">{activity.emoji}</span>
                        <span className="text-sm font-medium text-gray-700">{activity.mood}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Happening This Week */}
                <section>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-medium text-gray-900">Happening This Week</h2>
                    <Link href="/social/events" className="text-sm text-blue-600 hover:text-blue-700">
                      View calendar →
                    </Link>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Event Cards */}
                    {[
                      { 
                        day: 'Tonight', 
                        title: 'Board Game Cafe', 
                        time: '7:00 PM', 
                        attendees: 8, 
                        spots: 2,
                        host: { name: 'Maya', verified: true },
                        tags: ['Games', 'Casual', 'Beginners Welcome']
                      },
                      { 
                        day: 'Tomorrow', 
                        title: 'Sunset Hike', 
                        time: '5:30 PM', 
                        attendees: 12, 
                        spots: 0,
                        host: { name: 'Alex', verified: true },
                        tags: ['Outdoor', 'Moderate', 'Dogs Welcome']
                      },
                      { 
                        day: 'Saturday', 
                        title: 'Brunch Club', 
                        time: '11:00 AM', 
                        attendees: 6, 
                        spots: 4,
                        host: { name: 'Jordan', verified: false },
                        tags: ['Food', 'Social', 'LGBTQ+ Friendly']
                      }
                    ].map((event, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer"
                      >
                        <div className="h-32 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                          <div className="text-white text-center">
                            <p className="text-sm opacity-80">{event.day}</p>
                            <p className="text-2xl font-medium">{event.time}</p>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="font-medium text-gray-900 mb-2">{event.title}</h3>
                          <div className="flex items-center gap-2 mb-3">
                            <div className="flex items-center gap-1">
                              <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                              <span className="text-sm text-gray-700">{event.host.name}</span>
                              {event.host.verified && (
                                <svg className="w-4 h-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                                </svg>
                              )}
                            </div>
                          </div>
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
                              <span className="text-sm font-medium text-gray-500">Full</span>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </section>

                {/* Your Groups */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Your Groups</h3>
                    <div className="space-y-4">
                      {[
                        { name: 'NYC Hikers', members: 234, activity: 'New trail posted', emoji: '🥾' },
                        { name: 'Book Lovers', members: 89, activity: 'Next book: "Atomic Habits"', emoji: '📚' },
                        { name: 'Foodies Unite', members: 156, activity: 'Restaurant rec thread', emoji: '🍜' }
                      ].map((group) => (
                        <div key={group.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{group.emoji}</span>
                            <div>
                              <p className="font-medium text-gray-900">{group.name}</p>
                              <p className="text-sm text-gray-600">{group.members} members</p>
                            </div>
                          </div>
                          <p className="text-xs text-blue-600">{group.activity}</p>
                        </div>
                      ))}
                    </div>
                    <button className="mt-4 w-full py-2 text-sm text-blue-600 hover:text-blue-700 font-medium">
                      Discover More Groups →
                    </button>
                  </div>

                  {/* Friend Suggestions */}
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-6 text-white">
                    <h3 className="text-lg font-medium mb-4">Friend Suggestions</h3>
                    <div className="space-y-3">
                      {[
                        { name: 'Chris', mutual: 5, interests: 'Hiking, Photography' },
                        { name: 'Taylor', mutual: 3, interests: 'Books, Coffee' },
                        { name: 'Morgan', mutual: 8, interests: 'Board games, Movies' }
                      ].map((friend) => (
                        <div key={friend.name} className="flex items-center justify-between p-3 bg-white/10 rounded-lg backdrop-blur">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full"></div>
                            <div>
                              <p className="font-medium">{friend.name}</p>
                              <p className="text-xs text-white/80">{friend.mutual} mutual friends</p>
                            </div>
                          </div>
                          <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </>
            )}

            {/* PROFESSIONAL DOME LAYOUT */}
            {activeDome === 'professional' && (
              <>
                {/* Professional Header */}
                <div className="text-center md:text-left mb-8">
                  <h1 className="text-2xl md:text-3xl font-light text-domeo-black mb-2">
                    Expand Your Network
                  </h1>
                  <p className="text-domeo-gray-600">
                    Connect with professionals, find opportunities, grow together
                  </p>
                </div>

                {/* Professional Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                  {[
                    { label: 'Profile Views', value: '127', change: '+12%', icon: '👁️' },
                    { label: 'Connections', value: '45', change: '+3', icon: '🤝' },
                    { label: 'Opportunities', value: '8', change: 'New', icon: '💼' },
                    { label: 'Network Score', value: '92', change: 'High', icon: '📈' }
                  ].map((stat) => (
                    <motion.div
                      key={stat.label}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white rounded-xl p-6 shadow-sm text-center"
                    >
                      <span className="text-3xl mb-2 block">{stat.icon}</span>
                      <p className="text-2xl font-light text-gray-900">{stat.value}</p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                      <p className="text-xs text-green-600 mt-1">{stat.change}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Featured Opportunities */}
                <section className="mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-medium text-gray-900">Featured Opportunities</h2>
                    <Link href="/professional/opportunities" className="text-sm text-gray-700 hover:text-gray-900">
                      View all →
                    </Link>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        type: 'Collaboration',
                        title: 'Looking for Technical Co-founder',
                        company: 'AI Startup',
                        poster: 'Sarah Chen',
                        tags: ['Equity', 'Full-time', 'AI/ML'],
                        applicants: 12,
                        hot: true
                      },
                      {
                        type: 'Mentorship',
                        title: 'Product Design Mentor Available',
                        company: 'Personal',
                        poster: 'David Kim',
                        tags: ['1-on-1', 'Portfolio Review', 'Free'],
                        applicants: 8,
                        hot: false
                      }
                    ].map((opp, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all cursor-pointer border border-gray-100"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                                {opp.type}
                              </span>
                              {opp.hot && (
                                <span className="px-3 py-1 bg-red-100 text-red-600 text-xs rounded-full font-medium">
                                  🔥 Hot
                                </span>
                              )}
                            </div>
                            <h3 className="font-medium text-gray-900 mb-1">{opp.title}</h3>
                            <p className="text-sm text-gray-600">{opp.company}</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {opp.tags.map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                            <span className="text-sm text-gray-700">{opp.poster}</span>
                          </div>
                          <span className="text-sm text-gray-500">{opp.applicants} interested</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </section>

                {/* Network Insights & Skills */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Network Map */}
                  <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl p-6 text-white">
                    <h3 className="text-lg font-medium mb-4">Your Network Map</h3>
                    <div className="relative h-48 flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 border-2 border-white/20 rounded-full flex items-center justify-center">
                          <div className="w-20 h-20 border-2 border-white/40 rounded-full flex items-center justify-center">
                            <div className="w-8 h-8 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-0 left-1/4 w-4 h-4 bg-blue-400 rounded-full"></div>
                      <div className="absolute bottom-0 right-1/4 w-4 h-4 bg-green-400 rounded-full"></div>
                      <div className="absolute top-1/2 right-0 w-4 h-4 bg-purple-400 rounded-full"></div>
                    </div>
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-white/80">Direct connections</span>
                        <span className="font-medium">45</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/80">2nd degree</span>
                        <span className="font-medium">892</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/80">Industries</span>
                        <span className="font-medium">12</span>
                      </div>
                    </div>
                  </div>

                  {/* Skills Exchange */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Skills Exchange</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">You Offer:</p>
                        <div className="flex flex-wrap gap-2">
                          {['UX Design', 'Product Strategy', 'User Research'].map((skill) => (
                            <span key={skill} className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">You Need:</p>
                        <div className="flex flex-wrap gap-2">
                          {['Marketing', 'Sales', 'Fundraising'].map((skill) => (
                            <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button className="w-full py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
                        Find Skill Matches →
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* PRIVATE DOME LAYOUT */}
            {activeDome === 'private' && (
              <>
                {/* Private Header */}
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L4 7V12C4 16.5 6.5 19.5 12 21C17.5 19.5 20 16.5 20 12V7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                      <path d="M12 11V14M12 8V8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h1 className="text-2xl md:text-3xl font-light text-domeo-black mb-2">
                    Private Mode
                  </h1>
                  <p className="text-domeo-gray-600 max-w-md mx-auto">
                    Complete anonymity. Enhanced privacy. Your secrets are safe here.
                  </p>
                </div>

                {/* Privacy Status */}
                <div className="max-w-2xl mx-auto">
                  <div className="bg-gray-900 text-white rounded-2xl p-8 mb-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-medium">Privacy Status</h3>
                      <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full">
                        Active
                      </span>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                        <div className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                          </svg>
                          <span>Anonymous Profile Active</span>
                        </div>
                        <span className="text-sm text-white/60">No real name shown</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                        <div className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                          </svg>
                          <span>Location Hidden</span>
                        </div>
                        <span className="text-sm text-white/60">Using VPN relay</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                        <div className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                          </svg>
                          <span>Auto-Delete Messages</span>
                        </div>
                        <span className="text-sm text-white/60">After 24 hours</span>
                      </div>
                    </div>
                  </div>

                  {/* Anonymous Connections */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Anonymous Connections</h3>
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="none">
                          <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <p className="text-gray-600 mb-6">Start browsing anonymously</p>
                      <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                        Browse Private Profiles
                      </button>
                    </div>
                  </div>

                  {/* Privacy Tools */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <button className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all text-left">
                      <span className="text-3xl mb-3 block">🔐</span>
                      <h4 className="font-medium text-gray-900 mb-1">Encrypted Chat</h4>
                      <p className="text-sm text-gray-600">End-to-end encryption for all messages</p>
                    </button>
                    
                    <button className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all text-left">
                      <span className="text-3xl mb-3 block">⏱️</span>
                      <h4 className="font-medium text-gray-900 mb-1">Timed Messages</h4>
                      <p className="text-sm text-gray-600">Messages auto-delete after set time</p>
                    </button>
                    
                    <button className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all text-left">
                      <span className="text-3xl mb-3 block">👻</span>
                      <h4 className="font-medium text-gray-900 mb-1">Ghost Mode</h4>
                      <p className="text-sm text-gray-600">Browse without leaving any trace</p>
                    </button>
                    
                    <button className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all text-left">
                      <span className="text-3xl mb-3 block">🚫</span>
                      <h4 className="font-medium text-gray-900 mb-1">Panic Button</h4>
                      <p className="text-sm text-gray-600">Instantly hide app and clear data</p>
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* CONNECT DOME LAYOUT (Default) */}
            {activeDome === 'connect' && (
              <>
                {/* Connect Header */}
                <div className="text-center md:text-left">
                  <h1 className="text-2xl md:text-3xl font-light text-domeo-black mb-2">
                    {greeting}, Maya
                  </h1>
                  <p className="text-domeo-gray-600">
                    Here's what's happening in your domes today
                  </p>
                </div>

                {/* Today's Picks - Main Focus */}
                <section>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl md:text-2xl font-light text-domeo-black">Today's Picks</h2>
                    <Link href="/discover" className="text-sm text-domeo-accent hover:text-domeo-accent/80">
                      See all →
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {todaysPicks.map((pick, index) => (
                      <motion.div
                        key={pick.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer"
                        onClick={() => router.push('/discover')}
                      >
                        <div className="relative aspect-[3/4]">
                          <img 
                            src={pick.photo} 
                            alt={pick.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                          
                          <AICompatibilityEngine match={pick} />
                          <VoiceIntroPlayer audioUrl={pick.audioUrl} name={pick.name} />
                          
                          {/* Subtle AI Indicator */}
                          <div className="absolute top-3 left-3 w-6 h-6 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
                              <path d="M16 4L20 12L28 16L20 20L16 28L12 20L4 16L12 12L16 4Z" stroke="currentColor"/>
                              <circle cx="16" cy="16" r="2" fill="currentColor"/>
                            </svg>
                          </div>
                          
                          <div className="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white text-sm font-bold rounded-full">
                            {pick.match}% match
                          </div>

                          <div className="absolute bottom-20 left-0 right-0 p-6">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-white">
                                {pick.name}, {pick.age}
                              </h3>
                              {pick.verified && (
                                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                                  <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M8 16L14 22L24 10"/>
                                  </svg>
                                </div>
                              )}
                            </div>
                            <p className="text-sm text-white/80 mb-3">{pick.location}</p>
                            <p className="text-sm text-white/90 line-clamp-2">"{pick.prompt}"</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </section>

                {/* Quick Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <MoodMatcher />
                  <LiveActivityMap />
                  <VoiceRooms />
                </div>

                {/* Recent Matches */}
                <section>
                  <h3 className="text-xl font-light text-domeo-black mb-4">Recent Matches</h3>
                  <div className="bg-white rounded-xl shadow-sm">
                    {recentMatches.map((match, index) => (
                      <motion.button
                        key={match.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => router.push(`/messages/${match.id}`)}
                        className="w-full flex items-center gap-4 p-4 hover:bg-domeo-gray-50 transition-colors border-b border-domeo-gray-100 last:border-0"
                      >
                        <div className="relative">
                          <img src={match.photo} alt={match.name} className="w-14 h-14 rounded-full object-cover" />
                          {match.isNew && (
                            <span className="absolute -top-1 -right-1 w-4 h-4 bg-domeo-accent rounded-full flex items-center justify-center">
                              <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
                                <path d="M16 4L20 12L28 16L20 20L16 28L12 20L4 16L12 12L16 4Z" fill="currentColor"/>
                              </svg>
                            </span>
                          )}
                        </div>
                        <div className="flex-1 text-left">
                          <div className="flex items-center gap-2">
                            <p className="font-medium text-domeo-black">{match.name}, {match.age}</p>
                            {match.verified && (
                              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                                <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M8 16L14 22L24 10"/>
                                </svg>
                              </div>
                            )}
                          </div>
                          <p className="text-sm text-domeo-gray-600">{match.message}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-domeo-gray-500">{match.time}</p>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </section>

                {/* Advanced Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <ARDatePreview match={todaysPicks[0]} />
                  <CompatibilityTimeline match={todaysPicks[0]} />
                  <SmartCalendar />
                  <BiometricSync />
                </div>
              </>
            )}
            
          </div>
        </main>
      </div>

      <MobileNav />
      <ConversationCoach />
    </div>
  );
} 