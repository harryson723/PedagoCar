import React, { useEffect } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import MainButton from '../../components/MainButton';
import './main.css';

interface SplideBallProps {
  seeMore: () => void;
}

const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

const SplideBall: React.FC<SplideBallProps> = ({ seeMore }) => {
  useEffect(() => {
    new Splide('.splide-ball', {
      type: 'loop',
      perPage: 1.5,
      perMove: 1,
      autoplay: false,
      arrows: false,
      pagination: false,
      autoHeight: true,
    }).mount();
  }, []);

  return (
    <div className="splide-ball splide">
      <div className="splide__track">
        <ul className="splide__list">
          <li className="splide__slide">
            <MainButton text={truncateText("TIRO", 7)} onClick={seeMore} className="buttontruncate rounded-lg" />
          </li>
          <li className="splide__slide">
            <MainButton text={truncateText("AGARRAR", 7)} onClick={seeMore} className="buttontruncate rounded-lg" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SplideBall;