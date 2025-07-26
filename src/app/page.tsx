'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import { cn } from '@/lib/utils';
import { TrustIcons, DomeIcons } from '@/components/DomeIcons';

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
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 pt-40 pb-20 bg-domeo-gray-50">
        {/* Subtle geometric background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] border border-domeo-gray-200/20 rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] border border-domeo-gray-200/20 rounded-full translate-x-[-50%] translate-y-[50%]"></div>
        </div>
        
        <div className="w-full max-w-5xl mx-auto text-center relative z-10">
          <div className="mb-20 opacity-0 animate-fade-in">
            <div className="flex justify-center">
              <Logo size="xl" className="mx-auto" linkToHome={false} />
            </div>
          </div>
          
          <h1 className="text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[7rem] xl:text-[8rem] font-extralight text-domeo-black tracking-[-0.04em] leading-[0.85] mb-12 opacity-0 animate-fade-up animate-delay-200">
            Your Domes<br />
            <span className="font-light text-domeo-charcoal">
              Await
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-domeo-gray-600 font-light max-w-3xl mx-auto mb-16 leading-[1.5] opacity-0 animate-fade-up animate-delay-400 tracking-[-0.01em]">
            One profile. Five communities.<br className="hidden sm:block" />
            Endless authentic connections.
          </p>
          
          <div className="opacity-0 animate-fade-up animate-delay-600">
            <Link href="/auth/signup">
              <button className="px-14 py-5 bg-domeo-black text-white text-[13px] font-normal tracking-[0.2em] uppercase hover:bg-domeo-charcoal transition-all duration-500">
                Claim Founding Membership
              </button>
            </Link>
          </div>
          
          <div className="mt-8 flex items-center justify-center">
            <div className="text-[14px] font-light tracking-[-0.01em]">
              <span className="text-domeo-black font-medium">3 months free</span>
              <span className="text-domeo-gray-600"> Then $29/mo</span>
            </div>
          </div>
        </div>
        

      </section>

      {/* Trust Indicators */}
      <section className="py-24 bg-white border-y border-domeo-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
            {[
              { 
                number: '5,000', 
                label: 'Founding Members',
                icon: TrustIcons.founding
              },
              { 
                number: '100%', 
                label: 'Verified',
                icon: TrustIcons.verified
              },
              { 
                number: '5', 
                label: 'Communities',
                icon: TrustIcons.communities
              },
              { 
                number: '2024', 
                label: 'Fresh Start',
                icon: TrustIcons.fresh
              }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center group animate-on-scroll"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-6 text-domeo-gray-400 group-hover:text-domeo-accent transition-colors duration-500">
                  {stat.icon}
                </div>
                <p className="text-[3rem] md:text-[3.5rem] font-extralight text-domeo-black mb-2 tracking-[-0.03em]">
                  {stat.number}
                </p>
                <p className="text-[12px] text-domeo-gray-500 font-medium tracking-[0.15em] uppercase">
                  {stat.label}
                </p>
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
      <section className="py-36 bg-domeo-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 animate-on-scroll">
            <h2 className="text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-extralight text-domeo-black mb-8 tracking-[-0.03em]">
              Five spaces for every side of you
            </h2>
            <p className="text-lg md:text-xl text-domeo-gray-600 font-light max-w-3xl mx-auto">
              Each dome is a curated community with its own culture and purpose.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
            {[
              {
                name: 'Connect',
                icon: DomeIcons.connect,
                tagline: 'Date with intention',
                subtext: 'All orientations'
              },
              {
                name: 'Explore',
                icon: DomeIcons.explore,
                tagline: 'Modern & Alternative',
                subtext: 'ENM • Poly • Kink'
              },
              {
                name: 'Social',
                icon: DomeIcons.social,
                tagline: 'Find your tribe',
                subtext: 'Platonic only'
              },
              {
                name: 'Professional',
                icon: DomeIcons.professional,
                tagline: 'Where ambition meets',
                subtext: 'Network differently'
              },
              {
                name: 'Private',
                icon: DomeIcons.private,
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
                  <div className="w-32 h-32 md:w-36 md:h-36 mx-auto rounded-full bg-white border border-domeo-gray-200 flex items-center justify-center group-hover:border-domeo-accent transition-all duration-500 group-hover:scale-110">
                    <div className="text-domeo-gray-400 group-hover:text-domeo-accent transition-colors duration-500">
                      {dome.icon}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-[16px] font-medium mb-2 text-domeo-black tracking-wide uppercase">
                  {dome.name}
                </h3>
                <p className="text-[14px] text-domeo-gray-600 font-light mb-1">{dome.tagline}</p>
                <p className="text-[12px] text-domeo-gray-400 font-light opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {dome.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-extralight text-center text-domeo-black mb-20 animate-on-scroll tracking-[-0.03em]">
            Dating apps weren't built for real life
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* The Old Way */}
            <div className="bg-gray-50/50 rounded-3xl p-12 animate-on-scroll hover-lift border border-gray-100">
              <h3 className="text-2xl font-light mb-12 text-domeo-gray-600">The Old Way</h3>
              <div className="space-y-8">
                {[
                  { 
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1"/>
                        <circle cx="7" cy="8" r="1" fill="currentColor"/>
                        <circle cx="13" cy="8" r="1" fill="currentColor"/>
                        <path d="M6 13C6 13 8 11 10 11C12 11 14 13 14 13" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                      </svg>
                    ),
                    title: 'Everyone in one feed',
                    desc: 'Hookups next to marriages, confusing for everyone'
                  },
                  { 
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                        <path d="M10 2C10 2 6 4 6 8C6 12 10 14 10 14C10 14 14 12 14 8C14 4 10 2 10 2Z" stroke="currentColor" strokeWidth="1"/>
                        <path d="M10 14V18" stroke="currentColor" strokeWidth="1"/>
                        <line x1="7" y1="7" x2="13" y2="13" stroke="currentColor" strokeWidth="1"/>
                      </svg>
                    ),
                    title: 'Fake profiles everywhere',
                    desc: 'Catfishing, bots, and photo filters'
                  },
                  { 
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1"/>
                        <path d="M10 2V10L14 14" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                        <line x1="3" y1="3" x2="17" y2="17" stroke="currentColor" strokeWidth="1"/>
                      </svg>
                    ),
                    title: 'No privacy control',
                    desc: 'Your ex, boss, and mom can all find you'
                  },
                  { 
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                        <rect x="4" y="8" width="12" height="8" stroke="currentColor" strokeWidth="1" rx="1"/>
                        <path d="M6 8V6C6 4 8 2 10 2C12 2 14 4 14 6V8" stroke="currentColor" strokeWidth="1"/>
                        <path d="M10 11V13" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                        <circle cx="16" cy="4" r="2" stroke="currentColor" strokeWidth="1"/>
                        <path d="M16 2V6M14 4H18" stroke="currentColor" strokeWidth="0.5"/>
                      </svg>
                    ),
                    title: 'Hidden fees and tricks',
                    desc: 'Pay extra for basic features'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors">
                      <span className="text-red-400">{item.icon}</span>
                    </div>
                    <div>
                      <p className="font-medium text-domeo-black mb-1">{item.title}</p>
                      <p className="text-sm text-domeo-gray-600 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* The Domeo Way */}
            <div className="bg-domeo-gray-50/30 rounded-3xl p-12 animate-on-scroll hover-lift border border-domeo-gray-100">
              <h3 className="text-2xl font-light mb-12 text-domeo-black">The Domeo Way</h3>
              <div className="space-y-8">
                {[
                  { 
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1"/>
                        <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1"/>
                        <circle cx="10" cy="10" r="1" fill="currentColor"/>
                      </svg>
                    ),
                    title: 'Five distinct communities',
                    desc: 'Clear intentions, compatible matches only'
                  },
                  { 
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1"/>
                        <path d="M6 10L9 13L14 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                    title: '100% real people',
                    desc: 'AI + human verification, no exceptions'
                  },
                  { 
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                        <rect x="4" y="8" width="12" height="8" stroke="currentColor" strokeWidth="1" rx="1"/>
                        <path d="M6 8V6C6 4 8 2 10 2C12 2 14 4 14 6V8" stroke="currentColor" strokeWidth="1"/>
                        <circle cx="10" cy="12" r="1" fill="currentColor"/>
                      </svg>
                    ),
                    title: 'Complete privacy control',
                    desc: 'Your domes stay separate, your business stays yours'
                  },
                  { 
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                        <path d="M10 2L12 8H18L13 11L15 17L10 13L5 17L7 11L2 8H8L10 2Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
                      </svg>
                    ),
                    title: 'Transparent pricing',
                    desc: 'One price, all features, no surprises'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-domeo-accent-muted flex items-center justify-center flex-shrink-0 group-hover:bg-domeo-accent/20 transition-colors">
                      <span className="text-domeo-accent">{item.icon}</span>
                    </div>
                    <div>
                      <p className="font-medium text-domeo-black mb-1">{item.title}</p>
                      <p className="text-sm text-domeo-gray-600 font-light leading-relaxed">{item.desc}</p>
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
      <section className="py-20 md:py-36 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="bg-domeo-black text-white rounded-3xl p-12 text-center relative overflow-hidden animate-on-scroll">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
              }}></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full mb-6 text-sm tracking-wide uppercase">
                Founding Member Special
              </div>
              
              <h3 className="text-2xl font-extralight mb-6 tracking-wide">Be part of something new</h3>
              <div className="text-6xl md:text-7xl font-extralight mb-4 tracking-tight">3 Months Free</div>
              <p className="text-lg opacity-80 mb-8 font-light">Join the first 5,000 members shaping the future of connection</p>
              
              {/* Minimal progress indicator */}
              <div className="max-w-md mx-auto mb-8">
                <div className="flex justify-between text-xs mb-2 opacity-60 uppercase tracking-wider">
                  <span>2,153 joined</span>
                  <span>2,847 remaining</span>
                </div>
                <div className="h-[1px] bg-white/20 relative">
                  <div className="h-full bg-white absolute left-0 top-0" style={{ width: '43%' }}></div>
                </div>
              </div>
              
              <button className="px-14 py-5 bg-white text-domeo-black text-[13px] font-normal tracking-[0.2em] uppercase hover:bg-gray-100 transition-all duration-500">
                Claim Your Spot
              </button>
              
              <p className="mt-6 text-xs opacity-60 uppercase tracking-wider">
                No credit card required • $29/month after trial
              </p>
            </div>
          </div>
          
          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { 
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1"/>
                    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1"/>
                    <circle cx="12" cy="12" r="2" fill="currentColor"/>
                    <path d="M12 2V4M12 20V22M2 12H4M20 12H22" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
                  </svg>
                ),
                title: 'Shape the platform',
                desc: 'Your feedback directly influences new features'
              },
              { 
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'First access',
                desc: 'Be first in your city when we launch'
              },
              { 
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
                    <circle cx="18" cy="6" r="1" stroke="currentColor" strokeWidth="1"/>
                    <circle cx="6" cy="18" r="1" stroke="currentColor" strokeWidth="1"/>
                  </svg>
                ),
                title: 'Exclusive perks',
                desc: 'Special badge and premium features'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center animate-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="w-16 h-16 bg-domeo-accent-muted rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-domeo-accent/20 transition-colors">
                  <span className="text-domeo-accent">{benefit.icon}</span>
                </div>
                <h4 className="font-medium text-domeo-black mb-2 text-[15px]">{benefit.title}</h4>
                <p className="text-[13px] text-domeo-gray-600 font-light">{benefit.desc}</p>
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
            <button className="px-14 py-5 bg-domeo-black text-white text-[13px] font-normal tracking-[0.2em] uppercase hover:bg-domeo-charcoal transition-all duration-500">
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
      <footer className="bg-white border-t border-domeo-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div>
              <Logo theme="dark" size="sm" className="mb-6" />
              <p className="text-[13px] text-domeo-gray-500 leading-relaxed">
                One profile. Five communities.<br />
                Endless authentic connections.
              </p>
            </div>
            
            <div>
              <h4 className="text-[11px] font-medium tracking-[0.2em] uppercase text-domeo-gray-700 mb-6">Product</h4>
              <ul className="space-y-3">
                <li><Link href="/how-it-works" className="text-[13px] text-domeo-gray-500 hover:text-domeo-black transition-colors">How It Works</Link></li>
                <li><Link href="/domes" className="text-[13px] text-domeo-gray-500 hover:text-domeo-black transition-colors">The Domes</Link></li>
                <li><Link href="/subscription" className="text-[13px] text-domeo-gray-500 hover:text-domeo-black transition-colors">Pricing</Link></li>
                <li><Link href="/success-stories" className="text-[13px] text-domeo-gray-500 hover:text-domeo-black transition-colors">Success Stories</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-[11px] font-medium tracking-[0.2em] uppercase text-domeo-gray-700 mb-6">Company</h4>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-[13px] text-domeo-gray-500 hover:text-domeo-black transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="text-[13px] text-domeo-gray-500 hover:text-domeo-black transition-colors">Careers</Link></li>
                <li><Link href="/press" className="text-[13px] text-domeo-gray-500 hover:text-domeo-black transition-colors">Press</Link></li>
                <li><Link href="/blog" className="text-[13px] text-domeo-gray-500 hover:text-domeo-black transition-colors">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-[11px] font-medium tracking-[0.2em] uppercase text-domeo-gray-700 mb-6">Trust & Safety</h4>
              <ul className="space-y-3">
                <li><Link href="/safety" className="text-[13px] text-domeo-gray-500 hover:text-domeo-black transition-colors">Safety Center</Link></li>
                <li><Link href="/guidelines" className="text-[13px] text-domeo-gray-500 hover:text-domeo-black transition-colors">Community Guidelines</Link></li>
                <li><Link href="/privacy" className="text-[13px] text-domeo-gray-500 hover:text-domeo-black transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-[13px] text-domeo-gray-500 hover:text-domeo-black transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-domeo-gray-100 mt-16 pt-8">
            <p className="text-[11px] text-domeo-gray-400 text-center tracking-wider uppercase">
              © 2024 Domeo. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
