import '../../styles/modal.css';

const SecondHeading = function () {
  return (
    <>
      <h3 className="modal__text-name">Here is some of my</h3>
      <div className="modal__head-wrap">
        <h2 className="modal__header">WORK &#38;</h2>
        <h2 className="modal__header-2">
          Projects
          <span className="modal__icon">
            &#123;
            <i className="fa-solid fa-wrench" />
            &#125;
          </span>
        </h2>
      </div>
      <p className="modal__description">
        The following are some highlights of my work and projects I've done.
      </p>
    </>
  );
};

export default SecondHeading;
