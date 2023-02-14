import { useEffect, useRef } from 'react';

const useAnimation = function (device: string) {
  const ref1 = useRef<SVGPathElement>(document.querySelector('sphere__origin'));

  useEffect(() => {
    if (device === 'desktop') {
      let pTime;
      let done = false;
    
    }


    if()

    window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(animate);
    }
  }, [device]);

  /* 
    p percentComplete: (0.0 to 1.0).
    t elapsedTime: The number of milliseconds the animation has been running
    i startValue: the value to start at (or the value when the percent complete is 0%)
    e endValue: the value to end at (or the value when the percent complete is 100%)
    T totalDuration: The total desired length of the animation in milliseconds
  */

  async function animate(timestamp: number, start: number, prevTimestamp?: number) {
    if(!start) {
      start = timestamp;
    }
    const elapsed = timestamp - start;

    if(prevTimestamp !== timestamp) {
      const count =  linear(elapsed)
    }
  }

  function linear(p: number, t: number, i: number, e: number, T: number) {
    return i + (e - i) * p;
  }

  function easeInOutElastic(
    p: number,
    t: number,
    i: number,
    e: number,
    T: number,
  ) {
    return 100;
  }
};

export default useAnimation;
