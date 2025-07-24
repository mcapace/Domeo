'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    FB: any;
    fbAsyncInit: () => void;
  }
}

interface FacebookSDKProps {
  appId: string;
  version?: string;
}

export default function FacebookSDK({ appId, version = 'v18.0' }: FacebookSDKProps) {
  useEffect(() => {
    // Initialize Facebook SDK
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: appId,
        cookie: true,
        xfbml: true,
        version: version
      });
      
      window.FB.AppEvents.logPageView();
    };

    // Load Facebook SDK
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s) as HTMLScriptElement;
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode?.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    // Cleanup function
    return () => {
      // Remove the script tag if component unmounts
      const script = document.getElementById('facebook-jssdk');
      if (script) {
        script.remove();
      }
    };
  }, [appId, version]);

  return null; // This component doesn't render anything
} 