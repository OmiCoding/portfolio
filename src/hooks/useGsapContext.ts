import { RefObject, useMemo } from 'react';
import { gsap } from 'gsap';

function useGsapContext(scope: RefObject<SVGSVGElement>) {
  const ctx = useMemo(() => gsap.context(() => {}, scope), [scope]);

  return ctx;
}

export default useGsapContext;
