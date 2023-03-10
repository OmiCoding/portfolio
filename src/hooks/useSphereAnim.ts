import { useLayoutEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import {
  init,
  addLines,
  morphHalves,
  blobs,
  hover,
  splitHalves,
} from '../utils/gsapAnimations';

gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MotionPathPlugin);

const useAnimation = function (ctx: any, initAnim: boolean) {
  const tl = useRef<GSAPTimeline>();

  useLayoutEffect(() => {
    ctx.add(() => {
      gsap.set('.sphere--lines-1', {
        drawSVG: 0,
      });
      gsap.set('.sphere--lines-2', {
        drawSVG: 0,
      });

      gsap.set('.sphere--lines-3', {
        drawSVG: 0,
      });

      if (initAnim) {
        tl.current = gsap.timeline();

        tl.current
          .add(init())
          .add(morphHalves())
          .add(addLines())
          .add(splitHalves())
          .add(hover(), '<');
      }
    });

    return () => {
      ctx.revert();
    };
  }, [initAnim]);
};

export default useAnimation;
