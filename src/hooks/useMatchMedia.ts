import { useSyncExternalStore } from "react";
import { MOBILE_MEDIA_QUERY } from "@/constants";

const getmatchMedia = (query: string) => {
  return window.matchMedia(query).matches;
};

const subscribeMatchMedia = (callback: () => void) => {  
  const mediaQueryList = window.matchMedia(MOBILE_MEDIA_QUERY);
  mediaQueryList.addEventListener("change", callback);
  return () => {
    mediaQueryList.removeEventListener("change", callback);
  };
};

export const useMatchMedia = (query: string) => {
  const isMobile:boolean = useSyncExternalStore(subscribeMatchMedia, () => getmatchMedia(query));
  return isMobile;
};