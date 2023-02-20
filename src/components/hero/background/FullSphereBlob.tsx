import { useContext, useRef } from 'react';

import '../../../styles/sphere.css';
import AppContext from '../../../context/AppContext';
import useSphereAnim from '../../../hooks/useSphereAnim';

const FullSphereBlob = function () {
  const { device } = useContext(AppContext);
  const svgRef = useRef<SVGSVGElement>(null);

  useSphereAnim(device, svgRef);

  return (
    <svg ref={svgRef} className="sphere" viewBox="0 0 255.6 342.2">
      <g id="a-shapes">
        <path
          id="a-shape-5"
          className="sphere__shapes sphere--color sphere--stroke sphere--width-4"
          d="M60.5,39c2.1-5.7,4.1-15.8,7.1-16.1c3.3-0.4,11.2,5.3,13.5,8.7C84.7,36.7,57.2,47.9,60.5,39z"
        />
        <path
          id="a-shape-4"
          className="sphere__shapes sphere--color sphere--stroke sphere--width-4"
          d="M87.1,30.4c2.1-5.7,6.8-10.4,9.8-10.8c3.3-0.4,8.5-0.1,10.9,3.3
		C111.3,28.1,83.8,39.3,87.1,30.4z"
        />
        <path
          id="a-shape-3"
          className="sphere__shapes sphere--color sphere--stroke sphere--width-4"
          d="M114.2,25.2c4.5-5.5,10.6-12.9,14.1-12.7c3.3,0.2,6.1,8.6,8.4,11.9
		C140.3,29.5,111.5,28.5,114.2,25.2z"
        />
      </g>
      <g id="blobs">
        <g id="base-core" className="sphere__core">
          <path
            className="sphere__goo sphere--goo-color sphere--stroke  sphere-width-1"
            d="M121.1,299.6c88.1-1,117.6-48.2,119.3-58.7c7-42.3-18.2-58.9-53.6-32.9c-29.4,21.5-53.6,8.6-67.7-10.2
		c-32.6-43.4-55.1,23.4-89.2,7.8C-0.2,192,4.2,215,8.8,237.4C11.9,252.6,58.2,300.3,121.1,299.6z"
          />
          <circle
            className="sphere__goo sphere--goo-color sphere--stroke  sphere-width-1"
            cx="28.3"
            cy="184.1"
            r="3.5"
          />
          <circle
            className="sphere__goo sphere--goo-color sphere--stroke  sphere-width-1"
            cx="166.5"
            cy="197"
            r="3.5"
          />
          <path
            className="sphere__goo sphere--goo-color sphere--stroke  sphere-width-1"
            d="M221,200.6c-3-0.5-3.1-3-2.6-6s3.7-7.3,6.7-6.8c3,0.5,5,3.3,4.5,6.3C229.1,197,224,201,221,200.6z"
          />
          <circle
            className="sphere__goo sphere--goo-color sphere--stroke  sphere-width-1"
            cx="245.1"
            cy="198.2"
            r="4.2"
          />
          <circle
            className="sphere__goo sphere--goo-color sphere--stroke  sphere-width-1"
            cx="236.9"
            cy="182.9"
            r="4.2"
          />
          <path
            className="sphere__goo sphere--goo-color sphere--stroke  sphere-width-1"
            d="M153.1,208.1c-0.4-2.5,1.1-3.9,3.6-4.3s7.6,1.1,8.7,3.7c1.4,3.1-0.9,5.7-4.1,5.6
		C157.8,212.9,153.5,210.6,153.1,208.1z"
          />
          <path
            className="sphere__goo sphere--goo-color sphere--stroke  sphere-width-1"
            d="M37.2,205.5c-5.2-2-3.3-7.4-0.6-11.1c1.5-2.2,5.5-8.2,10.7-5.6c4.2,2.1,3.3,6.1,1,10.9
		C46.5,203.2,40.9,206.9,37.2,205.5z"
          />
        </g>
        <path
          id="origin"
          className="sphere__origin sphere--stroke sphere--color sphere-width-1"
          d="M240.1,207.8c0,64.6-52.3,116.9-116.9,116.9S6.4,272.4,6.4,207.8S58.7,90.9,123.2,90.9
		S240.1,143.3,240.1,207.8C240.1,207.8,240.1,207.8,240.1,207.8z"
        />
        <g id="split" className="sphere__split  sphere--hide">
          <path
            id="lower-blob"
            className="sphere--stroke sphere--color sphere-width-1"
            d="M6.2,208.9c0.1,64.6,52.6,116.8,117.2,116.6c63-0.1,114.6-50.2,116.6-113.2C203.7,236.1,6.2,204,6.2,208.9z"
          />
          <path
            id="upper-blob"
            className="sphere--stroke sphere--color sphere-width-1"
            d="M123.6,89.9C59.1,89.9,6.2,144.3,6.2,208.9c0,43.2,224.6,47.3,233.7,3.5c0-1.1,0.4-5,0.4-6.2
			c0.1-64-51.7-116.1-115.7-116.2C124.3,89.9,123.9,89.9,123.6,89.9z"
          />
        </g>
      </g>
      <g id="top-layer" className="sphere__top-blob-half">
        <g id="inner-a-shapes">
          <path
            id="a-shape-1"
            className="sphere__shapes sphere--color sphere--stroke sphere--width-4"
            d="M207.1,58.6c-0.1,0.2-0.3,1.1,4.6,4.5c2.6,1.8,4.3,3.1,4.5,2.4c0.8-3.7,2.9-7.1,0.1-9.4
		C213.8,54.2,207.4,57.8,207.1,58.6z"
          />
          <path
            id="a-shape-2"
            className="sphere__shapes sphere--color sphere--stroke sphere--width-4"
            d="M218.6,81.8c0.8,1.5,3.8,2.6,4.9,6.4c0.8,3,4.5,3.7,5.4,2.1c2.7-5.2,4.9-7,2.3-9.7
		C227.6,77,218.5,81.5,218.6,81.8z"
          />
        </g>
        <g id="upper-sphere-lines">
          <path
            id="a-136"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M4.7,151.8c2.1-3.5,8.4-3.7,9.4-8.9c0.6-3,6-4.8,11.3,2.1c4.1,5.4,5.4-3.7,7.9-3.5
			c2,1.9,4,3.9,5.8,6.1c2,2.3,5.6-4.2,6.5-0.8c1.6,6.2,10.3,1.8,11.1,3.2s-5.1,5.6-5.5,6.8"
          />
          <path
            id="a-135"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M2.9,144.7c9.9,1.8,5.8-6.6,12.1-9.3c2.2-0.9,8.1,0.2,10.2,4.2c1.8,3.3,11.2-12.1,11.8-8.2
			c1.8,10.6,8,2.5,10.6,10.2c2.3,7.1,7.4,4.9,11.7-0.4c6-7.4,3.5,4.7,4.8,12c0.7,4-0.9,2.1-3.4,7"
          />
          <path
            id="a-134"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M2.5,139c7-0.3,7.8-16.2,2.9-21.9"
          />
          <path
            id="a-133"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M2.3,133.6c4.9-3,2.3-11.2,1.6-13.9"
          />
          <path
            id="a-132"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M25.8,123.4c0.6,0.2,1.5-0.8,1.2-2c-0.5-1.6-1.4-1.1-2-0.9s-2.9,3.2-2.6,3.9
			S25.4,123.2,25.8,123.4z"
          />
          <path
            id="a-131"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M30.1,121.8c0.1-3.8-0.9-6.2-2.5-5.2c-2.4,1.5-7.9,3.1-8.3,4.1c-0.2,0.6-0.5,4.7,1.6,6.2
			c2.1,1.4,4.8-1,5.5-0.9C27.5,126.2,30,125,30.1,121.8z"
          />
          <path
            id="a-130"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M32.5,112.8c-0.8-1.4-14.8,4.7-16.1,7.3c-0.9,1.8-2.5,5.2-0.2,7.5c3.2,3.3,8.9,2,11,1.2
			c2.7-1,4.4-2.1,4.9-3.9C32.8,122.3,33.6,114.4,32.5,112.8z"
          />
          <path
            id="a-129"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M7.2,114.2c9.9,1.8,15.3-10.2,18.8-6.7c1.7,1.7,9,0.4,11.1,4.4c1.7,3,2.9,6.3,3.5,9.8
			c1.8,10.6,5.1,13.5,13.1,12.9c8.9-0.6,13.3-8.2,14.5-2.9c2.1,9.3-2.9,7.4,4.1,18.8c2.2,3.5,4,11.8,1.6,16.6"
          />
          <path
            id="a-128"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M7.4,110.3c7-0.3,8.2-8.4,3.3-14.1"
          />
          <path
            id="a-127"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M6.8,107.5c4.9-3,2.9-6.8,2.2-9.6"
          />
          <path
            id="a-126"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M11.8,94.4c4.4-0.3,15-4,13.5-1c-4.2,8.2,1.6,4.4,3.7,8.3c1.8,3.3,6.8,2.3,14.1,3.8
			c12.3,2.6,1.2,21.7,9.2,21.1c8.9-0.7,21.3-11.3,22.5-6.1c2.1,9.3-3.9,8,3.1,19.4c2.2,3.5,5.5,4.7,3,9.5c-3.7,7.2,17,2.5,19.1,4
			c6.2,4.2,6.6,2.4,13.7,6.6c2.7,1.6,4.7-0.6,5.9-0.4c6.1,1.4,5.1,3.8,3.7,6.1c-1,1.6-8.6,0.8-8.4,3.5c0.6,7,13.2-1.4,12.1,5.6"
          />
          <path
            id="a-125"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M95.3,140.4c-0.6-1-2.8-0.9-3.8,0.9c-1.4,2.5,0.3,2.9,1.3,3.5s4-0.1,4.5-1.3
			C97.7,142.4,95.7,141,95.3,140.4z"
          />
          <path
            id="a-124"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M85.1,137.5c-2.6,3.2,1,9.3,3.8,10.8c2.5,1.3,10.1,0.2,12.1-1c2.4-1.5,6.2-5.8,5.4-7.2
			C103.3,134.3,87.9,135.5,85.1,137.5z"
          />
          <path
            id="a-123"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M62.9,116.6c1.1,0.3,2.6-1.3,2-3.4c-0.8-2.7-2.3-1.8-3.3-1.5c-1.2,0.3-5,5.3-4.5,6.6
			C57.5,119.3,62.2,116.4,62.9,116.6z"
          />
          <path
            id="a-122"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M68.8,113.1c0.7-1.4-2.7-4.1-5.6-3.8c-4.8,0.6-11.4,9.6-10.8,11.9c0.8,2.8,6.8-0.3,8.6-0.9
			C63.6,119.4,68.1,114.8,68.8,113.1z"
          />
          <path
            id="a-121"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M14.1,88.6c6.9-0.3,12.3-7.8,7.4-13.5"
          />
          <path
            id="a-120"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M14.4,85c4.9-3,6.3-6.1,5.5-8.8"
          />
          <path
            id="a-119"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M23.2,73.9c2.4,1.6,4.4,4.4,7.2,5.2c3.5,1-1.4,6.4,0.7,10.4c1.8,3.3,4.1,3,10.3,7.1
			c5.3,3.5,13.7,12.9,20,5.9c7.6-8.6,9.8,0,11,5.3c2.1,9.3,6.7,4,13.8,15.4c2.2,3.5-8.6,7.8,4.7,8.6c8.1,0.5,18.5,2.9,20.5,4.3
			c6.2,4.3-7,9.9,0.1,14.1c2.6,1.6,6.3,5.2,7.4,5.5c6.1,1.4,9,2.9,11.9,0.3c1.9-1.6,4.3-2.6,6.8-2.6c3.6-0.3,1.6,2.4,1.7,5.6
			c0.1,3.5-4.5,1-1.8,8.3"
          />
          <path
            id="a-118"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M149.4,163.1c1.1,1.8,3.2,2.9,5.3,2.5c5.1,0.7,4.5,2.1,8.3-1.4c2.6-2.4-2.9-3.1-6.1-4.4
			c-6-2.3-7.6-3.6-9.4-2.3C146.1,158.6,148.4,161.1,149.4,163.1z"
          />
          <path
            id="a-117"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M145.1,162.7c1.6,3.1,8.8,7.5,12.5,7.2c6.5,0.4,5.5-1,7.7-4.2c3.3-4.9-0.7-5.7-6-7.8
			c-9.9-3.9-12-4.9-15-2.8C142,156.7,143.5,159.5,145.1,162.7z"
          />
          <path
            id="a-116"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M24.2,73c3-0.5,5.5,2.7,10.2,0.1c2.1-1.2-0.1,7,2,11c1.8,3.3,5,4.7,11.2,8.8
			c5.3,3.5,15.2-0.3,20.3,0c8.9,0.6,14.5,6.8,15.7,12.1c2.1,9.3,2,2.3,9,13.7c2.2,3.5-8.6,7.8,4.7,8.6c8.1,0.5,18.5,2.9,20.5,4.3
			c6.2,4.2-6.3,12.9,0.8,17.2c2.7,1.6,9.3,5.1,12.1,2c4.1-4.7,2.2,4.3,9.2-6.9c1-1.5,6.9-0.6,9.4,4.9c1.7,3.6,8.8-2.6,9.2-2.4
			c6.6,3.7,7.8,11,14.7,6.9c6.5-3.9,2.7,3.5,4.7,8c1.4,3.2-5.3,5.9-2.6,13.1"
          />
          <path
            id="a-115"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M129.9,133.9c-1.1-1.1-2.5,0.7-3.1,3.6c-0.8,3.9-1.2,5.4,1.2,5.4c2.9,0,3-2.1,2.9-3.9
			C130.6,136.2,131.4,135.1,129.9,133.9z"
          />
          <path
            id="a-114"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M130.1,131.3c-4.1-0.7-6.5,1.8-6.5,5c0,2.8-0.8,8.5,1.3,9.6c2.5,1.4,7-0.7,8-2.2
			C136.4,138.1,133.6,131.3,130.1,131.3z"
          />
          <path
            id="a-113"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M116.9,121.5c0.9-0.7-1.3-3.5-3.2-4.3c-2.6-1.1-2.5-0.5-2.9,0.5s0.7,2,1.9,2.4
			C113.7,120.4,116.2,121.9,116.9,121.5z"
          />
          <path
            id="a-112"
            className="sphere--no-color sphere--stroke sphere--width-3"
            d="M109.7,121.6c2.9,1,7.1,3.6,9.6,1.9c3.3-2.2-1.6-6.4-3.3-8.1c-2-2-7.6,0.1-9.1,1.2
			C105.8,117.7,107.2,120.6,109.7,121.6z"
          />
          <path
            id="a-111"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M106.3,124c2.4,1.2,15.5,4.7,17.7,2.9c6.6-4.2-4.5-6.5-3.1-13c1-4.5-5.8-2.4-10.1-1.3
			c-8,2-9.2-1.5-10.1,1.2C100,115.9,103.8,122.8,106.3,124z"
          />
          <path
            id="a-110"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M26.2,69.3c3-0.5,4.9,1.1,7-0.3s4.1-3.8,4.7-3.7c1.7,0.4,1.3,6.4,1.2,13.8
			c-0.1,6.1,11.3,9.2,16.4,9.5c8.9,0.6,10-2.5,15.5-1.2c9.3,2.2,14.7,9.8,21.7,21.1c2.2,3.5,6.8-2.6,20.2-1.8
			c8.1,0.5,9.3,0.1,11.3,1.6c6.2,4.2,3.8,12.9,11,17.2c2.6,1.6,6.8,2.6,7.1,4.5c0.3,2.2-2.9,3-3,5.8c-0.1,3,4.5,3.8,5.4,4.3
			c6.6,3.7,7.9,0.6,15.6,3.2c6.4,2.1,8.1,6.5,12.1,5.5c3.4-0.9,4.3-4.5,5.7-4.1c2.7,0.8,2.5,11.4,4.8,20.1c1.2,4.5,5.6,9.2,12.5,6.1
			c8.8-4,4.5,0.7,5.1,1.8"
          />
          <path
            id="a-109"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M27.5,64.8c7.8,0.8,12.8-7.3,9.9-11.9"
          />
          <path
            id="a-108"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M28.1,61.2c5.5-0.8,7.3-4.8,6.9-7.8"
          />
          <path
            id="a-107"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M157.6,125.6c-0.6-1-1.7-0.4-2.7,1.4c-1.4,2.5-0.8,2.4,0.2,3c1.1,0.6,2.1-0.5,2.6-1.7
			C158,127.5,158,126.5,157.6,125.6z"
          />
          <path
            id="a-106"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M159.7,132.8c-2.4,3.7-15.1-1.8-15.6,1.7c-0.6,3.8,10.2,3.1,14.5,4.4c2.6,0.9,14.3,6.3,14.7,3.3
			c0.5-4.2-8.2-3.4-7.2-9.5c0.2-1.2,0.7-20.4-0.9-20.6C162.7,111.8,163.1,127.8,159.7,132.8z"
          />
          <path
            id="a-105"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M42.6,50.5c0,0.1-0.8,23.2,2.7,27.5c3,3.6,11.2,5.5,20.9,3.5c11.1-2.2,18.8,7.8,27.6,17.5
			c4.2,4.6,15.8,0.7,24.4-0.2c5.2-0.5,2.8,3.6,9.5,4.5c6,0.8,5.1,9.1,7.2,11.7c2.4,2.8,6.6,13.6,12.3,12c6.9-2,7.4-7.9,9.8-6.6
			c4,2.3,6-21.2,8.8-18.6c2.7,2.5,2.1,18.2,4.5,26.2c5.4,18.4,10.8,5.6,11.9,11c1.6,7.2,1.9,25.8,9,29.7c2.6,1.4,17.6-10.8,12.3,2.7
			"
          />
          <path
            id="a-104"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M128.3,92.5c-1.1-0.2-1.4,1.1-0.6,3c1.1,2.6,1.4,2.1,2.4,1.7c1.2-0.5,0.9-1.9,0.3-3.1
			C129.9,93.3,129.2,92.7,128.3,92.5z"
          />
          <path
            id="a-103"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M127.4,89.7c-2.4-0.4-3,2.3-1.2,6.5c2.4,5.6,3.1,4.5,5.3,3.6s1.5-3.9,0.6-6.5
			C131.1,91.3,129.4,90,127.4,89.7z"
          />
          <path
            id="a-102"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M148,116.3c1.4,0.5,2.7-1.9,2.2-4.7c-0.7-3.7-1.3-3.1-2.8-2.9c-1.7,0.3-1.7,2.2-1.2,3.9
			C146.7,114,147.1,115.8,148,116.3z"
          />
          <path
            id="a-101"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M145.8,100.9c1.5,0.3,1.9-2.3,1-5.1c-1.3-3.8-1.3-4.9-3.4-3.7c-2.5,1.5-1.2,4.6-0.4,6.2
			C143.6,99.6,144.6,100.5,145.8,100.9z"
          />
          <path
            id="a-100"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M148.5,104.6c1-2.9,1.2-5.9,0.7-8.9c-0.6-2.7,0.2-9.1-2.2-9c-2.9,0.1-6.8,3.3-7.3,5.1
			C137.3,99.2,146.1,107.5,148.5,104.6z"
          />
          <path
            id="a-99"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M157.6,90c-1.1-0.7-2.9,7.3-2.8,9.8c0.1,3.3,0.9,10.7,2.2,10.7c1.5,0,3.6-3.6,3.2-10.7
			C160.2,98.5,160.6,90,157.6,90z"
          />
          <path
            id="a-98"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M150.7,118.6c1.9-1.8,2.5-16.2,2.3-20.2c0-3.7,1.9-15.7-3.1-16c-4.6-0.3-11.6,1.7-13.3,5.8
			c-2.2,5-2,10.8,0.7,15.7C138.3,105.9,146.1,122.9,150.7,118.6z"
          />
          <path
            id="a-97"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M143.5,76.5c-0.7,0.8,0.9,1.5,2.9,1.9c2.8,0.4,6.3,1.8,6.5,0.7c0.2-1.2-0.2-3-6.2-3.8
			C145.5,75.3,144.4,75.7,143.5,76.5z"
          />
          <path
            id="a-96"
            className="sphere--no-color sphere--stroke sphere--width-3"
            d="M46.3,47.5c0.2,0.9,1,5.2,1.8,18.7c0.3,5.9,10.5,10.9,23.9,7.7c11.3-2.7,22.4,15.2,26.2,17.3
			c9.4,5.3,22.6-1.5,24.3-2.3c12.4-5.5,16.9-14.7,19.8-17c2.5-2,6.2,2.6,10.7,1.3c1.7-0.5,2.5-1.2,3.4-0.8c1.8,0.9,0.5,4.6,1.8,9.9
			c0.4,1.5,1.9,7.8,5.7,8.9c2.3,0.6,3.4,0.3,4.9,0.8c3.4,1.3,2,9.9,3.4,26.8c0.5,5.6,2,10.5,4.4,12.3c3.7,2.7,7.1-2.4,9.9,0.3
			c2.7,2.5,0,6.5,1,15.1c0.6,4.4,1.4,11.5,6.3,14.1c4.5,2.5,11.3-2.7,14.9-0.5c2.5,1.5,0,6.5-0.3,9.6"
          />
          <path
            id="a-95"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M140.6,64.1c-1.1-0.2-1.4,1.1-0.6,3c1.1,2.6,1.4,2.1,2.5,1.7s0.9-1.9,0.3-3
			C142.3,64.9,141.5,64.3,140.6,64.1z"
          />
          <path
            id="a-94"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M114,75.4c0,1.6,2.7,1.3,5.2-0.3c3.3-2.2,4.4-2.5,2.7-4.2c-2-2-4.7,0-6.1,1.2
			C114.7,72.9,114.1,74.1,114,75.4z"
          />
          <path
            id="a-93"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M112,80.2c2.4,1.2,4.1,0.8,6.3-1.1c6.6-4.2,6.9-2.5,8.3-9c1-4.5-5.8-2.4-10.1-1.3
			c-8,2-7.2,2-8.1,4.6C107.6,75.5,109.4,78.9,112,80.2z"
          />
          <path
            id="a-92"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M108.2,83c3.9,2,8.6,2,12.3-1.1c7.1-4.5,9-5.1,11.2-12.7c2-7.3-7.1-6.1-14.1-4.3
			c-13.2,3.4-11.9,5.3-13.4,9.8C102.9,78.1,104,80.8,108.2,83z"
          />
          <path
            id="a-91"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M90.6,66.1c-1.5,0.5-1.1,2.2,1.2,4.1c3,2.6,3.1,1.7,4.1,0.6c1.2-1.3,0-2.9-1.6-4
			C93.2,66.1,91.9,65.8,90.6,66.1z"
          />
          <path
            id="a-90"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M86.7,69.1c-0.1,2.7,2,2.1,3.7,4.4c2,2.9,4.7,3.3,7.3,1.3c3.4-2.6,4.3-4,1.3-7.2
			c-3.5-3.9-4.6-4.3-7.4-4C88.9,64.1,86.9,66.3,86.7,69.1z"
          />
          <path
            id="a-89"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M104.7,65.5c-5.4-1.3-8.9-8.4-13-5.5c-5.1,3.7-12.6,2.7-12.3,6.8c0.1,1.4,2.4,4.7,9.3,9.9
			c6.3,4.8,11.8,1.4,11.3,6.1c-0.2,2.1,4.7,5.8,12.4,4.7c7.9-1.1,23.7-8.3,22-13.6c-0.7-2.2,4.4-8.6,2.2-12c-2.3-3.6-7.8-0.9-12-3.1
			C114.7,53.6,111.7,67.2,104.7,65.5z"
          />
          <path
            id="a-88"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M49.8,43.1c8.3,3.1,15-6.5,13.3-9.8"
          />
          <path
            id="a-87"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M51,36.2c3.4,2.3,8.2-1.7,7.8-4.7"
          />
          <path
            id="a-86"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-1"
            d="M64.3,27.6c3.1,2,8.2-0.4,8.5-2.9"
          />
          <path
            id="a-85"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M76.2,27.5c4.1,2,11.7,1.1,15.9-2.9"
          />
          <path
            id="a-84"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M77.6,22.4c3.4,2.3,7.8-0.3,9.5-2.1"
          />
          <path
            id="a-83"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M61.3,55.5c3.4,2.3,20.9-2,23.7-10.8"
          />
          <path
            id="a-82"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M60.5,48.7c1.7-0.1,3.3-1,4.4-2.3"
          />
          <path
            id="a-81"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M69,44.4c3.4,2.3,11.7-0.7,11.3-3.7"
          />
          <path
            id="a-80"
            className="sphere__thick-lines sphere--no-color sphere--stroke sphere--width-4 sphere--lines-1"
            d="M61,63.7c1.5-1.2-1.7-15.5-0.7-18.6s6.2,4.8,7.3,1.6c1.1-3.4,2.5-6.2,4.4-7.5
			c5.5-3.5,11.7,4.7,16.6,8.2"
          />
          <path
            id="a-79"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M108.7,55.3c3.4,2.3,15-1.1,15.6-6.2"
          />
          <path
            id="a-78"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M110.3,50.4c3.4,2.3,8.3-1.3,10-3.1"
          />
          <path
            id="a-77"
            className="sphere__thick-lines sphere--no-color sphere--stroke sphere--width-4 sphere--lines-1"
            d="M104.9,60c5.2-5,5.4-14.3,8.8-15.2s8.4,4.9,18.1,6.5"
          />
          <path
            id="a-76"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M88.6,49c3.4,2.3,15.8-1.8,16.6-5.5"
          />
          <path
            id="a-75"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M90.7,43.2c3.4,2.3,8.3-1.3,10-3.1"
          />
          <path
            id="a-74"
            className="sphere__thick-lines sphere--no-color sphere--stroke sphere--width-4 sphere--lines-1"
            d="M84.7,53.5c5.7-4.5,4.8-14.5,10.5-16.2c3.3-1,7.6,6.5,16.2,9.7"
          />
          <path
            id="a-73"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M84.5,34.5c3.4,2.3,12.1-0.4,11.7-3.4"
          />
          <path
            id="a-72"
            className="sphere__thick-lines sphere--no-color sphere--stroke sphere--width-4 sphere-lines-1"
            d="M81.5,37.8c2.4-0.8,3.3-6.8,8.7-7.9c3.9-0.9,6.2,1.7,12.2,3.6"
          />
          <path
            id="a-71"
            className="sphere--no-color sphere--stroke sphere--width-3"
            d="M105,37.9c5.9,1.6,22.6,3.3,24.9-0.5"
          />
          <path
            id="a-70"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M107.3,33.4c5.9,1.6,17.3,3.5,18.9,1"
          />
          <path
            id="a-69"
            className="sphere__thick-lines sphere--no-color sphere--stroke sphere--width-4 sphere--lines-1"
            d="M101.5,40.9c5.6-2.2,4.3-11.4,11-11c16.6,0.9,11.1,3.9,20,9.4"
          />
          <path
            id="a-68"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M101,25c7.5,2.2,17.1,3.7,20.9-1.9"
          />
          <path
            id="a-67"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M102.9,22.2c6.6,0,12.4,4.9,16.4-0.2"
          />
          <path
            id="a-66"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M105.6,18.5c3.9-0.7,8,3.8,10.6,0.7"
          />
          <path
            id="a-65"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-1"
            d="M122.2,16.5c2.6,1.6,7.4,1.9,10.2,0.4"
          />
          <path
            id="a-64"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M123.2,23.2c-0.4,1.2-0.1,3.4,0.8,3.9c7.3,3.6,2.2,2.4,7.4,6.3c10.4,7.9,1.6,17.4,6.5,22
			c5.3,4.9,8,12,12.6,13.8c3.8,1.5,5.9-1.4,8.4,0.1c3.4,2.1,1.7,7.4,3.5,14c2.4,8.7,6.3-0.9,10.3,6.9c6.8,13.2,1.8,31.4,7.4,35
			c4.2,2.6,7.8,0.5,11.6,3.3c4.7,3.5-0.8,14.3,2.7,22.6c1.9,4.4,9.9,7.6,15.9,1.6c4.1-4.1,6.3,7,3.6,17"
          />
          <path
            id="a-63"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M125,23.6c-0.2,1.8,6.1,3.6,10.4,7.2c4.5,3.9,5.5,19.9,6.7,21.8c2.3,3.7,4.6,6.7,7.1,8.3
			c2.7,1.7,5.4,3.2,7.3,2.8c4.1-0.9,6.9-0.1,7.4,1.3c0.8,2.5,1.3,5.1,1.5,7.7c0.7,8.2,8.3,7.2,10.1,10.2c3.6,6.2,1.5,11.2,4.1,13.3
			c3.2,2.5,4.7,9.7,4,13.3c-3.1,16.2,9.1,11.4,11.7,14.2c2.5,2.6,1.6,12.9,1.6,14.6c-0.1,7.7,1.9,11.8,4.7,12.7
			c5.8,2.1,9.7-6.6,10.8-11.5c0.2-0.9,0.4-1.9,0.5-2.8c0.4-3.8,1.4-7.9,5-0.1"
          />
          <path
            id="a-62"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M208.2,129.2c-1.2-1.1-2.8-2.2-3.3,0.6c-0.7,3.9-2,12,0.4,11.9c2.9-0.1,4-7.1,4.1-9
			C209.5,131.5,209.1,130.2,208.2,129.2z"
          />
          <path
            id="a-61"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M203,126.6c-2.1,1.6-2.9,7-2.2,9.9c0.8,7.7,0.1,10.4,3.1,10.7c3.6,0.3,5.8-4.6,6.8-8.9
			c1.8-8.1,0.6-9.1-1.4-11.1C207.7,125.4,204.9,125.1,203,126.6z"
          />
          <path
            id="a-60"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M193,102.1c-0.9-0.8-2.2-1.7-2.6,0.5c-0.5,3-1.5,9.2,0.3,9.2c2.2-0.1,3.1-5.5,3.2-6.9
			C194,103.8,193.7,102.8,193,102.1z"
          />
          <path
            id="a-59"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M191.8,98.4c-2.7-0.1-5.7,6.1-4.4,11.9c0.7,3.5,1.8,6.9,4,6.6c3.1-0.4,4.6-9.8,4.5-14.4
			C195.8,100.6,193.5,98.4,191.8,98.4z"
          />
          <path
            id="a-58"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M149.7,44.4c-1.6,0-1.3,2.7,0.3,5.2c2.2,3.3,4.4,7.7,6.1,6c2-2-1.9-7.9-3.1-9.4
			C152.3,45.2,151,44.5,149.7,44.4z"
          />
          <path
            id="a-57-2"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M143.6,45.3c-0.4,2.6,2.2,6.9,4.8,8.4c6.1,4.8,2.8,6.5,9.4,5.8c4.5-0.5,2.2-7.1-0.2-10.8
			c-4.5-6.9-7-7.6-9.8-7.6C145.4,41.1,144,42.5,143.6,45.3z"
          />
          <path
            id="a-57-1"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M220.9,136.8c0.1,0.4-2-9.9-14.8-14.4c-5.8-2-4.9,1.5-8.8-1.3c-2.4-1.7-0.8-11.6,0.8-16.7
			c0.6-1.8,0.8-7.5-1-9.3c-2.4-2.3-7.3,0.5-11.2,2.9c-4.3,2.6-3.7-13.5-4.7-15.3c-1.8-3.4-8.1-7-11.9-12.4c-2-2.8,5.1-2.8-2.9-10.2
			c-1.4-1.3-0.9-6.6-3.2-9.5c-4.4-5.5-6.6-13-13.6-13.9"
          />
          <path
            id="a-56"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M197.6,68.6c-3.5,0.1-5.3,2.2-4.2,4.1c2.2,3.8,3.5,2,7.5,4.7c1.5,1,5.2,0.1,6.2-0.3"
          />
          <path
            id="a-55"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M205.1,74.3c1.6-0.4,1.1-2.6-0.6-4.2c-2.5-2.2-4.9-1.6-6.1-0.7c-1.5,1.2-0.4,2.7,0.6,3.3
			C199.7,73.2,203.6,74.8,205.1,74.3z"
          />
          <path
            id="a-54"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M181.9,55.8c-2.1,2.7,0.7,4.1,0.8,7.1c0.1,4.3,1.5,4.2,4.6,5.8s4.3,7.4,4.6,8.7
			c1,4.2,5,2.6,7.6,4.8c4.1,3.6,7.2,1.7,8.2,0.4"
          />
          <path
            id="a-53"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M190.5,59.2c-1.1-4-2.8-6-4.8-5c-0.7,0.4-0.6,1.7,1.2,5.5C190.1,66,191.5,62.6,190.5,59.2z"
          />
          <path
            id="a-52"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M219,136.8c1,8.4,7.6,22.1,8.7,24.9"
          />
          <path
            id="a-51"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M223.6,137.8c1,8.4,5.5,18.5,6.7,21.2"
          />
          <path
            id="a-50"
            className="sphere__thick-lines sphere--no-color sphere--stroke sphere--width-4 sphere--lines-1"
            d="M215.1,135c7.1,4,13,1.4,14.2,6.7c2.1,9.2,4.5,11.4,3.9,13.8c-0.4,1.6-4.3,5.1-8.6,9.2"
          />
          <path
            id="a-49"
            className="sphere__thick-lines sphere--no-color sphere--stroke sphere--width-4 sphere--lines-1"
            d="M222.4,121c2.9,0.4,12.8-0.1,14.9,4.9c2.7,6.5-2.7,11.1-7.1,19.5"
          />
          <path
            id="a-48"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-1"
            d="M229.6,121.6c-1.5,7.7-0.4,12.9,2.4,19.9"
          />
          <path
            id="a-47"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M233.8,123c-1.8,4.8,0.3,10.9,2.1,12.6"
          />
          <path
            id="a-46"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M228.5,121.6c-1-2.7-1.4-5.3-4.6-9.5c-1.7-2.9-4.1,0.5-6.1,6.1c-2.5,7.1-20.4-0.4-17.1-10.2
			c2.1-6.2,0.3-10.3,0.3-15.8c0-5.3-6.7-3.1-8.1-2c-11.6,9.5-4.1-6.9-8.3-11.2c-4.9-4.4-10.1-6.7-8.9-9.9c2.1-5.5-6.5-8.1-6.4-12
			c0-1.9,3.4-2.7,7.6,1.3"
          />
          <path
            id="a-45"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M228.5,106.8c2.1,2.7,2.6,7.8,4.7,10.6"
          />
          <path
            id="a-44"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M234.1,105.9c2.7,3.1-1.2,5,1.5,8.1"
          />
          <path
            id="a-43"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M210.6,84.7c-4.3,14.4-3.9,21.8-1.5,27.6c1.1,2.6,6.1,7.7,8,2.4c5.2-14,8.7-9.4,8.8-10.2"
          />
          <path
            id="a-42"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M213.2,84c-1,0.3,0.5,3.3-0.2,6.5c-0.3,3.7-4.1,16,1.1,20.2c3.6,2.9,5.8-7,7.7-11
			c1.4-2.2,3.2,0,3.7,0.5"
          />
          <path
            id="a-41"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M219.1,92.1c-1.2-1-2.8-2.2-3.3,0.7c-0.7,3.9-2,12,0.4,11.9c2.9-0.1,4-7.1,4.2-9
			C220.5,94.3,220,93,219.1,92.1z"
          />
          <path
            id="a-40"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M206.7,74.3c1.9,1.5,5.5,2.2,5.6,1.8"
          />
          <path
            id="a-39"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M191.2,63c1.4,1.7,4.9,3.6,6.4,5.6"
          />
          <path
            id="a-38"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M200.1,62.6c-1.4,0.7,1.7,3.2,2.1,6.2"
          />
          <path
            id="a-37"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M203.7,60c-1.9,1,3,3.9,4.7,8.7c1,2.7,5.7,2.3,6,1.4"
          />
          <path
            id="a-36"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-1"
            d="M175.4,59.5c2.5-1.6,10.6-6.3,12-5.5c2.7,1.6,3.5,5.5,4.3,12.9c0.4,4.1,9-0.5,12.7,3.2
			c1.6,1.7,2,2.1,2.9,7.5c0.3,2.6,0.3,5.3,0.1,7.9c-0.1,0.9-0.1,1.9-0.4,3.4"
          />
          <path
            id="a-35"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M158.1,34.6c0.1,0,0,0.2,0,0.3c-0.4,2.1,6.6,6.5,10.3,13c3.5,6.1,11.1,5.7,11.4,8.9"
          />
          <path
            id="a-34"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M162.4,32.8c-3.4,0.8,12,11.6,11.7,9.1"
          />
          <path
            id="a-33"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M179.3,48.2c2.8,0.7,3.9,4.4,5.5,6.1"
          />
          <path
            id="a-32"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M183.8,44.9c-1.6,1.1,8.1,2.9,8,6c-0.1,2.9,3.7,4,4,3"
          />
          <path
            id="a-31"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M191.1,39.5c-0.2,1,3.1,2,3.4,4.6c0.4,3.1,3.6,3.2,3.7,2.8"
          />
          <path
            id="a-30"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-1"
            d="M233.2,140c2.7,5.7,3.5,14.2,0.7,27.2"
          />
          <path
            id="a-29"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-1"
            d="M240.4,152.4c-1.7,1.2-4.6,7.6-1.4,11.2"
          />
          <path
            id="a-28"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-1"
            d="M244,155.9c-0.8,0.4-2.5,3.7-0.2,6.7"
          />
          <path
            id="a-27"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-1"
            d="M236.6,134.7c1.2,5.2,2,8.6,3.9,12.4"
          />
          <path
            id="a-26"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-1"
            d="M233,118.4c0.3,1.5,1.9,2.3,1.4,4.6"
          />
          <path
            id="a-25"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-1"
            d="M242.9,125.8c2.1,3.5-0.6,9.8,3.3,12.5"
          />
          <path
            id="a-24"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-1"
            d="M250.3,125.9c0.1,1.7-2.7,4.4,1.6,7.3"
          />
          <path
            id="a-23"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-1"
            d="M240.5,103.8c-2.6,2.7,0,13.8-1,16.5"
          />
          <path
            id="a-22"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-1"
            d="M244.9,104.9c-2.6,2.7-0.3,6.4,0.1,9.8"
          />
          <path
            id="a-21"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-1"
            d="M226.6,94.4c1.6,2.3,2.8,6.5,4,11.7"
          />
          <path
            id="a-20"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-1"
            d="M232.4,87.3c-2.3,5.5,5.3,5.5,6.9,11.1"
          />
          <path
            id="a-19"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-1"
            d="M240.7,85.4c-2,3.8,3.6,3.8,3.2,6.3"
          />
          <path
            id="a-18"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-1"
            d="M210.9,80.1c2.7,1.6,2.8,1.2,4,3.2"
          />
          <path
            id="a-17-2"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-1"
            d="M216.6,63.9c4.9,8.1-0.9,12.5,6.5,15.9"
          />
          <path
            id="a-17-1"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-1"
            d="M224.2,61.4c-0.6,0.2,5,1.9,4.3,5.9c-0.6,3.5,1.8,6.7,3.3,5"
          />
          <path
            id="a-16"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-1"
            d="M233.4,58c-0.8,0.3,1.3,1.9,0.9,4.4c-0.3,1.9,3.7,2.2,4.7,1.8"
          />
          <path
            id="a-15"
            className="sphere__thick-lines sphere--no-color sphere--stroke sphere--width-4 sphere--lines-1"
            d="M141.2,38.3c16.3-1.9,28.8-10.4,32.1-5.5c1.3,1.9-0.8,20.3,6.3,15.4c10.4-7.3,17.5-15.1,19.8-12
			c3.9,5.4-6.4,15.1-3.5,26.5c0.6,2.4,4.5-0.6,5.7-1.2c5.6-2.9,12.9-8.9,15.6-4.4c2.5,4.2-10.1,28.8-6,27.7c5.2-1.3,13.9-7.3,18.6-5
			c8,3.8-8.3,14.3-3,26c1.3,2.8,12-3,12.3,2.6c0.2,4.4-5.9,4-6.5,13.8"
          />
          <path
            id="a-14"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-1"
            d="M127.1,23.2c22.5,11.1,19.8-3,27.6,11.9"
          />
          <path
            id="a-13"
            className="sphere__shapes sphere--color sphere--stroke sphere--width-4 sphere--lines-1"
            d="M195.6,56.8c1.9,1.4,3.5,3.3,4.4,5.5"
          />
          <path
            id="a-12"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-1"
            d="M174.1,40.2c2,1.4,4.6,4.6,7.2,6.7"
          />
          <path
            id="a-11"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-1"
            d="M134.8,19.1c-0.2,0.1,12.3,0.9,28,13.6"
          />
          <path
            id="a-10"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-1"
            d="M141.1,13.9c-1.1,1.1,13.9,2.4,11.4,0.8"
          />
          <path
            id="a-9"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-1"
            d="M197.7,48.7c7.4,5.1,14.1,7.5,14.6,6.1"
          />
          <path
            id="a-8"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-1"
            d="M163.5,21.4c-0.5,0.2,12.5,3.8,19.6,13.5c1.6,2.2,3.4,4.3,5.3,6.2"
          />
          <path
            id="a-7"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-1"
            d="M200.3,40.2c1.4,1.1,2.8,2.4,4,3.7c3.9,4.6,9.1,6.2,9.9,4.2"
          />
          <path
            id="a-6"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-1"
            d="M170.5,17.6c-0.2,0.1,11.1,3.8,16.4,11.2c1.8,2.6,5.5,5.5,8.1,7.5"
          />
          <path
            id="a-5"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-1"
            d="M176.4,13.8c-1.5,0.8,7.6,6.5,6.7,3.6"
          />
          <path
            id="a-4"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-1"
            d="M211.9,33.7c-1.6,0.6,5.1,8.8,5.6,4"
          />
          <path
            id="a-3"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-1"
            d="M192.7,20.1c-0.5,0.2,7.3,1.3,7.4,7.1c0.1,6,8.6,8.7,8.8,6.2"
          />
          <path
            id="a-2"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-1"
            d="M198.4,16.1c-0.4,0.3,6.1-0.7,6.6,3.2c0.7,5,4.7,10.7,5.5,8.2"
          />
          <path
            id="a-1"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-1"
            d="M206.4,8.3c1.3-1.8,4.3,1.4,4.1,5.1c-0.3,4,1.9,8.3,2.8,5.8"
          />
        </g>
      </g>

      <g id="bot-layer" className="sphere__bot-blob-half">
        <g id="bottom-sphere-lines">
          <path
            id="b-69"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M119.5,297.7c-4.9,0.7-7.2-4-3.4-5.1c2.8-0.8,13.4,1.4,23.4-1.4c11.5-3.1,12.8,4.3,24.2,3.1
			c22.6-2.2,31-3.3,32.1,4.5c0.4,2.7-2.4,5-5.5,5"
          />
          <path
            id="b-68"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M122.1,301.9c16.4-6.9,61.5-1.9,68.4,0.7"
          />
          <path
            id="b-67"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M175.6,311c1.7-4.1,9.7-5.4,12.6-3.1"
          />
          <path
            id="b-66"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M177.1,313.6c2.4-2.2,5.3-2.2,8.2,0"
          />
          <path
            id="b-65"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M165.7,309.9c2.4-1.5,4-1.2,5.9,0.5"
          />
          <path
            id="b-64"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M126.2,309.7c7-5.1,33.1-7.8,36.6,0.2"
          />
          <path
            id="b-63"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M146.4,314.9c3.9-2.5,8.9-3.6,13.7,0.5"
          />
          <path
            id="b-62"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M148.7,320.2c2.5-2.7,6.6-3.2,9.6-1"
          />
          <path
            id="b-61"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M233.1,241.4c3.4,3.9-1.2,4.3,1.9,7.4c2.9,2.9-3.3,3.3-1.3,6.5c0.9,1.4,2.3,2.1,3.5,3.9"
          />
          <path
            id="b-60"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M226.6,250.9c-2.2,2.4-1.8,8.5,0,10.3"
          />
          <path
            id="b-59"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M221.8,248.2c-2,6.9-3.3,7.9-0.2,15.3"
          />
          <path
            id="b-58"
            className="sphere__thick-lines sphere--no-color sphere--stroke sphere--width-4 sphere--lines-1"
            d="M217.3,245.5c2.4,1.8,13.4,6.3,13.6,10.5c0.1,4.7-6.2,5.4-13.9,10.7"
          />
          <path
            id="b-57"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M208.6,240.9c-0.5,5.1-6.6,10.5-0.6,12.1c3.9,1-2,7.8,1.7,10.1c2.9,2.5,5.3,5.6,7,9.1
			c1.4,3.3,8.1,4.1,8.6,4.9"
          />
          <path
            id="b-56"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M222.7,284.2c-1.4-0.6-3-0.4-4.3,0.4c-2,1-3.2-2.1-3.6-3.5c-1.2-3.4-4.3-1.6-4.7-2.5
			c-1.8-3.8-2.8-8.4-5-9.5c-5.5-2.9-4.9-0.8-9.1-3.4c-3.4-2.1-1.1-6.2-2.9-7.4c-6.6-4.5,4.2-3.4,3.8-10.6"
          />
          <path
            id="b-55"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M218.9,293c-1.7-0.8-3.1-2.2-3.8-4c-0.7-1.9-4.7-1.2-6.1-1.4c-2.5-0.5-5.6-8.2-5.4-9.1
			c1.6-5.4,0.5-5.2-1.7-6.4c-5.5-2.9-6.3,0.8-10.6-1.8c-3.4-2.1-1.5-6.1-3.3-7.3c-6.6-4.5-1.8-10.7-2.2-17.9"
          />
          <path
            id="b-54"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M148.4,248.5c-0.6-1-2.8-0.9-3.8,0.9c-1.4,2.5,0.3,2.9,1.3,3.5s5.9,2.6,6.4,1.4
			C152.7,253.3,148.7,249.2,148.4,248.5z"
          />
          <path
            id="b-53"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M159.6,260.5c-1.1,0-1.3,1.2-0.3,3.1c1.4,2.5,1.6,1.9,2.6,1.4c1.1-0.6,0.7-2,0-3.1
			C161.4,261.2,160.5,260.6,159.6,260.5z"
          />
          <path
            id="b-52"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M157.6,256.8c-1-0.5-1.8,3.5-1.7,5.6c0.2,2.8,4.5,6,5.6,6c1.3-0.1,4.5-1.7,4.3-3
			c-0.7-1.9-1.7-3.7-3-5.2C161.3,258.7,159.5,257.6,157.6,256.8z"
          />
          <path
            id="b-51"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M174.4,247.8c1.1,2.1,1.8,4.4,2.2,6.8c0.4,2.2-1.7,3.1-4.7,6.1c-1.4,1.4-0.8,4.1-0.5,4.8
			c0.5,0.9,0.5,1.9,0.1,2.9c-1.3,2.5-4.9,4.5-5.9,4.4c-3.4-0.3-6.2,0-8.4-1.2c-5.5-2.9-7-2.1-6.4-7c0.4-3.1-5.2-6.2-7-7.4
			c-6.5-4.5-1.8-10.7-2.2-17.9"
          />
          <path
            id="b-50"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M141.4,267.4c-0.6-1-5,0.7-6.1,2.5c-1.4,2.5,3.6,4.4,4.5,4.9c1.1,0.6,6.7,1.8,7.2,0.6
			C147.5,274.4,141.7,268.1,141.4,267.4z"
          />
          <path
            id="b-49"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M179.3,244.8c0,0,2.3,9.6,1.6,11c-1.1,2-2.5,4.6-3,5.6c-0.9,1.8-1.7,3.9-1.3,4.7
			c0.7,1.1,0.8,2.4,0.5,3.6c-0.4,1.3-1.9,2.3-3.6,3.6c-3.3,2.5-11.8,1.6-14.3,1.4c-5.9-0.6-10.4-2.2-11.2-3.3
			c-1.8-2.6-3.7-7.1-5.1-7.5c-3.5-1-6.8,2-7.8,2.4c-2.3,1-4.9,6.6-3.5,8.7c0.9,1.4,2.5,4.5,23.7,4.9c6.5,0.1,12.4-0.6,22.7-0.6
			c16.5,0.1,19.5,1,21.5,3.3c2.5,2.9,1.7,5.6,5.9,11c1.4,1.8,3.1,3.5,4.9,4.9"
          />
          <path
            id="b-48"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M98.1,242.5c-0.6-1-2.8-0.9-3.8,0.9c-1.4,2.5,0.4,2.8,1.3,3.5c2.8,2.3,7.6,4,4.5-1.3
			C99.5,244.6,98.4,243.2,98.1,242.5z"
          />
          <path
            id="b-47"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M91.4,240.8c-1.5,0.5-1,4.8,1.3,6.6c3.8,3,9,5.8,10.2,3.7c1.4-2.5,0.8-9.1-0.8-9.9
			C99.6,240,93.2,240.1,91.4,240.8z"
          />
          <path
            id="b-46"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M110.5,258.7c3.7,0.6,2.2-3.2,3.5-4.8c1.2-1.1,1.3-3,0.1-4.2c-0.1-0.1-0.3-0.3-0.4-0.4
			c-1-0.8-4.8-3.4-5.5-2.4c-0.3,0.5-4.9,8.4-2.4,10.9C107.7,259.7,107.6,259.5,110.5,258.7z"
          />
          <path
            id="b-45"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M84.8,238.4c-2.8,5.9,2.7,5.5-1.3,9.9c-0.4,0.5-4.4,0.9,1.8,6.3c5.6,4.9,6.9-2.4,9.5-1.8
			c1.8,0.4,4,9.8,5.2,13.5s3.4-3,5.1-2.4s2.1,5,4.4,3.9c3.1-1.2,5.2-4.1,5.5-7.4c0.6-8.4,9.2,1.8,11.7,0.7c1.5-0.7,3.8-8.3,0.5-13.3
			"
          />
          <path
            id="b-44"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M80,238.6c-3.7,7.8,1.8,7.4-2.5,14.1c-1.8,2.9-0.8,4.7,6.2,6.3c4.6,1,6.4-0.3,9.7,0.5
			c1.7,0.4,0.8,8.7,1.6,12.8c1.4,6.9,9.1-0.4,11.9,0.6c4.7,1.7,11.2-14.3,15.9-6.1c3.3,5.9,7.1-1.6,10.4-3.1c1.2-0.6,7-3.8,2.4-8.4
			c-2.7-2.7-1.6-8.3-3.9-12.5"
          />
          <path
            id="b-43"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M64.1,248c1.3-3.4-1.1-4.5-1.7-6.5c-0.8-2.7-2.3-1.8-3.3-1.5s-5.1,2.1-4.8,3.4
			C54.7,245.7,62.8,248.4,64.1,248z"
          />
          <path
            id="b-42"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M68.9,247.4c-0.5-1.9-6.8-8.7-7.2-9.9c-0.5-1.6-7.5,1.7-8.1,2c-2.2,1-1.3,6-1,6.8
			c0.1,0.4-0.5,6.4,5.6,3.1c1.2-0.7,3.1,2.7,4.4,2.1C63.2,251.2,70.3,250.7,68.9,247.4z"
          />
          <path
            id="b-41"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M44.9,243.1c1.8-0.9-0.1-2.1,1-4.3c1-2,2.9-3,2.7-3.5c-0.5-1.6-3.6,0.2-4.3,0.2s-2.3,1.8-2.2,4.1
			C42.2,241.4,42.3,244.1,44.9,243.1z"
          />
          <path
            id="b-40"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M35.2,238c-0.5-1.9-0.9-2.7-1.3-3.9c-0.5-1.6-5.8-3.6-6.4-3.3c-2.2,1,0.4,5.1,0.7,5.9
			c1,2.1,2.4,4,4,5.7c1.3,0.9,2.9,1.1,4.3,0.5C37.2,242.5,36.6,241.3,35.2,238z"
          />
          <path
            id="b-39"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M23.2,230.6c-1.1,1.7,1.6,5.8,2.9,7.6c2.4,5.2,7.6,8.6,13.3,8.5c3.5-0.2-2.3-7.9-2.8-11.2
			c-1-6.3-3.4-5.4-5.4-6.3C29.7,228.4,24.4,228.8,23.2,230.6z"
          />
          <path
            id="b-38"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M53.8,227.8c0.1,1.4,5.5,6.3,1.4,7.4c-2.9,0.8-10.3,6.9-6.9,10.3c1.7,1.7-1.2,7.6-6.1,5.7
			c-5.6-2.1-12.8-1.6-14.5-3c-5.3-4.7-5.7-11.9-8.4-11.1c-1.7,0.5-8.1,2.1-5.5-3c2.4-4.6-3.1-4.8-8.6-4.2"
          />
          <path
            id="b-37"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-3"
            d="M61.2,257.4c1.8-0.9-1.3-4-2-4s-3.1-0.6-2.9,1.8C56.4,256.9,58.7,258.4,61.2,257.4z"
          />
          <path
            id="b-36"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M67.7,236.2c-1.4,3.3,7.7,3.6,5.1,6.5c-3.6,4,3.7,5.7,2.2,8.1c-0.7,1.2-4.1,2-8.5,4.8
			c-1.9,1.2-1.8,6.6-4.7,5.9c-5.3-1.3-8.2-1.1-9.5-4.4c-1.8-4.7-8.5-2.1-14.1-2.7c-4.8-0.5-8.2,1.4-10.3-0.6
			c-5.9-5.7-6.9-5.1-6.5-5.9c1.2-2-3.1-3.3-8.8-3.1c-2.4,0.1-5-7-6.3-6.4"
          />
          <path
            id="b-35"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M12,258.4c2.1-0.3,5.5-1,6.9-0.5"
          />
          <path
            id="b-34"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M12.4,263.5c2.1-0.3,4.9-1,6.3-0.5"
          />
          <path
            id="b-33"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M19.1,254.5c17.4,5.1,25,7.8,39.9,9.8c2.6,0.3,9,6.3,9.4-0.3c0.3-3.6,2.5-4.5,4.8-4.8
			c3.5-0.5,4.2,4.4,8.7,5.7c2.6,0.8,4.8-0.9,7.8,0.1c2.7,0.9-0.5,12,2.3,13.2c12.7,5.2,7.2,0.5,16.3-1.2c9.7-1.8,8.2-5.4,12.9-5.2
			s-1.3,9,5.6,9.9c21.5,3,61.6,0.9,69.1,5.7c4.8,3,6.4,11.7,8.1,14.7"
          />
          <path
            id="b-32-a"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M18.8,265.2c4.3-1.6,10.3,1,13,6.5"
          />
          <path
            id="b-32"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M19.3,259.2c33.3,8.8,66.1,16.2,97.4,42.8"
          />
          <path
            id="b-31"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M111.2,305.9c-19.1-15.6-38.9-26.9-77-30.9"
          />
          <path
            id="b-30"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M93.5,307.8c3-2,11-1.3,12.1,2.2"
          />
          <path
            id="b-29"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M69.7,299.2c5.5-5.7,15.9-1.6,18.5,4.3"
          />
          <path
            id="b-28"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M69.9,304.8c3-2,13.1,0,14.3,3.5"
          />
          <path
            id="b-27"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M70.3,310.2c3.4-0.6,8-0.7,9.2,2.8"
          />
          <path
            id="b-26"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M33,283.2c9.2-3.6,32.4,3.2,33.5,9.6"
          />
          <path
            id="b-25"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M32.8,288.7c9.2-3.6,29.2,3.1,30.3,6.6"
          />
          <path
            id="b-24"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M44.7,297.2c3-2,12.3-0.5,13.5,3"
          />
          <path
            id="b-23"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M44,303.2c3-2,7.3-0.9,8.5,2.6"
          />
          <path
            id="b-22-a"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M187.3,310.8c2.9-0.4,4.7-0.8,8.2,0"
          />
          <path
            id="b-22"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M183.9,316.1c2.9-0.4,3.6-1,7.2-0.2"
          />
          <path
            id="b-21"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M161,313.6c2.9-0.4,12.9,1,16.5,1.8"
          />
          <path
            id="b-20"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M135.6,313.5c2.9-0.4,6,0.3,9.9-0.2"
          />
          <path
            id="b-19-a"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M111.9,305.4c2.9-0.4,8.2,0.5,11.7,1.3"
          />
          <path
            id="b-19"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M104,311.7c4.4-1.4,16.8-0.5,23.5,0.7"
          />
          <path
            id="b-18-a"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M85.7,306c2.9-0.4,3.8-0.3,7.7,0.1"
          />
          <path
            id="b-18"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M81.2,311.6c2.9-0.4,8,0.5,12.8,0.1"
          />
          <path
            id="b-17-a"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M60.2,298.5c2.9-0.4,3,1.3,9.4,2.7"
          />
          <path
            id="b-17"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M56,302.8c2.9-0.4,7.7,4.4,14.1,5.9"
          />
          <path
            id="b-16-e"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M27.7,274.6c2.1-0.3,4.5,1.3,5.9,1.8"
          />
          <path
            id="b-16-d"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M23.8,277.9c2.9-0.4,3,1.3,9.4,2.7"
          />
          <path
            id="b-16-c"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M23,283.3c2.9-0.4,3,1.3,9.4,2.7"
          />
          <path
            id="b-16-b"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M21.7,288.2c3.4-0.6,7.9,2.5,7.8,6.5"
          />
          <path
            id="b-16-a"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M20.7,292c3.4-0.6,4.6,1.1,5.8,4.7"
          />
          <path
            id="b-16"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M32.6,299.3c2.9-0.4,5.1,0.5,11.5,2"
          />
          <path
            id="b-15"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M159.1,318.1c4.4-1.4,13.2,1.4,19.3,5.7"
          />
          <path
            id="b-14"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M147.6,319.3c-24.6-1.6-22,11.7-71.8-2.4"
          />
          <path
            id="b-13"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M70.2,315.6c-6.4-2.1-10.1-3.4-20.8-7"
          />
          <path
            id="b-12"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M44.4,307.5c-2.6-1-7.8-3.5-12.3-2.7"
          />
          <path
            id="b-11"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M30.8,310.1c2.5-1.5,4,1.3,3.8,3.5"
          />
          <path
            id="b-10"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M157.6,327.7c-5.7-4.9-21.2-2.1-27.1,5.5"
          />
          <path
            id="b-9"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M153,331c-5.9-3.3-12.3,0.7-12.9,3.5"
          />
          <path
            id="b-8"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M84.1,330.5c2.3-4.2,18.3-7.1,29.2,3.8"
          />
          <path
            id="b-7"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M87.5,333.9c2.6-1.5,12-2.1,16.4,3.7"
          />
          <path
            id="b-6"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M58.5,324.8c2.5-1.5,10.2-2,13.8,6.6"
          />
          <path
            id="b-5"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M58.4,330.4c2.5-1.5,8.1,2.4,7.9,4.5"
          />
          <path
            id="b-4"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M38.2,315.4c7.7-4.4,15.5,3.8,15.4,7.8"
          />
          <path
            id="b-3"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M36.9,320.6c3.1-2,11.5,1.2,11.9,7.8"
          />
          <path
            id="b-2"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M34.4,327.5c3.4-0.7,8.9,0.5,9.4,6.1"
          />
          <path
            id="b-1"
            className="sphere--no-color sphere--stroke sphere--width-3 sphere--lines-2"
            d="M32.6,334c3.4-0.6,6,0.3,5.9,4.3"
          />
          <path
            id="b-70"
            className="sphere__thick-lines sphere--no-color sphere--stroke sphere--width-4 sphere--lines-1"
            d="M121.1,301.1c-9,1.2-20.2,16.2-25.2,12.9c-4.1-2.7-1.2-17.8-6.9-11.4c-8.4,9.5-18.3,22-18.7,11.1
			c-0.3-11.4-0.5-14.5-0.9-18.4c-1-10.1-16.3,13.2-21.5,14c-4.3,0.6-4.2-4.4-3.5-8.5c1.6-9.5-4.8-4.8-9.4-7.3
			c-3.5-2-2.1-10.4-1.2-20.7c0.7-7.8-15.9,14.8-16,3.1c-0.1-7.8,2.9-14.5,0.4-25.1"
          />
          <path
            id="b-71"
            className="sphere__thick-lines sphere--no-color sphere--stroke sphere--width-4 sphere--lines-1"
            d="M191.2,301.4c-4.2,12-10,22.2-14.3,12.2c-4.5-10.4-7.8,5.7-11.4-4.5c-1.7-5-5.5,11.1-10,13.7
			c-3.8,2.2-8.5-4-9.4-8c-2-9.4-9.7,0.3-14.9-0.4c-4-0.5-9-8.5-11.9-18.4"
          />
          <path
            id="b-shape-1"
            className="sphere__shapes sphere--color sphere--stroke stroke--width-3"
            d="M18.1,270.9c-0.3,2.2-0.3,4.5-0.1,6.7c0.2,4,6.7,0.3,7.5-1.1C27.2,273.4,19,266.8,18.1,270.9z
			"
          />
        </g>
      </g>
    </svg>
  );
};

export default FullSphereBlob;
