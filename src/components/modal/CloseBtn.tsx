import { useContext } from 'react';
import AppContext from '../../context/AppContext';

const CloseBtn = function () {
  const { modalActive } = useContext(AppContext);

  const handleClick = function () {
    if (!modalActive) return;
    modalActive();
  };

  return (
    <button className="modal__close-btn" onClick={handleClick}>
      <i className="fa-solid fa-xmark" />
    </button>
  );
};

export default CloseBtn;
