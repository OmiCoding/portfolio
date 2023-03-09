import Portfolio from './Portfolio';
import SecondHeading from './SecondHeading';

const PageTwo = function () {
  return (
    <div className="modal__content-page">
      <div className="modal__content-upper-wrap">
        <SecondHeading />
      </div>
      <Portfolio />
    </div>
  );
};

export default PageTwo;
