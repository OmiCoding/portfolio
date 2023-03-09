import ovalSVG from '../../assets/shapeC-01.svg';

const Oval = function () {
  return (
    <div className="modal__oval-wrap">
      <div className="modal__img-wrap">
        <img className="modal__img" src={ovalSVG} />
      </div>
    </div>
  );
};

export default Oval;
