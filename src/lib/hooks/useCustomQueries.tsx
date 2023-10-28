import { useEffect } from 'react';
import useMediaQuery from './useMediaQuery';
import { mediaQueries } from '../common/mediaQueries';

const useCustomQueries = () => {
  const isMobile = useMediaQuery(mediaQueries.isMobile);
  const isTablet = useMediaQuery(mediaQueries.isTablet);
  const isDesktop = useMediaQuery(mediaQueries.isDesktop);

  useEffect(() => {
    // Additional effect logic if needed

    return () => {
      // Cleanup logic if needed
    };
  }, []);

  return { isMobile, isTablet, isDesktop };
};

export default useCustomQueries;
