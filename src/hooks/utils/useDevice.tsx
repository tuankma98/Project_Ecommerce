import { BrowserView, CustomView, isDesktop, isMobile, MobileView } from "react-device-detect";

const useDevice = () => {
  return {
    isDesktop,
    isMobile,
    // TODO: Usage https://github.com/duskload/react-device-detect
    MobileView,
    BrowserView,
    CustomView,
  };
};

export default useDevice;
