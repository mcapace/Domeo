import React from 'react';

export const DomeIcons = {
  connect: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 26.5C16 26.5 24 20 24 14C24 10.6863 21.3137 8 18 8C15.5 8 13.5 9.5 12.5 11.5C11.5 9.5 9.5 8 7 8C3.68629 8 1 10.6863 1 14C1 20 9 26.5 16 26.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  ),
  
  explore: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2L19.09 11.91L29 15L19.09 18.09L16 28L12.91 18.09L3 15L12.91 11.91L16 2Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
      <circle cx="24" cy="8" r="1.5" stroke="currentColor" strokeWidth="1"/>
      <circle cx="8" cy="24" r="1.5" stroke="currentColor" strokeWidth="1"/>
    </svg>
  ),
  
  social: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="10" r="3" stroke="currentColor" strokeWidth="1"/>
      <circle cx="10" cy="20" r="3" stroke="currentColor" strokeWidth="1"/>
      <circle cx="22" cy="20" r="3" stroke="currentColor" strokeWidth="1"/>
      <path d="M16 13V17M10 17L12 15M20 15L22 17" stroke="currentColor" strokeWidth="1"/>
    </svg>
  ),
  
  professional: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="12" width="16" height="12" rx="1" stroke="currentColor" strokeWidth="1"/>
      <path d="M12 12V10C12 8.89543 12.8954 8 14 8H18C19.1046 8 20 8.89543 20 10V12" stroke="currentColor" strokeWidth="1"/>
      <path d="M16 18V20" stroke="currentColor" strokeWidth="1"/>
      <circle cx="16" cy="18" r="1.5" stroke="currentColor" strokeWidth="1"/>
    </svg>
  ),
  
  private: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="14" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1"/>
      <path d="M12 14V10C12 8.89543 12.8954 8 14 8H18C19.1046 8 20 8.89543 20 10V14" stroke="currentColor" strokeWidth="1"/>
      <circle cx="16" cy="20" r="1.5" stroke="currentColor" strokeWidth="1"/>
    </svg>
  ),
};

// Trust indicator icons
export const TrustIcons = {
  founding: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1"/>
      <circle cx="10" cy="10" r="2.5" fill="currentColor"/>
    </svg>
  ),
  verified: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M6 10L9 13L14 7" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  ),
  communities: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="3" y="3" width="4" height="4" stroke="currentColor" strokeWidth="1"/>
      <rect x="13" y="3" width="4" height="4" stroke="currentColor" strokeWidth="1"/>
      <rect x="3" y="13" width="4" height="4" stroke="currentColor" strokeWidth="1"/>
      <rect x="13" y="13" width="4" height="4" stroke="currentColor" strokeWidth="1"/>
      <circle cx="10" cy="10" r="1.5" fill="currentColor"/>
    </svg>
  ),
  fresh: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2V10L16 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1"/>
    </svg>
  ),
}; 