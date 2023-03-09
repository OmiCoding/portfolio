import '../../styles/modal.css';

const List = function () {
  return (
    <div className="modal__list-wrap">
      <h3 className="modal__location">New York, NY</h3>
      <ul className="modal__list">
        <li className="modal__list-item">
          5 years of experience creating web applications.
          <div className="modal__list-deco" />
        </li>
        <li className="modal__list-item">
          Open source contributor and community mentor
          <div className="modal__list-deco" />
        </li>
        <li className="modal__list-item">
          Detail oriented UX/UI enthusiast and micro interaction specialist
          <div className="modal__list-deco" />
        </li>
      </ul>
    </div>
  );
};

export default List;
