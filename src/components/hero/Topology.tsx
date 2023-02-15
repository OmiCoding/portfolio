import { useContext } from 'react';
import { gsap } from 'gsap';
import AppContext from '../../context/AppContext';
import useResize from '../../hooks/useResize';

import Landscape from './background/Landscape';
import FullSphereBlob from './background/FullSphereBlob';
import '../../styles/wrappers.css';

const Topology = function () {
  const { device } = useContext(AppContext);
  useResize();

  return (
    <div className="svg-hills">
      <div className="relative-wrapper">
        <Landscape />
        <FullSphereBlob />
      </div>
    </div>
  );
};

export default Topology;
