import softwareImg from '../../assets/software-chip.svg';
import BriefCase from '../general/BriefCase';

import '../../styles/general.css';
import resume from '../../assets/resume.pdf';

function ModalSocial() {
  return (
    <div className="modal__left">
      <div className="modal__social">
        <div className="modal__social__img-wrap">
          <img className="modal__social__img" src={softwareImg} />
        </div>
        <h3 className="modal__social__text">
          The following are links that will interest you:
        </h3>
        <ul className="modal__social__list">
          <li className="modal__social__list-item">
            <BriefCase />
            <span>LinkedIn</span>
            <a
              className="modal__social__list-link"
              href="https://linkedin.com/in/omar-estevez"
              target="_blank"
            />
          </li>
          <li className="modal__social__list-item">
            <i className="modal__social__list-icon fa-solid fa-file-lines" />
            <span>Resume</span>
            <a
              className="modal__social__list-link"
              href={resume}
              target="_blank"
            />
          </li>
          <li className="modal__social__list-item">
            <i className="modal__social__list-icon fa-brands fa-twitter" />
            <span>Twitter</span>
            <a
              className="modal__social__list-link"
              href="https://twitter.com/digicoding"
              target="_blank"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ModalSocial;
