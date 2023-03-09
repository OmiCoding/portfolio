import '../../styles/modal.css';

interface Props {
  title: string;
  description: string;
  img: string;
  url: string;
}

const PortfolioCard: React.FC<Props> = function ({
  title,
  description,
  img,
  url,
}) {
  return (
    <div className="modal__card">
      <h3 className="modal__card-title">{title}</h3>
      <p className="modal__card-description">{description}</p>
      <div className="modal__card-img-wrap">
        <img className="modal__card-img" src={img} />
      </div>
      <a className="modal__card-link" href={url} target="_blank" />
    </div>
  );
};

export default PortfolioCard;
