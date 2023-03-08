import computerSVG from '../../assets/computer-10.svg';

const Computer = function () {
  return (
    <div className="modal__computer-wrap">
      <div className="modal__img-wrap">
        <img className="modal__img" src={computerSVG} />
      </div>
    </div>
  );
};

export default Computer;
