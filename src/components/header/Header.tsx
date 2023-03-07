import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

import imgUrl from '../../assets/logo.png';
import AppContext from '../../context/AppContext';

import SocialMedia from './SocalMedia';
import HBMenu from './HBMenu';

import HbSvg from './HbSvg';
import BriefCase from './BriefCase';
import '../../styles/header.css';

const Header = function () {
  const [trigger, setTrigger] = useState(false);
  const { modalActive } = useContext(AppContext);

  const handleClick = function () {
    if (modalActive) {
      return modalActive();
    }
  };

  const handleHB = function () {
    const tl = gsap.timeline({
      defaults: {
        ease: 'elastic.out(1, 1)',
      },
    });
    if (!trigger) {
      tl.to('.bar-1', {
        width: 8,
      })
        .to(
          '.bar-2',
          {
            width: 8,
            opacity: 0,
          },
          '<',
        )
        .to(
          '.bar-3',
          {
            width: 8,
          },
          '<',
        )
        .to('.bar-1', {
          x: 9,
          y: 4,
          rotate: 45,
          width: 32,
        })
        .to(
          '.bar-3',
          {
            x: 3,
            y: -1,
            rotation: -45,
            width: 32,
          },
          '<',
        );
      setTrigger(true);
    } else {
      tl.to('.bar-1', {
        x: 0,
        y: 0,
        rotate: 0,
      })
        .to(
          '.bar-3',
          {
            x: 0,
            y: 0,
            rotate: 0,
          },
          '<',
        )
        .to('.bar-2', {
          x: 0,
          width: 20,
          opacity: 1,
        });

      setTrigger(false);
    }
  };

  return (
    <>
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
            <div className="header__nav__hb">
              <div className="header__nav__hb-svg-wrapper">
                <HbSvg />
              </div>
              <button className="header__nav__hb-btn" onClick={handleHB} />
            </div>
          </nav>
          <HBMenu />
        </div>
      </header>
    </>
  );
};

export default Header;
