import { useSyncExternalStore } from "react";


const getThemeIsDark = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const subscribeMatchMedia = (callback: () => void) => {  
  const theme = window.matchMedia('(prefers-color-scheme: dark)');
  theme.addEventListener("change", callback);
  return () => {
    theme.removeEventListener("change", callback);
  };
};

export const useMatchTheme = () => {
  const isDark = useSyncExternalStore(subscribeMatchMedia, () => getThemeIsDark());
  const  systemTheme = isDark ? "dark" : "light";
  return systemTheme;
};