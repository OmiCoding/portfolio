import personSVG from '../../assets/person-2.svg';

const Person = function () {
  return (
    <div className="modal__person-wrap">
      <div className="modal__img-wrap">
        <img className="modal__person-img" src={personSVG} />
      </div>
    </div>
  );
};

export default Person;
