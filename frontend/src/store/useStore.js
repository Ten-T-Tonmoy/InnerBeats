import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  isLoading: false,

  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));
