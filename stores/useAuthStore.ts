import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface AuthState {
  user: any;
  accessToken: string | null;
  isAuthenticated: boolean;
  isEventCreator: boolean;
  hasCompletedOnboarding: boolean;
  completeOnboarding: () => void;
  resetOnboarding: () => void;
  login: (user: any, accessToken: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      accessToken: null,
      isAuthenticated: false,
      isEventCreator: false,
      hasCompletedOnboarding: false,
      login: (user, accessToken) => {
        set({
          user,
          accessToken,
          isAuthenticated: true,
          isEventCreator: user.role === 'USER' ? false : true,
        });
      },
      logout: () =>
        set({
          user: null,
          accessToken: null,
          isAuthenticated: false,
          isEventCreator: false,
        }),
      completeOnboarding: () => {
        set((state) => {
          return {
            ...state,
            hasCompletedOnboarding: true,
          };
        });
      },
      resetOnboarding: () => {
        set((state) => {
          return {
            ...state,
            hasCompletedOnboarding: false,
          };
        });
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
