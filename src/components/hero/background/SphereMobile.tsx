import sphereImg from '../../../assets/sphere-glob-mobile-2.svg';

import '../../../styles/hero.css';

const SphereMobile = function () {
  return (
    <div className="sphere-wrapper-mobile">
      <div className="img-wrapper">
        <img className="sphere__img-mobile" src={sphereImg} />
      </div>
    </div>
  );
};

export default SphereMobile;
