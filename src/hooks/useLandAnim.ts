import { RefObject, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const useLandAnim = function (device: string, ref: RefObject<SVGSVGElement>) {
  const tl = useRef<GSAPTimeline>();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (device === 'desktop') {
        tl.current = gsap
          .timeline({
            repeat: -1,
            repeatDuration: 3,
            defaults: {
              duration: 3,
              ease: 'elastic.out(2, 0.3)',
              translateY: 10,
            },
          })
          .to('#hill_ap', {
            translateY: 10,
          })
          .to('#hill_aq', {}, '-=96%')
          .to(
            '#hill_as',
            {
              translateY: 19,
              ease: 'elastic.out(2, 0.4)',
            },
            '-=97%',
          )
          .to(
            '#mid_hill-1',
            {
              translateY: 4,
            },
            '-=99%',
          );
      }
    }, ref);
    return () => ctx.revert();
  }, [device]);
};

export default useLandAnim;
