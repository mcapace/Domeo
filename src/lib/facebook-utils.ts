declare global {
  interface Window {
    FB: any;
  }
}

export interface FacebookLoginResponse {
  authResponse: {
    accessToken: string;
    userID: string;
    expiresIn: number;
    signedRequest: string;
  };
  status: string;
}

export const facebookLogin = (): Promise<FacebookLoginResponse> => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.FB) {
      reject(new Error('Facebook SDK not loaded'));
      return;
    }

    window.FB.login((response: FacebookLoginResponse) => {
      if (response.status === 'connected') {
        resolve(response);
      } else {
        reject(new Error('Facebook login failed'));
      }
    }, {
      scope: 'email,public_profile',
      return_scopes: true
    });
  });
};

export const getFacebookUserInfo = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.FB) {
      reject(new Error('Facebook SDK not loaded'));
      return;
    }

    window.FB.api('/me', { fields: 'id,name,email,picture' }, (response: any) => {
      if (response && !response.error) {
        resolve(response);
      } else {
        reject(new Error('Failed to get Facebook user info'));
      }
    });
  });
};

export const checkFacebookLoginStatus = (): Promise<FacebookLoginResponse> => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.FB) {
      reject(new Error('Facebook SDK not loaded'));
      return;
    }

    window.FB.getLoginStatus((response: FacebookLoginResponse) => {
      resolve(response);
    });
  });
};

export const facebookLogout = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.FB) {
      reject(new Error('Facebook SDK not loaded'));
      return;
    }

    window.FB.logout((response: any) => {
      if (response) {
        resolve();
      } else {
        reject(new Error('Facebook logout failed'));
      }
    });
  });
}; 