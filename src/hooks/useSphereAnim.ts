import { RefObject, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MotionPathPlugin);

const useAnimation = function (device: string, ref: RefObject<SVGSVGElement>) {
  const tl = useRef<GSAPTimeline>();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // MotionPathHelper.create('#blob-2');

      gsap.set('.sphere--lines-1', {
        drawSVG: 0,
      });
      gsap.set('.sphere--lines-2', {
        drawSVG: 0,
      });

      gsap.set('.sphere--lines-3', {
        drawSVG: 0,
      });

      if (device === 'desktop') {
        tl.current = gsap.timeline();

        tl.current
          .add(init())
          .add(morphHalves())
          .add(addLines())
          .add(splitHalves())
          .add(blobs(), '-=98%');

        // hover();

        function init() {
          const tl = gsap.timeline();
          tl.to('.sphere__origin', {
            translateY: 0,
            duration: 3,
            ease: 'elastic.out(1, 0.4)',
          }).to(
            '.sphere__origin',
            {
              onComplete: () => {
                gsap.to('.sphere__split', {
                  opacity: 1,
                  duration: 0.02,
                });

                gsap.to('#origin', {
                  duration: 0.02,
                  opacity: 0,
                });
              },
              scale: 1,
              translateX: 0,
              duration: 3,
              ease: 'elastic.out(0.75, 1)',
            },
            '-=100%',
          );
          return tl;
        }

        function morphHalves() {
          const tl = gsap.timeline();
          tl.to('#upper-blob', {
            delay: 0.02,
            duration: 2,
            ease: 'elastic.out(1,1)',
            translateX: 2,
            translateY: 72,
            morphSVG: upperBlob,
          })
            .to(
              '#lower-blob',
              {
                delay: 0.02,
                duration: 2,
                ease: 'elastic.out(1, 1)',
                morphSVG: lowerBlob,
              },
              '-=100%',
            )
            .to(
              '#blobs',
              {
                translateY: -44,
                delay: 0.02,
                duration: 2,
                ease: 'elastic.out(1.5, 0.25)',
              },
              '-=100%',
            );
          return tl;
        }

        function addLines() {
          const tl = gsap.timeline();

          tl.to('#upper-sphere-lines', {
            opacity: 1,
            duration: 0.01,
            onComplete: () => {
              gsap.to('.sphere--lines-1', {
                drawSVG: '100%',
                duration: 0.75,
              });
              gsap.to('.sphere--lines-2', {
                drawSVG: '100%',
                duration: 0.75,
              });
              gsap.to('.sphere--lines-3', {
                delay: 0.25,
                drawSVG: '100%',
                duration: 1,
              });
            },
          })
            .to(
              ['#a-shapes', '#inner-a-shapes', '#b-shape-1'],
              {
                opacity: 1,
                delay: 1,
                duration: 1,
                ease: 'elastic.out(1,1)',
              },
              '-=100%',
            )
            .to(
              '#a-shape-1',
              {
                opacity: 1,
                duration: 0.05,
              },
              '-=100%',
            )
            .to(
              '#a-shape-2',
              {
                opacity: 1,
                duration: 0.05,
              },
              '-=100%',
            );

          return tl;
        }

        function splitHalves() {
          const tl = gsap.timeline({
            defaults: {
              ease: 'elastic.out(2, 1)',
              duration: 1,
            },
            onComplete: () => {
              gsap.to(['#upper-sphere-lines', '#a-shapes', '#inner-a-shapes'], {
                repeat: -1,
                yoyo: true,
                duration: 5,
                translateY: 2,
              });

              gsap.to('#upper-blob', {
                repeat: -1,
                yoyo: true,
                duration: 5,
                translateY: 44,
              });

              gsap.to('#lower-blob', {
                repeat: -1,
                yoyo: true,
                duration: 5,
                translateY: 44.5,
              });

              gsap.to('#bottom-sphere-lines', {
                repeat: -1,
                yoyo: true,
                duration: 5,
                translateY: 39.5,
              });
            },
          });

          tl.to('#upper-blob', {
            translateY: 62,
          })
            .to(
              '#a-shapes',
              {
                translateY: 18,
              },
              '-=100%',
            )
            .to(
              '#upper-sphere-lines',
              {
                translateY: 18,
              },
              '-=100%',
            )
            .to(
              '#inner-a-shapes',
              {
                translateY: 18,
              },
              '-=100%',
            )
            .to(
              '#lower-blob',
              {
                translateY: 35,
              },
              '-=100%',
            )
            .to(
              '#bottom-sphere-lines',
              {
                translateY: 30,
              },
              '-=100%',
            )
            .to(
              '#base-core',
              {
                opacity: 1,
                translateY: 42,
                duration: 1,
              },
              '<',
            );
          return tl;
        }

        function blobs() {
          const tl = gsap.timeline({
            defaults: {
              repeat: -1,
              repeatDelay: 0,
              ease: 'none',
            },
          });

          tl.to('#blob-1', {
            duration: 8,
            ease: 'none',
            motionPath:
              'M6.94,3.4C-3.89,8.82-1.62,15.77,12.68,29c6.79,6.26,22-7.75,17.74-15.66C24.16,1.84,21.55-3.9,6.94,3.4Z',
          })
            .to(
              '#blob-2',
              {
                duration: 12,
                motionPath: {
                  path: '#path2',
                  align: '#path2',
                },
              },
              '<',
            )
            .to(
              '#blob-3',
              {
                duration: 12,
                scale: 1.5,
                motionPath: {
                  path: '#path3',
                  align: '#path3',
                },
              },
              '<',
            )
            .to(
              '#blob-4',
              {
                duration: 8,
                scale: 1.2,
                motionPath: {
                  path: '#path4',
                  align: '#path4',
                  start: 1,
                  end: 0,
                },
              },
              '<',
            )
            .to(
              '#blob-5',
              {
                duration: 15,
                scale: 1.5,
                motionPath: {
                  path: '#path5',
                  align: '#path5',
                },
              },
              '<',
            )
            .to(
              '#blob-6',
              {
                duration: 18,
                motionPath: {
                  path: '#path6',
                  align: '#path6',
                  start: 1,
                  end: 0,
                },
              },
              '<',
            )
            .to(
              '#blob-7',
              {
                duration: 18,
                motionPath: {
                  path: '#path7',
                  align: '#path7',
                },
              },
              '<',
            );

          return tl;
        }
      }
    }, ref);

    return () => ctx.revert();
  }, [device]);
};

const upperBlob =
  'M212.9,61.7c4.3,6.5,23.5-9.6,27.8-3.9c2.4,3.2-8.1,13.5-9.4,15c-26.2,31.6,31.8-0.7,15.9,15.4 c-20.6,20.9,1.6,14.1,2.1,19.3s-11.7,12.1-11.1,15.3c0.9,5.1,14.2,1.2,16.1,3.5c4.7,5.6-11.5,9-14.3,22.7c-0.7,3.3,2.2,3.8,8,10.2 c4.4,4.9-7.1,0.8-12.4,6.3c-2.7,2.8-8.3,10.3-11.7,9.1c-8.2-2.9-7.9-6.4-16.2-5c-6.1,1-16,11.8-21.1,6.1 c-8.6-9.7-18.4,8.1-25.8,7.4c-8.6-0.8-23.4-24.7-30.1-13.3c-10.6,18-17.4,4.3-25.8-2.4C93.6,158.5,72,178,57.3,156.7 c-3.9-5.7-16.4,11.4-21.1,1.6c-2.5-5.1-6.1-8.8-11.4-6.3c-10.6,5.1-18.6,3.9-20.1,0.3c-3.9-9.7-0.8-13.7-3.9-23.2 c-2.1-6.4,5.4-10.8,6.4-16.6c1.4-8.2-5.9-5.8-0.4-11.5c8.4-8.8,6.6-11.6,8.4-19.2c1.8-7.4,9.1-5.7,11.2-13 c2.6-9.2,2.1-14.7,8.2-15.8c4.4-0.7,9.9-3.5,11.9-6c5.3-6.5,4.5-9.6,5-15.5c0.6-7.9,10.1,3.9,16.6,2c12.7-3.8,6.9-16.2,13.3-17 c5-0.6,14.3,14,17.8,9.9c6.9-8,10.2-16.8,15.1-10.2c11.2,15.3,20.9,1.4,29.4-4.6s9.5,9.4,15.6,10.4c4.7,0.8,18.8-11.7,22.3-10.6 c3.7,1.2-1.1,7.9,4.3,9.8c8.9,3.1,26.5-23,30.9-20.7c4.8,2.4-12.7,37-6.3,33.7C228,25.2,207.8,54,212.9,61.7z';

const lowerBlob =
  'M4.7,217.4c-0.1,4.4,0.2,16.1,1.8,22.4c1.1,4.4,5.2,7.9,5.3,14.4c0.1,3.3-0.4,9,0.9,12 c2.3,5.2,9.3,4.8,10.6,10.1c1.8,7-2.9,11.6-3.3,20.3c-0.4,9,9-4.5,11.4-2.1c5.7,6-8.6,27.6,3.1,19c10.1-7.4-5.7,23.8-2.7,27.6 c2.5,3.3,12.4-9.5,23.1-18.8c7.4-6.5-0.5,12.1,6,14.4c5.7,2,15.8-14.5,25.3-4.2c2.3,2.5,5.5,5.9,12.1,6.3c6.3,0.4,16-6.6,23.5-6.3 c6,0.3,17,2.7,22.6,2.1c7.5-0.8,9.5-5.8,16.2-7.8c8-2.5,17.8-1.6,24.6-5.6c6.1-3.5,10.3-12.4,15.5-16.8s13.8-6.2,18.1-11.4 c3.9-4.6,4.4-13.1,7.4-17.9c3.5-5.5,8.1-9.1,10.6-14.6c3.3-7.4,6.4-20.8,5.5-27.5c-0.4-3.2-6,4.2-9.3,8.4c-3.4,4.3-5.2,4.9-8.4,3.9 c-6.6-2.2-8.7-7.2-15.5-4.4s-10.7,6.6-17.2,7.7c-3.3,0.5-5.7-5.8-9.8-4.8c-9.4,2.2-15.5,13.4-22.3,9.4c-10.1-6-21.1-20.1-26.4-13.7 c-0.8,0.9-2.5,5.1-6.4,8.4c-3.5,3-7.9,2.6-11.5-0.8c-10-9.7-10.3-11.2-17.2-11c-10.2,0.4-18.2,3.8-25.8,1.4 c-14.5-4.6-11.3-10.9-15.8-10.8c-3.9,0.1-5.1,2.1-8.8,4c-4.3,2.1-8,1.7-9.6-2.3c-2.1-5.4-5.3-8.3-8.3-7.1 c-9.2,3.5-9.1,4.9-14.1,5.1C6.4,227,5,209.4,4.7,217.4z';

export default useAnimation;
