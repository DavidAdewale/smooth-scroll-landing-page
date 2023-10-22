import { useEffect } from 'react';

export function useLocomotiveScroll() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
}
