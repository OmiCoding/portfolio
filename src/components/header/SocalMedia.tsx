import '../../styles/header.css';

const SocialMedia = function () {
  return (
    <>
      <ul className="header__social">
        <li className="header__social-list">
          <span className="header__social-icon">
            <i className="fa-brands fa-twitter" />
          </span>
          <a
            className="header__social-link"
            href="https://twitter.com/digicoding"
            target="_blank"
          />
        </li>
        <li className="header__social-list">
          <span className="header__social-icon">
            <i className="fa-brands fa-github" />
          </span>
          <a
            className="header__social-link"
            href="https://github.com/OmiCoding"
            target="_blank"
          />
        </li>
        <li className="header__social-list">
          <span className="header__social-icon">
            <i className="fa-brands fa-linkedin-in" />
          </span>
          <a
            className="header__social-link"
            href="https://linkedin.com/in/omar-estevez"
            target="_blank"
          />
        </li>
      </ul>
    </>
  );
};

export default SocialMedia;
