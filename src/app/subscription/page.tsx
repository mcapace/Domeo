'use client';

import { useState } from 'react';
import Link from 'next/link';

const plans = [
  {
    id: 'founding',
    name: 'Founding Member',
    price: 29,
    originalPrice: 39,
    period: 'month',
    featured: true,
    benefits: [
      'Access to all 5 domes',
      'Unlimited swipes & matches',
      'Advanced filters',
      'Read receipts',
      'See who likes you',
      'Founding member badge',
      'Priority support',
      'Vote on new features',
      'Lock in $29/mo forever'
    ],
    limitedSpots: 2847
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 39,
    period: 'month',
    featured: false,
    benefits: [
      'Access to all 5 domes',
      'Unlimited swipes & matches',
      'Advanced filters',
      'Read receipts',
      'See who likes you',
      'Standard support'
    ]
  }
];

export default function Subscription() {
  const [selectedPlan, setSelectedPlan] = useState('founding');
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubscribe = async () => {
    setIsProcessing(true);
    // TODO: Implement payment processing
    setTimeout(() => {
      window.location.href = '/subscription/success';
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-domeo-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b border-domeo-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <img 
                src="/domeo-logo-black.png" 
                alt="Domeo" 
                className="h-8 w-auto"
              />
            </Link>

            <h1 className="text-lg font-medium text-domeo-black">Choose Your Plan</h1>

            <Link 
              href="/dashboard" 
              className="flex items-center gap-2 text-domeo-gray-600 hover:text-domeo-black transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                <path d="M12 5L7 10L12 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-sm">Back to App</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white border-b border-domeo-gray-200 px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extralight text-domeo-black mb-4">
            Join the future of connection
          </h2>
          <p className="text-lg text-domeo-gray-600 mb-8">
            One profile. Five communities. Endless authentic connections.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 bg-domeo-gray-100 rounded-lg p-1">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                billingPeriod === 'monthly'
                  ? 'bg-white text-domeo-black shadow-sm'
                  : 'text-domeo-gray-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                billingPeriod === 'annual'
                  ? 'bg-white text-domeo-black shadow-sm'
                  : 'text-domeo-gray-600'
              }`}
            >
              Annual
              <span className="ml-2 text-xs text-green-600">Save 20%</span>
            </button>
          </div>
        </div>
      </div>

      {/* Plans */}
      <div className="max-w-5xl mx-auto p-6">
        {/* Limited Time Banner */}
        <div className="bg-domeo-accent-muted border border-domeo-accent/20 rounded-xl p-6 mb-8 text-center">
          <p className="text-domeo-accent font-medium mb-2">
            🎉 Founding Member Offer
          </p>
          <p className="text-domeo-gray-700">
            Only <span className="font-bold text-domeo-black">2,847 spots</span> remaining at this price
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan) => {
            const price = billingPeriod === 'annual' 
              ? Math.round(plan.price * 12 * 0.8)
              : plan.price;
              
            return (
              <div
                key={plan.id}
                className={`bg-white rounded-2xl shadow-sm border-2 transition-all cursor-pointer ${
                  selectedPlan === plan.id
                    ? 'border-domeo-accent shadow-lg'
                    : 'border-domeo-gray-200 hover:border-domeo-gray-300'
                }`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.featured && (
                  <div className="bg-domeo-accent text-white text-center py-2 rounded-t-xl">
                    <p className="text-sm font-medium uppercase tracking-wider">
                      Recommended
                    </p>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-light text-domeo-black mb-2">
                    {plan.name}
                  </h3>
                  
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-light text-domeo-black">
                      ${billingPeriod === 'annual' ? Math.round(price / 12) : price}
                    </span>
                    {plan.originalPrice && billingPeriod === 'monthly' && (
                      <span className="text-lg text-domeo-gray-500 line-through">
                        ${plan.originalPrice}
                      </span>
                    )}
                    <span className="text-domeo-gray-600">
                      /{billingPeriod === 'annual' ? 'mo' : plan.period}
                    </span>
                  </div>

                  {billingPeriod === 'annual' && (
                    <p className="text-sm text-domeo-gray-600 mb-4">
                      ${price} billed annually
                    </p>
                  )}

                  {plan.limitedSpots && (
                    <div className="bg-domeo-gray-50 rounded-lg p-3 mb-6">
                      <p className="text-sm text-domeo-gray-700">
                        <span className="font-medium">{plan.limitedSpots.toLocaleString()}</span> spots left
                      </p>
                      <div className="mt-2 h-2 bg-domeo-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-domeo-accent transition-all"
                          style={{ width: '43%' }}
                        />
                      </div>
                    </div>
                  )}

                  <ul className="space-y-3 mb-8">
                    {plan.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-domeo-accent mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="none">
                          <path d="M5 10L8 13L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        <span className="text-sm text-domeo-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-center">
                    {selectedPlan === plan.id ? (
                      <div className="w-6 h-6 bg-domeo-accent rounded-full mx-auto flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8L6 11L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                    ) : (
                      <div className="w-6 h-6 border-2 border-domeo-gray-300 rounded-full mx-auto" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Payment Section */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-8">
          <h3 className="text-lg font-medium text-domeo-black mb-6">Payment Method</h3>
          
          <div className="space-y-4 mb-6">
            <button className="w-full p-4 border border-domeo-gray-200 rounded-lg hover:border-domeo-gray-300 transition-colors flex items-center justify-center gap-3">
              <svg className="w-8 h-5" viewBox="0 0 32 20" fill="none">
                <rect width="32" height="20" rx="4" fill="#5C6AC4"/>
                <path d="M16 14C18.2091 14 20 12.2091 20 10C20 7.79086 18.2091 6 16 6C13.7909 6 12 7.79086 12 10C12 12.2091 13.7909 14 16 14Z" fill="white" fillOpacity="0.5"/>
                <path d="M16 12C17.1046 12 18 11.1046 18 10C18 8.89543 17.1046 8 16 8C14.8954 8 14 8.89543 14 10C14 11.1046 14.8954 12 16 12Z" fill="white"/>
              </svg>
              <span className="text-domeo-gray-700">Pay with Card</span>
            </button>

            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 border border-domeo-gray-200 rounded-lg hover:border-domeo-gray-300 transition-colors flex items-center justify-center">
                <span className="text-2xl">🍎</span>
                <span className="ml-2 text-domeo-gray-700">Apple Pay</span>
              </button>
              <button className="p-4 border border-domeo-gray-200 rounded-lg hover:border-domeo-gray-300 transition-colors flex items-center justify-center">
                <span className="text-2xl">🇬</span>
                <span className="ml-2 text-domeo-gray-700">Google Pay</span>
              </button>
            </div>
          </div>

          <div className="border-t border-domeo-gray-200 pt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-domeo-gray-600">Subtotal</span>
              <span className="text-domeo-black">
                ${selectedPlan === 'founding' 
                  ? billingPeriod === 'annual' ? '279' : '29'
                  : billingPeriod === 'annual' ? '374' : '39'
                }/mo
              </span>
            </div>
            {selectedPlan === 'founding' && (
              <div className="flex items-center justify-between mb-2">
                <span className="text-domeo-gray-600">Founding discount</span>
                <span className="text-green-600">
                  -${billingPeriod === 'annual' ? '96' : '10'}/mo
                </span>
              </div>
            )}
            <div className="flex items-center justify-between mb-6 pt-2 border-t border-domeo-gray-100">
              <span className="font-medium text-domeo-black">Total</span>
              <span className="text-xl font-medium text-domeo-black">
                ${selectedPlan === 'founding' 
                  ? billingPeriod === 'annual' ? '279' : '29'
                  : billingPeriod === 'annual' ? '374' : '39'
                }
                {billingPeriod === 'annual' ? '/year' : '/month'}
              </span>
            </div>

            <button
              onClick={handleSubscribe}
              disabled={isProcessing}
              className="w-full py-4 bg-domeo-black text-white font-medium rounded-lg hover:bg-domeo-charcoal transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? 'Processing...' : 'Start Free Trial'}
            </button>
            
            <p className="text-center text-xs text-domeo-gray-500 mt-4">
              Cancel anytime. By subscribing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 