import squareSVG from '../../assets/shapeB-02.svg';

const Square = function () {
  return (
    <div className="modal__square-wrap">
      <div className="modal__img-wrap">
        <img className="modal__img" src={squareSVG} />
      </div>
    </div>
  );
};

export default Square;
