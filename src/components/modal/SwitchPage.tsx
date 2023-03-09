import { Dispatch } from 'react';
import '../../styles/modal.css';

interface Props {
  setTrigger: Dispatch<boolean>;
  trigger: boolean;
}

const SwitchPage: React.FC<Props> = function ({ setTrigger, trigger }) {
  const handleClick = function () {
    setTrigger(!trigger);
  };

  return (
    <div className="modal__switch-wrap">
      <h3 className="modal__switch-text">
        {trigger ? "Let's go back" : 'Check out my work'}
      </h3>
      <div className="modal__switch-btn-wrap">
        <button className="modal__switch-btn" onClick={handleClick}>
          <i
            className={`modal__switch-btn-icon fa-solid ${
              trigger ? 'fa-arrow-left' : 'fa-arrow-right'
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default SwitchPage;
