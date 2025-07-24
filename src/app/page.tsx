'use client';

import { useEffect } from 'react';
import Logo from '@/components/Logo';
import { cn } from '@/lib/utils';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-pink-200/30 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-200/30 rounded-full filter blur-3xl animate-float animate-delay-300"></div>
        </div>
        
        <div className="w-full max-w-5xl mx-auto text-center relative z-10">
          <div className="mb-12 opacity-0 animate-fade-in">
            <Logo size="xl" className="mx-auto" linkToHome={false} />
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-gray-900 tracking-tight leading-[0.9] mb-8 opacity-0 animate-fade-up animate-delay-200">
            Your Domes<br />
            <span className="gradient-text font-normal">
              Await
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 font-light max-w-3xl mx-auto mb-12 opacity-0 animate-fade-up animate-delay-400">
            One profile. Five communities. Endless authentic connections.
          </p>
          
          <div className="opacity-0 animate-fade-up animate-delay-600">
            <button className="px-12 py-5 text-lg bg-black text-white rounded-full font-medium btn-premium hover:scale-105 hover:shadow-2xl">
              Claim Founding Membership
            </button>
            <p className="mt-6 text-gray-600">
              <span className="text-green-600 font-semibold">3 months free</span> for founding members • Then $29/mo
            </p>
          </div>
        </div>
        

      </section>

      {/* Trust Indicators */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { 
                number: '5,000', 
                label: 'Founding members only',
                icon: '🎯'
              },
              { 
                number: '100%', 
                label: 'Verified profiles',
                icon: '✓'
              },
              { 
                number: '5', 
                label: 'Unique communities',
                icon: '🏠'
              },
              { 
                number: '2024', 
                label: 'Fresh start to dating',
                icon: '✨'
              }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="group animate-on-scroll transform transition-all duration-300 hover:scale-105"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center">
                  <div className="text-3xl mb-3 opacity-50 group-hover:opacity-100 transition-opacity">
                    {stat.icon}
                  </div>
                  <p className="text-5xl md:text-6xl font-light text-gray-900 mb-2 tracking-tight">
                    {stat.number}
                  </p>
                  <p className="text-sm md:text-base text-gray-600 font-normal">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-36 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-24 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              How Domeo Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlike apps that force you into one box, Domeo recognizes you're multifaceted. 
              One verified profile gives you access to five distinct communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {[
              {
                number: '1',
                title: 'Create One Profile',
                description: 'Verify once. No fake profiles, no catfishing. Just real people ready to connect authentically.'
              },
              {
                number: '2',
                title: 'Choose Your Domes',
                description: 'Dating? Friends? Professional? Join the communities that match your intentions.'
              },
              {
                number: '3',
                title: 'Connect Authentically',
                description: 'Be yourself in each space. Your connections in one dome stay private from others.'
              }
            ].map((step, index) => (
              <div key={index} className="text-center animate-on-scroll" style={{ transitionDelay: `${index * 200}ms` }}>
                <div className="relative group mx-auto w-24 h-24 mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="relative w-full h-full rounded-full flex items-center justify-center">
                    <span className="text-4xl font-light gradient-text">
                      {step.number}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-normal mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Five Domes Section */}
      <section className="py-36 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Five spaces for every side of you
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each dome is a curated community with its own culture and purpose.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
            {[
              {
                name: 'Connect',
                gradient: 'from-pink-400 to-rose-500',
                emoji: '💕',
                tagline: 'Date with intention',
                subtext: 'All orientations welcome',
                hoverColor: 'hover:text-pink-600'
              },
              {
                name: 'Explore',
                gradient: 'from-purple-400 to-indigo-500',
                emoji: '✨',
                tagline: 'Modern & Alternative',
                subtext: 'ENM • Poly • Kink-positive',
                hoverColor: 'hover:text-purple-600'
              },
              {
                name: 'Social',
                gradient: 'from-blue-400 to-cyan-500',
                emoji: '🤝',
                tagline: 'Find your tribe',
                subtext: 'Platonic connections only',
                hoverColor: 'hover:text-blue-600'
              },
              {
                name: 'Professional',
                gradient: 'from-slate-600 to-gray-800',
                emoji: '💼',
                tagline: 'Where ambition meets',
                subtext: 'Network with chemistry',
                hoverColor: 'hover:text-gray-700'
              },
              {
                name: 'Private',
                gradient: 'from-gray-800 to-black',
                emoji: '🔒',
                tagline: 'Your secrets, protected',
                subtext: 'Complete discretion',
                hoverColor: 'hover:text-gray-700'
              }
            ].map((dome, index) => (
              <div 
                key={index} 
                className="text-center group cursor-pointer animate-on-scroll"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-6">
                  <div className={cn(
                    "w-36 h-36 mx-auto rounded-full bg-gradient-to-br flex items-center justify-center",
                    "shadow-xl transform transition-all duration-300 dome-glow",
                    dome.gradient
                  )}>
                    <span className="text-6xl filter drop-shadow-lg">{dome.emoji}</span>
                  </div>
                </div>
                <h3 className={cn(
                  "text-xl font-medium mb-2 transition-colors",
                  dome.hoverColor
                )}>
                  {dome.name}
                </h3>
                <p className="text-gray-600 text-sm">{dome.tagline}</p>
                <p className="text-xs text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {dome.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-36 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light text-center text-gray-900 mb-24 animate-on-scroll">
            Dating apps weren't built for real life
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-gray-50 rounded-3xl p-10 animate-on-scroll hover-lift">
              <h3 className="text-2xl font-normal mb-8 text-gray-500">The Old Way</h3>
              <div className="space-y-6">
                {[
                  { emoji: '😕', title: 'Everyone in one feed', desc: 'Hookups next to marriages, confusing for everyone' },
                  { emoji: '🎭', title: 'Fake profiles everywhere', desc: 'Catfishing, bots, and photo filters' },
                  { emoji: '👻', title: 'No privacy control', desc: 'Your ex, boss, and mom can all find you' },
                  { emoji: '💸', title: 'Hidden fees and tricks', desc: 'Pay extra for basic features' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">{item.emoji}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-10 animate-on-scroll hover-lift">
              <h3 className="text-2xl font-normal mb-8">The Domeo Way</h3>
              <div className="space-y-6">
                {[
                  { emoji: '🎯', title: 'Five distinct communities', desc: 'Clear intentions, compatible matches only' },
                  { emoji: '✅', title: '100% real people', desc: 'AI + human verification, no exceptions' },
                  { emoji: '🔒', title: 'Complete privacy control', desc: 'Your domes stay separate, your business stays yours' },
                  { emoji: '💎', title: 'Transparent pricing', desc: 'One price, all features, no surprises' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">{item.emoji}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Everyone Welcome / Everyone Verified */}
      <section className="py-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-white py-36 px-12 md:px-24 animate-on-scroll group hover:bg-gray-50 transition-colors duration-500">
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight group-hover:scale-105 transition-transform duration-500">
              Everyone<br />Welcome
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg mb-8 group-hover:text-gray-700 transition-colors duration-500">
              All orientations, all genders, all relationship styles. Your authentic self belongs here.
            </p>
            <div className="flex flex-wrap gap-3">
              {['LGBTQ+ Inclusive', 'Non-binary Friendly', 'Poly & ENM Welcome'].map((tag, index) => (
                <span 
                  key={tag} 
                  className="text-sm bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 hover:scale-105 transition-all duration-300 cursor-pointer"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-white py-36 px-12 md:px-24 animate-on-scroll group hover:bg-gray-50 transition-colors duration-500">
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight group-hover:scale-105 transition-transform duration-500">
              Everyone<br />Verified
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg mb-8 group-hover:text-gray-700 transition-colors duration-500">
              AI and human review for every member. No exceptions. Connect with confidence.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Photo Verification', 'ID Confirmation', '0% Fake Profiles'].map((tag, index) => (
                <span 
                  key={tag} 
                  className="text-sm bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 hover:scale-105 transition-all duration-300 cursor-pointer"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-36 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light text-center text-gray-900 mb-24 animate-on-scroll">
            Real connections from real members
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                quote: "Found my partner in Connect and my hiking crew in Social. One profile, two life-changing connections.",
                author: "Alex, 31",
                location: "San Francisco"
              },
              {
                quote: "Professional dome helped me network while dating. Met my co-founder and my girlfriend in the same month.",
                author: "Sarah, 28", 
                location: "Austin"
              },
              {
                quote: "Finally found a community that understands ENM. The Explore dome changed everything for me.",
                author: "Jordan, 34",
                location: "Portland"
              }
            ].map((testimonial, index) => (
              <div key={index} className="text-center animate-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="bg-gray-50 rounded-2xl p-8 mb-6 hover-lift">
                  <p className="text-xl font-light text-gray-800 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
                <p className="text-gray-600">
                  <span className="font-medium">{testimonial.author}</span> • {testimonial.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founding Member Section */}
      <section className="py-36 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-12 text-white text-center relative overflow-hidden animate-on-scroll">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/20"></div>
              <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/20"></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full mb-6">
                <span className="text-2xl">🎉</span>
                <span className="font-medium">Founding Member Special</span>
              </div>
              
              <h3 className="text-3xl font-light mb-6">Be part of something new</h3>
              <div className="text-6xl md:text-7xl font-light mb-4">3 Months Free</div>
              <p className="text-xl opacity-90 mb-8">Join the first 5,000 members shaping the future of connection</p>
              
              {/* Progress Bar */}
              <div className="max-w-md mx-auto mb-8">
                <div className="flex justify-between text-sm mb-2 opacity-80">
                  <span>2,153 members joined</span>
                  <span>2,847 spots left</span>
                </div>
                <div className="h-4 bg-white/30 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-white rounded-full transition-all duration-1000" 
                    style={{ width: '43%' }}
                  ></div>
                </div>
              </div>
              
              <button className="px-12 py-5 bg-white text-gray-900 rounded-full text-lg font-medium hover-lift">
                Claim Your Spot
              </button>
              
              <p className="mt-6 text-sm opacity-80">
                No credit card required • $29/month after trial • Cancel anytime
              </p>
            </div>
          </div>
          
          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: '🎯', title: 'Shape the platform', desc: 'Your feedback directly influences new features' },
              { icon: '⚡', title: 'First access', desc: 'Be first in your city when we launch' },
              { icon: '💎', title: 'Exclusive perks', desc: 'Special badge and premium features' }
            ].map((benefit, index) => (
              <div key={index} className="text-center animate-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h4 className="font-medium mb-2">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-36 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 animate-on-scroll">
            Your people are waiting
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto animate-on-scroll">
            In a world of endless swiping, find something real. Join 2,153 founding members building a better way to connect.
          </p>
          
          <div className="animate-on-scroll">
            <button className="px-12 py-5 text-lg bg-black text-white rounded-full font-medium btn-premium hover:scale-105 hover:shadow-2xl">
              Start Free for 3 Months
            </button>
            
            <p className="mt-8 text-pink-500 font-medium animate-pulse">
              Only 2,847 founding memberships remaining
            </p>
          </div>
          
          {/* Team Message */}
          <div className="mt-24 pt-24 border-t border-gray-200 animate-on-scroll">
            <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
              "We're building Domeo because we believe everyone deserves authentic connections.
              Not just swipes. Not just matches. Real people, real connections."
            </p>
            <p className="text-sm text-gray-500">— The Domeo Team</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1">
              <Logo theme="light" size="sm" className="mb-4" />
              <p className="text-gray-400 text-sm">
                One profile. Five communities.<br />
                Endless authentic connections.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition">The Domes</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Success Stories</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Press</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Trust & Safety</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Safety Center</a></li>
                <li><a href="#" className="hover:text-white transition">Community Guidelines</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-wrap items-center justify-between">
            <p className="text-sm text-gray-400">© 2024 Domeo. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>🔒 256-bit SSL</span>
              <span>SOC 2 Certified</span>
              <span>CCPA Compliant</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
