import { RefObject, useLayoutEffect, useRef } from 'react';

import { gsap } from 'gsap';

const useGroupAnim = function (
  initAnim: boolean,
  ref: RefObject<SVGSVGElement>,
) {
  const tl = useRef<GSAPTimeline>();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        defaults: {
          duration: 3,
          ease: 'elastic.out(2, 0.5)',
        },
      });

      if (initAnim) {
        tl.current.add(init()).add(bounce()).add(hover());

        function init() {
          const tl = gsap.timeline();
          tl.to('#group-a-shapes', {
            delay: 0.2,
            translateY: -5,
            opacity: 1,
          })
            .to(
              '#group-b-shapes',
              {
                delay: 0.2,
                translateY: -5,
                opacity: 1,
              },
              '<',
            )
            .to(
              '#group-c-shapes',
              {
                delay: 0.2,
                translateY: -5,
                opacity: 1,
              },
              '<',
            )
            .to(
              '#group-d-shapes',
              {
                delay: 0.2,
                translateY: -5,
                opacity: 1,
              },
              '<',
            )
            .to(
              '#group-e-shapes',
              {
                delay: 0.2,
                translateY: -5,
                opacity: 1,
              },
              '<',
            )
            .to(
              '#group-f-shapes',
              {
                delay: 0.2,
                translateY: -5,
                opacity: 1,
              },
              '<',
            );
          return tl;
        }

        function bounce() {
          const tl = gsap.timeline({
            delay: 1.3,
            defaults: {
              duration: 2,
              ease: 'elastic.out(2, 0.25)',
            },
          });
          tl.to('#group-a-shapes', {
            translateY: 0,
          })
            .to(
              '#group-b-shapes',
              {
                translateY: 0,
              },
              '<',
            )
            .to(
              '#group-c-shapes',
              {
                translateY: 0,
              },
              '<',
            )
            .to(
              '#group-d-shapes',
              {
                translateY: 0,
              },
              '<',
            )
            .to(
              '#group-e-shapes',
              {
                translateY: 0,
              },
              '<',
            )
            .to(
              '#group-f-shapes',
              {
                translateY: 0,
              },
              '<',
            );

          return tl;
        }

        function hover() {
          const tl = gsap.timeline();

          tl.to('#group-a-shapes', {
            translateY: 8,
            yoyo: true,
            repeat: -1,
            duration: 8,
            repeatDelay: 1,
            ease: 'power.out',
          });

          tl.to(
            '#group-b-shapes',
            {
              delay: 0.3,
              duration: 15,
              yoyo: true,
              translateY: -30,
              repeat: -1,
              repeatDelay: 1,
              ease: 'power.out',
            },
            '<',
          );

          tl.to(
            '#group-c-shapes',
            {
              delay: 1,
              duration: 15,
              yoyo: true,
              translateY: -35,
              repeat: -1,
              repeatDelay: 1,
              ease: 'power.out',
            },
            '<',
          );

          tl.to(
            '#group-d-shapes',
            {
              delay: 0.3,
              yoyo: true,
              duration: 15,
              translateY: -30,
              repeat: -1,
              repeatDelay: 1,
              ease: 'power.out',
            },
            '<',
          );

          tl.to(
            '#group-e-shapes',
            {
              delay: 1,
              yoyo: true,
              duration: 15,
              translateY: -30,
              repeat: -1,
              repeatDelay: 1,
              ease: 'power.out',
            },
            '<',
          );

          tl.to(
            '#group-f-shapes',
            {
              delay: 1,
              yoyo: true,
              duration: 8,
              translateY: 8,
              repeat: -1,
              repeatDelay: 1,
              ease: 'power.out',
            },
            '<',
          );

          return tl;
        }
      }
    });

    return () => ctx.revert();
  }, [initAnim]);
};

export default useGroupAnim;
