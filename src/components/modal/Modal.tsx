import { useContext } from 'react';

import AppContext from '../../context/AppContext';
import ModalContent from './ModalContent';
import ModalSocial from './ModalSocial';

const Modal = function () {
  const { modal } = useContext(AppContext);

  return (
    <div
      className={`${
        modal ? 'modal__bg modal--active' : 'modal__bg modal--close'
      }`}
    >
      <div className="modal">
        <ModalSocial />
        <ModalContent />
      </div>
    </div>
  );
};

export default Modal;
