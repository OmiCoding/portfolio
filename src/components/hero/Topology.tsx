import useResize from '../../hooks/useResize';
import Landscape from './background/Landscape';
import FullSphereBlob from './background/FullSphereBlob';
import '../../styles/wrappers.css';
import '../../styles/hills.css';

const Topology = function () {
  useResize();

  return (
    <div className="svg-hills">
      <div className="relative-wrapper">
        <Landscape />
        <FullSphereBlob />
        <div className="patch-1" />
      </div>
    </div>
  );
};

export default Topology;
