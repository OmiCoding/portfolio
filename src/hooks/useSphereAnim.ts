import { RefObject, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const useAnimation = function (device: string, ref: RefObject<SVGSVGElement>) {
  const tl = useRef<GSAPTimeline>();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (device === 'desktop') {
        tl.current = gsap
          .timeline({
            repeat: -1,
            repeatDelay: 3,
          })
          .to('.sphere__origin', {
            translateY: 0,
            duration: 3,
            ease: 'elastic.out(1, 0.4)',
          })
          .to(
            '.sphere__origin',
            {
              scale: 1,
              translateX: 0,
              duration: 3,
              ease: 'elastic.out(0.75, 1)',
            },
            '-=100%',
          );
      }
    }, ref);

    return () => ctx.revert();
  }, [device]);
};

export default useAnimation;
