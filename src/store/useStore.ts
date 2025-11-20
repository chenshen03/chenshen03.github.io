import { create } from 'zustand';

interface AppState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  language: 'en' | 'zh';
  setLanguage: (lang: 'en' | 'zh') => void;
}

const getInitialTheme = (): 'light' | 'dark' => {
  if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
};

export const useStore = create<AppState>((set) => ({
  theme: getInitialTheme(),
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      // DOM manipulation is handled in App.tsx via useEffect
      return { theme: newTheme };
    }),
  language: 'en',
  setLanguage: (lang) => set({ language: lang }),
}));
