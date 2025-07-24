import { signIn, signOut, getSession } from "next-auth/react";
import bcrypt from "bcryptjs";

export interface SignUpData {
  email?: string;
  phone?: string;
  password: string;
  firstName: string;
  lastName: string;
  birthDate: string;
}

export interface SignInData {
  email?: string;
  phone?: string;
  password: string;
}

export const authUtils = {
  // Sign up with email/password
  async signUp(data: SignUpData) {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        return { success: false, error: result.error || 'Sign up failed' };
      }

      // Sign in the user after successful registration
      const signInResult = await signIn("credentials", {
        email: data.email,
        phone: data.phone,
        password: data.password,
        redirect: false,
      });

      return { success: true, result: signInResult };
    } catch (error) {
      console.error("Sign up error:", error);
      return { success: false, error: "Sign up failed" };
    }
  },

  // Sign in with email/password
  async signIn(data: SignInData) {
    try {
      const result = await signIn("credentials", {
        email: data.email,
        phone: data.phone,
        password: data.password,
        redirect: false,
      });

      return { success: true, result };
    } catch (error) {
      console.error("Sign in error:", error);
      return { success: false, error: "Failed to sign in" };
    }
  },

  // Social login
  async socialSignIn(provider: "google" | "apple" | "facebook") {
    try {
      const result = await signIn(provider, {
        callbackUrl: "/dashboard",
        redirect: false,
      });

      return { success: true, result };
    } catch (error) {
      console.error(`${provider} sign in error:`, error);
      return { success: false, error: `Failed to sign in with ${provider}` };
    }
  },

  // Sign out
  async signOut() {
    try {
      await signOut({ redirect: false });
      return { success: true };
    } catch (error) {
      console.error("Sign out error:", error);
      return { success: false, error: "Failed to sign out" };
    }
  },

  // Get current session
  async getCurrentSession() {
    try {
      const session = await getSession();
      return { success: true, session };
    } catch (error) {
      console.error("Get session error:", error);
      return { success: false, error: "Failed to get session" };
    }
  },

  // Get user domes
  async getUserDomes() {
    try {
      const response = await fetch('/api/user/domes');
      const result = await response.json();

      if (!response.ok) {
        return { success: false, error: result.error || 'Failed to get domes' };
      }

      return { success: true, domes: result.domes };
    } catch (error) {
      console.error("Get user domes error:", error);
      return { success: false, error: "Failed to get domes" };
    }
  },

  // Update user domes
  async updateUserDomes(domeIds: string[]) {
    try {
      const response = await fetch('/api/user/domes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ domeIds }),
      });

      const result = await response.json();

      if (!response.ok) {
        return { success: false, error: result.error || 'Failed to update domes' };
      }

      return { success: true, domes: result.domes };
    } catch (error) {
      console.error("Update user domes error:", error);
      return { success: false, error: "Failed to update domes" };
    }
  },

  // Get all available domes
  async getAllDomes() {
    try {
      const response = await fetch('/api/domes');
      const result = await response.json();

      if (!response.ok) {
        return { success: false, error: result.error || 'Failed to get domes' };
      }

      return { success: true, domes: result.domes };
    } catch (error) {
      console.error("Get all domes error:", error);
      return { success: false, error: "Failed to get domes" };
    }
  },
}; 