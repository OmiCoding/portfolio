import '../../styles/modal.css';

const Heading = function () {
  return (
    <>
      <h3 className="modal__text-name">Omar Estevez</h3>
      <div className="modal__head-wrap">
        <h2 className="modal__header">CREATIVE</h2>
        <h2 className="modal__header-2">
          Engineer
          <span className="modal__icon">
            &#123;
            <i className="fa-solid fa-wand-magic-sparkles" />
            &#125;
          </span>
        </h2>
      </div>
      <p className="modal__description">
        Turning designs into beautiful user experiences.
      </p>
    </>
  );
};

export default Heading;
