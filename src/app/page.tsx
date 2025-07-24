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
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 md:px-12 pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden">
        {/* Ultra-subtle background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 -left-96 w-[800px] h-[800px] bg-pink-200/[0.08] rounded-full filter blur-[150px]"></div>
          <div className="absolute bottom-1/3 -right-96 w-[800px] h-[800px] bg-purple-200/[0.08] rounded-full filter blur-[150px]"></div>
        </div>
        
        <div className="w-full max-w-5xl mx-auto text-center relative z-10">
          <div className="mb-20 opacity-0 animate-fade-in">
            <Logo size="xl" className="mx-auto" linkToHome={false} />
          </div>
          
          <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[7rem] 2xl:text-[8rem] font-extralight text-gray-900 tracking-[-0.04em] leading-[0.85] mb-8 md:mb-12 opacity-0 animate-fade-up animate-delay-200">
            Your Domes<br />
            <span className="font-light bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block bg-[length:200%_auto] animate-gradient">
              Await
            </span>
          </h1>
          
          <p className="text-[16px] sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] text-gray-600 font-light max-w-3xl mx-auto mb-12 md:mb-16 leading-[1.5] opacity-0 animate-fade-up animate-delay-400 tracking-[-0.01em]">
            One profile. Five communities. Endless authentic connections.
          </p>
          
          <div className="opacity-0 animate-fade-up animate-delay-600">
            <button className="group relative inline-flex items-center justify-center px-8 md:px-16 py-4 md:py-[22px] bg-gray-900 text-white rounded-full font-medium text-[16px] md:text-[17px] overflow-hidden transition-all duration-500 hover:bg-gray-800 transform hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98] min-h-[44px] md:min-h-0">
              <span className="relative z-10 tracking-[-0.01em]">
                Claim Founding Membership
              </span>
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 -top-2 -bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 group-hover:animate-shimmer"></div>
              </div>
            </button>
            <p className="mt-8 text-[15px] text-gray-600 font-light tracking-[-0.01em]">
              <span className="text-green-600 font-medium">3 months free</span> for founding members • Then $29/mo
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-white via-gray-50/20 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
            {[
              { 
                number: '5,000', 
                label: 'FOUNDING MEMBERS ONLY',
                icon: '🎯'
              },
              { 
                number: '100%', 
                label: 'VERIFIED PROFILES',
                icon: '✓'
              },
              { 
                number: '5', 
                label: 'UNIQUE COMMUNITIES',
                icon: '🏠'
              },
              { 
                number: '2024', 
                label: 'FRESH START TO DATING',
                icon: '✨'
              }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center group animate-on-scroll relative"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"></div>
                <div className="relative">
                  <div className="text-2xl mb-6 opacity-30 group-hover:opacity-60 transition-all duration-500 transform group-hover:scale-110">
                    {stat.icon}
                  </div>
                  <p className="text-[3.5rem] md:text-[4rem] font-extralight text-gray-900 mb-4 tracking-[-0.03em] transition-all duration-300">
                    {stat.number}
                  </p>
                  <p className="text-[11px] text-gray-500 font-medium tracking-[0.15em] uppercase">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-24 animate-on-scroll">
            <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-extralight text-gray-900 mb-6 tracking-[-0.04em] leading-[0.9]">
              How Domeo Works
            </h2>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] text-gray-600 font-light leading-[1.6] tracking-[-0.01em] max-w-3xl mx-auto">
              Unlike apps that force you into one box, Domeo recognizes you're multifaceted.<br />
              One verified profile gives you access to five distinct communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
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
              <div key={index} className="text-center animate-on-scroll group" style={{ transitionDelay: `${index * 200}ms` }}>
                <div className="relative mx-auto w-28 h-28 mb-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-100/80 to-purple-100/80 rounded-full transform group-hover:scale-110 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-200/40 to-purple-200/40 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative w-full h-full rounded-full flex items-center justify-center">
                    <span className="text-[2.5rem] font-extralight bg-gradient-to-br from-pink-500 to-purple-600 bg-clip-text text-transparent">
                      {step.number}
                    </span>
                  </div>
                </div>
                <h3 className="text-[22px] font-medium mb-4 tracking-[-0.01em]">{step.title}</h3>
                <p className="text-[15px] text-gray-600 font-light leading-relaxed tracking-[-0.01em] max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Five Domes Section */}
      <section className="py-20 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-24 animate-on-scroll">
            <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-extralight text-gray-900 mb-6 tracking-[-0.04em] leading-[0.9]">
              Five spaces for every side of you
            </h2>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] text-gray-600 font-light leading-[1.6] tracking-[-0.01em] max-w-3xl mx-auto">
              Each dome is a curated community with its own culture and purpose.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-12">
            {[
              {
                name: 'Connect',
                gradient: 'from-pink-400/90 to-rose-500/90',
                emoji: '💕',
                tagline: 'Date with intention',
                subtext: 'All orientations welcome'
              },
              {
                name: 'Explore',
                gradient: 'from-purple-400/90 to-indigo-500/90',
                emoji: '✨',
                tagline: 'Modern & Alternative',
                subtext: 'ENM • Poly • Kink-positive'
              },
              {
                name: 'Social',
                gradient: 'from-blue-400/90 to-cyan-500/90',
                emoji: '🤝',
                tagline: 'Find your tribe',
                subtext: 'Platonic connections only'
              },
              {
                name: 'Professional',
                gradient: 'from-slate-600/90 to-gray-800/90',
                emoji: '💼',
                tagline: 'Where ambition meets',
                subtext: 'Network with chemistry'
              },
              {
                name: 'Private',
                gradient: 'from-gray-800/90 to-black/90',
                emoji: '🔒',
                tagline: 'Your secrets, protected',
                subtext: 'Complete discretion'
              }
            ].map((dome, index) => (
              <div 
                key={index} 
                className="text-center group cursor-pointer animate-on-scroll"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-8">
                  {/* Subtle glow on hover */}
                  <div className={`absolute -inset-6 bg-gradient-to-br ${dome.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-all duration-700 rounded-full`}></div>
                  
                  {/* Refined dome circle */}
                  <div className={`relative w-32 h-32 md:w-36 md:h-36 mx-auto rounded-full bg-gradient-to-br ${dome.gradient} flex items-center justify-center shadow-xl transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl`}>
                    <span className="text-5xl md:text-6xl filter drop-shadow-md transform transition-all duration-500 group-hover:scale-110">
                      {dome.emoji}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-lg md:text-xl font-medium mb-2 transition-colors duration-300 group-hover:text-gray-700">
                  {dome.name}
                </h3>
                <p className="text-sm text-gray-600 font-light mb-2">{dome.tagline}</p>
                <p className="text-xs text-gray-400 font-light opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-1 group-hover:translate-y-0">
                  {dome.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-extralight text-center text-gray-900 mb-6 tracking-[-0.04em] leading-[0.9] animate-on-scroll">
            Dating apps weren't built for real life
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12 animate-on-scroll hover-lift border border-gray-100">
              <h3 className="text-2xl font-light mb-8 text-gray-600">The Old Way</h3>
              <div className="space-y-6">
                {[
                  { emoji: '😕', title: 'Everyone in one feed', desc: 'Hookups next to marriages, confusing for everyone' },
                  { emoji: '🎭', title: 'Fake profiles everywhere', desc: 'Catfishing, bots, and photo filters' },
                  { emoji: '👻', title: 'No privacy control', desc: 'Your ex, boss, and mom can all find you' },
                  { emoji: '💸', title: 'Hidden fees and tricks', desc: 'Pay extra for basic features' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center flex-shrink-0 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-red-100">
                      <span className="text-xl">{item.emoji}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-1">{item.title}</p>
                      <p className="text-sm text-gray-600 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 via-pink-50/50 to-purple-50 rounded-3xl p-8 md:p-12 animate-on-scroll hover-lift border border-purple-100">
              <h3 className="text-2xl font-light mb-8 text-gray-900">The Domeo Way</h3>
              <div className="space-y-6">
                {[
                  { emoji: '🎯', title: 'Five distinct communities', desc: 'Clear intentions, compatible matches only' },
                  { emoji: '✅', title: '100% real people', desc: 'AI + human verification, no exceptions' },
                  { emoji: '🔒', title: 'Complete privacy control', desc: 'Your domes stay separate, your business stays yours' },
                  { emoji: '💎', title: 'Transparent pricing', desc: 'One price, all features, no surprises' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center flex-shrink-0 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-green-100">
                      <span className="text-xl">{item.emoji}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-1">{item.title}</p>
                      <p className="text-sm text-gray-600 font-light leading-relaxed">{item.desc}</p>
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
          <div className="bg-white py-20 md:py-36 px-6 md:px-12 lg:px-24 animate-on-scroll group hover:bg-gray-50 transition-colors duration-500">
            <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-extralight text-gray-900 mb-6 tracking-[-0.04em] leading-[0.9] group-hover:scale-105 transition-transform duration-500">
              Everyone<br />Welcome
            </h2>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] text-gray-600 font-light leading-[1.6] tracking-[-0.01em] max-w-lg mb-8 group-hover:text-gray-700 transition-colors duration-500">
              All orientations, all genders, all relationship styles. Your authentic self belongs here.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {['LGBTQ+ Inclusive', 'Non-binary Friendly', 'Poly & ENM Welcome'].map((tag) => (
                <span key={tag} className="text-[13px] bg-gray-100 hover:bg-gray-200 px-4 md:px-5 py-3 md:py-2.5 rounded-full font-medium tracking-wide transition-all duration-300 cursor-default min-h-[44px] md:min-h-0 flex items-center justify-center">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-white py-20 md:py-36 px-6 md:px-12 lg:px-24 animate-on-scroll group hover:bg-gray-50 transition-colors duration-500">
            <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-extralight text-gray-900 mb-6 tracking-[-0.04em] leading-[0.9] group-hover:scale-105 transition-transform duration-500">
              Everyone<br />Verified
            </h2>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] text-gray-600 font-light leading-[1.6] tracking-[-0.01em] max-w-lg mb-8 group-hover:text-gray-700 transition-colors duration-500">
              AI and human review for every member. No exceptions. Connect with confidence.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {['Photo Verification', 'ID Confirmation', '0% Fake Profiles'].map((tag) => (
                <span key={tag} className="text-[13px] bg-gray-100 hover:bg-gray-200 px-4 md:px-5 py-3 md:py-2.5 rounded-full font-medium tracking-wide transition-all duration-300 cursor-default min-h-[44px] md:min-h-0 flex items-center justify-center">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20 animate-on-scroll">
            <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-extralight text-gray-900 mb-6 tracking-[-0.04em] leading-[0.9]">
              Real stories from real people
            </h2>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] text-gray-600 font-light leading-[1.6] tracking-[-0.01em]">
              See how Domeo is changing the way people connect.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                quote: "Finally found a community that understands ENM. The Explore dome changed everything for me.",
                author: "Jordan, 34",
                location: "Portland"
              },
              {
                quote: "No more awkward conversations about what I'm looking for. Each dome has a clear purpose.",
                author: "Maya, 28", 
                location: "Austin"
              },
              {
                quote: "The privacy controls are incredible. I can keep my dating life completely separate from work.",
                author: "Alex, 31",
                location: "Seattle"
              }
            ].map((testimonial, index) => (
              <div key={index} className="animate-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="bg-gray-50/50 rounded-2xl p-6 md:p-10 h-full flex flex-col">
                  <div className="text-5xl text-gray-300 mb-4 font-serif">"</div>
                  <p className="text-[17px] font-light text-gray-800 leading-relaxed mb-8 flex-grow tracking-[-0.01em]">
                    {testimonial.quote}
                  </p>
                  <p className="text-[14px] text-gray-600">
                    <span className="font-medium">{testimonial.author}</span> • <span className="text-gray-500">{testimonial.location}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founding Member Section */}
      <section className="py-20 md:py-36 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
                      <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden animate-on-scroll">
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
              
              <button className="group relative inline-flex items-center justify-center px-8 md:px-12 py-4 md:py-5 bg-white text-gray-900 rounded-full text-[16px] md:text-lg font-medium overflow-hidden transition-all duration-500 hover:bg-gray-50 transform hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] min-h-[44px] md:min-h-0">
                <span className="relative z-10">
                  Claim Your Spot
                </span>
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 -top-2 -bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/20 to-transparent -skew-x-12 group-hover:animate-shimmer"></div>
                </div>
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
      <section className="py-20 md:py-36 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-extralight text-gray-900 mb-6 tracking-[-0.04em] leading-[0.9] animate-on-scroll">
            Your people are waiting
          </h2>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] text-gray-600 font-light leading-[1.6] tracking-[-0.01em] mb-12 max-w-2xl mx-auto animate-on-scroll">
            In a world of endless swiping, find something real. Join 2,153 founding members building a better way to connect.
          </p>
          
          <div className="animate-on-scroll">
            <button className="group relative inline-flex items-center justify-center px-8 md:px-12 py-4 md:py-5 text-[16px] md:text-lg bg-black text-white rounded-full font-medium overflow-hidden transition-all duration-500 hover:bg-gray-800 transform hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98] min-h-[44px] md:min-h-0">
              <span className="relative z-10">
                Start Free for 3 Months
              </span>
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 -top-2 -bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 group-hover:animate-shimmer"></div>
              </div>
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
      <footer className="bg-gray-900 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
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
