import { useSyncExternalStore } from "react";

const getwindowWidth = () => {
  return window.innerWidth;
};

const subscribeWindowSizeChange = (callback: () => void) => {
  window.addEventListener("resize", callback);
  return () => {
    window.removeEventListener("resize", callback);
  };
};

export const useWindowSize = () => {
  const windowWidth = useSyncExternalStore(subscribeWindowSizeChange, getwindowWidth);
  return windowWidth;
};