import { useEffect, useState } from 'react';

function useViewportWidth(): number {
  const [viewportWidth, setViewportWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    const updateViewportWidth = () => {
      setViewportWidth(window.innerWidth);
    };

    // Set initial viewport width once the component mounts in the browser environment
    updateViewportWidth();

    // Attach resize event listener to update viewport width
    window.addEventListener('resize', handleResize);

    // Clean up the resize event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return viewportWidth;
}

export default useViewportWidth;
