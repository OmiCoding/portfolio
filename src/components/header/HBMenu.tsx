import { useContext } from 'react';

import AppContext from '../../context/AppContext';
import Heading from '../modal/Heading';
import Computer from '../modal/Computer';
import List from '../modal/List';
import SwitchPage from '../modal/SwitchPage';

function HBMenu() {
  const { hb } = useContext(AppContext);

  return (
    <div
      className={`header__hb-menu ${
        hb ? 'header__hb-menu--active' : 'header__hb-menu--closed'
      } `}
    >
      <div className="header__hb-menu-wrapper">
        <Heading />
        <Computer />
        <List />
        <SwitchPage />
      </div>
    </div>
  );
}

export default HBMenu;
