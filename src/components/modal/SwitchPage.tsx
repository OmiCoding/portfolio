import '../../styles/modal.css';

const SwitchPage = function () {
  return (
    <div className="modal__switch-wrap">
      <h3 className="modal__switch-text">Check out my work</h3>
      <div className="modal__switch-btn-wrap">
        <button className="modal__switch-btn">
          <i className="modal__switch-btn-icon fa-solid fa-arrow-right" />
        </button>
      </div>
    </div>
  );
};

export default SwitchPage;
