import React, { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import MainButton from '../../components/MainButton';
import './main.css';
import { useHistory } from 'react-router';

interface SwiperBallProps { }

const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

const SwiperBall: React.FC<SwiperBallProps> = () => {
  const history = useHistory();

  useEffect(() => {
    // Initialize Swiper
    new Swiper('.swiper-ball', {
      modules: [Navigation, Pagination],
      loop: true,
      slidesPerView: 1.5,
      spaceBetween: 10,
      pagination: false, // Deshabilitado para eliminar los puntos de paginación
      navigation: false, // Deshabilitado porque no se requieren flechas de navegación
      autoHeight: true,
      touchStartPreventDefault: false, // Para asegurar que sea deslizable en dispositivos táctiles
    });
  }, []);

  return (
    <div className="swiper-ball swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <MainButton
            text={truncateText("TIRO", 7)}
            onClick={() => { history.push('/allfilter/tiro'); }}
            className="buttontruncate rounded-lg"
          />
        </div>
        <div className="swiper-slide">
          <MainButton
            text={truncateText("PATEO", 7)}
            onClick={() => { history.push('/allfilter/pateo'); }}
            className="buttontruncate rounded-lg"
          />
        </div>
        <div className="swiper-slide">
          <MainButton
            text={truncateText("AGARRAR", 7)}
            onClick={() => { history.push('/allfilter/agarrar'); }}
            className="buttontruncate rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SwiperBall;
