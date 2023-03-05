import '../../styles/header.css';

const SocialMedia = function () {
  return (
    <>
      <div className=""></div>
      <ul className="header__social">
        <li className="header__social-list">
          <span className="header__social-icon">
            <i className="fa-brands fa-twitter" />
          </span>
        </li>
        <li className="header__social-list">
          <span className="header__social-icon">
            <i className="fa-brands fa-github" />
          </span>
        </li>
        <li className="header__social-list">
          <span className="header__social-icon">
            <i className="fa-brands fa-linkedin-in" />
          </span>
        </li>
      </ul>
    </>
  );
};

export default SocialMedia;
