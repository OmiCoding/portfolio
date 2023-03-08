import PortfolioCard from './PortfolioCard';

import daazzllImg from '../../assets/daazzll.png';
import lkremediesImg from '../../assets/lkremedies.png';
import mediumImg from '../../assets/mediumphormat.png';

const Portfolio = function () {
  return (
    <div className="modal__portfolio-wrap">
      <div className="modal__flex-item-wrap">
        <PortfolioCard
          title={'Daazzll'}
          description={
            'Fullstack application where artists can share art content'
          }
          img={daazzllImg}
        />
        <PortfolioCard
          title={'Lock & Key Remedies'}
          description={'Fullstack e-commerce application'}
          img={lkremediesImg}
        />
      </div>
      <div className="modal__flex-item-wrap">
        <PortfolioCard
          title={'MediumPhormat'}
          description={
            'Shopify e-commerce application with customized theme and design'
          }
          img={mediumImg}
        />
      </div>
    </div>
  );
};

export default Portfolio;
