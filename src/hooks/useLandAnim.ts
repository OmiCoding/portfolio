import { RefObject, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const useLandAnim = function (
  initAnim: boolean,
  ref: RefObject<SVGSVGElement>,
) {
  const tl = useRef<GSAPTimeline>();

  useLayoutEffect(() => {
    if (initAnim) {
      gsap.to('.svg-hills__landscape', {
        translateY: 28,
        duration: 3,
        ease: 'elastic.out(1, 1)',
        onComplete: () => {
          gsap.to('.svg-hills__landscape', {
            translateY: 0,
          });
        },
      });

      gsap.to('.patch-1', {
        translateY: 0,
        duration: 5,
      });
    }
  }, [initAnim]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (initAnim) {
        tl.current = gsap
          .timeline({
            repeatDuration: 3,
            delay: 3,
            defaults: {
              duration: 3,
              ease: 'elastic.out(2, 0.3)',
            },
          })
          .to('#hill_ap', {
            translateY: 10,
          })
          .to(
            '#hill_aq',
            {
              translateY: 15,
            },
            '-=96%',
          )
          .to(
            '#hill_as',
            {
              translateY: 15,
              ease: 'elastic.out(2, 0.4)',
            },
            '-=97%',
          )
          .to(
            '#mid_hill-1',
            {
              translateY: 3,
            },
            '-=99%',
          )
          .to(
            '#right-hill-group',
            {
              translateY: 2,
            },
            '-=100%',
          )
          .to(
            '#back-hill-topology',
            {
              translateY: 0,
            },
            '-=100%',
          );
      }
    }, ref);
    return () => ctx.revert();
  }, [initAnim]);
};

export default useLandAnim;
