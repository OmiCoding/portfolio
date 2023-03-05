import { useContext } from 'react';
import { Link } from 'react-router-dom';

import imgUrl from '../../assets/logo.png';
import AppContext from '../../context/AppContext';

import '../../styles/header.css';
import BriefCase from './BriefCase';
import SocialMedia from './SocalMedia';

const Header = function () {
  const { modalActive } = useContext(AppContext);

  const handleClick = function () {
    if (modalActive) {
      return modalActive();
    }
  };

  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="logo-wrapper">
          <img className="header__logo" src={imgUrl} />
          <Link className="header__logo-link" to="/" />
        </div>
        <nav className="header__nav">
          <ul className="header__nav__list">
            <li className="header__list__items">
              <button className="header__btn" onClick={handleClick}>
                <BriefCase />
                Portfolio
              </button>
            </li>
            <li className="header__list__items">
              <SocialMedia />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
