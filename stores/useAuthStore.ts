import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface User {
  _id: string;
  email: string;
  name: string;
  avatar: string;
  role: string;
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isEventCreator?: boolean;
  hasCompletedOnboarding: boolean;
  completeOnboarding: () => void;
  resetOnboarding: () => void;
  login: (user: User, accessToken: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      accessToken: null,
      isAuthenticated: false,
      hasCompletedOnboarding: false,
      login: (user, accessToken) => {
        set({
          user,
          accessToken,
          isAuthenticated: user ? true : false,
          isEventCreator: user.role === "event-creator" ? true : false,
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
      name: "auth-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
