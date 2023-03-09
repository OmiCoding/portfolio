import Heading from './Heading';
import List from './List';
import '../../styles/modal.css';

function PageOne() {
  return (
    <div className="modal__content-page">
      <div className="modal__content-upper-wrap">
        <Heading />
      </div>
      <div className="modal__content-bottom-wrap">
        <List />
      </div>
    </div>
  );
}

export default PageOne;
