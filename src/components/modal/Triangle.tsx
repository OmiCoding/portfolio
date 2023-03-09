import triangleSVG from '../../assets/shapeA-01.svg';

const Triangle = function () {
  return (
    <div className="modal__triangle-wrap">
      <div className="modal__img-wrap">
        <img className="modal__img" src={triangleSVG} />
      </div>
    </div>
  );
};

export default Triangle;
