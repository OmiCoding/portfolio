import { useRef, useEffect, useContext, useMemo } from 'react';
import debounce from 'lodash.debounce';

import { gsap } from 'gsap';

import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

import AppContext from '../context/AppContext';

import {
  init,
  addLines,
  morphHalves,
  blobs,
  splitHalves,
  hover,
} from '../utils/gsapAnimations';

gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MotionPathPlugin);

const useResetAnim = function (ctx: any) {
  const { initAnim } = useContext(AppContext);

  const tl = useRef<GSAPTimeline>();

  const resizeMemo = useMemo(
    () =>
      debounce(() => {
        ctx.add((self: any) => {
          self.revert();
          self.kill();

          gsap.set('.sphere--lines-1', {
            drawSVG: 0,
          });
          gsap.set('.sphere--lines-2', {
            drawSVG: 0,
          });

          gsap.set('.sphere--lines-3', {
            drawSVG: 0,
          });

          tl.current = gsap.timeline();
          tl.current
            .add(init())
            .add(morphHalves())
            .add(addLines())
            .add(splitHalves())
            .add(hover(), '<');
        });
      }, 1000),
    [],
  );

  useEffect(() => {
    window.addEventListener('resize', resizeMemo);

    return () => {
      window.removeEventListener('resize', resizeMemo);
    };
  }, [initAnim]);
};

export default useResetAnim;
