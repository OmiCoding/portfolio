import { useState } from 'react';
import PageOne from './PageOne';
import SwitchPage from './SwitchPage';

import Computer from './Computer';
import Person from './Person';
import Triangle from './Triangle';
import Square from './Square';
import Oval from './Oval';

import '../../styles/modal.css';
import PageTwo from './PageTwo';
import CloseBtn from './CloseBtn';

function ModalContent() {
  const [trigger, setTrigger] = useState(false);

  return (
    <div className="modal__right">
      <div className="modal__content">
        <div
          className={`modal__abs-wrapper ${
            trigger ? 'modal__switch--active' : 'modal__switch--non-active'
          } `}
        >
          <PageOne />
          <PageTwo />
        </div>
        <Computer />
        <Person />
        <Triangle />
        <Square />
        <Oval />
        <SwitchPage setTrigger={setTrigger} trigger={trigger} />
        <CloseBtn />
      </div>
    </div>
  );
}

export default ModalContent;
