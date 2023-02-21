import { Link } from 'react-router-dom';

import '../../styles/header.css';
import Logo from './Logo';

const Header = function () {
  return (
    <header className="header">
      <div className="logo-wrapper">
        <Logo />
        <Link to="#" />
      </div>
      <nav className="header__nav">
        <ul className="header__nav__list">
          <li className="header__nav__list__items"></li>
          <li className="header__nav__list__items"></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
