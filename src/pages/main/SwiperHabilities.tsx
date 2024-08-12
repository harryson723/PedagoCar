import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import MainButton from '../../components/MainButton';
import './main.css';
import { useHistory } from 'react-router';

const SwiperHabilities: React.FC = () => {
  const history = useHistory();

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };

  return (
    <Swiper
      slidesPerView={1.5}
      spaceBetween={10}
      loop={true}
      autoHeight={true}
      className="swiper-container"
      touchStartPreventDefault={false} // Asegura que sea deslizable en todos los dispositivos
    >
      <SwiperSlide>
        <MainButton
          text={truncateText("DESPLAZAMIENTO", 7)}
          onClick={() => { history.push('/allfilter/desplazamiento'); }}
          className="buttontruncate rounded-lg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <MainButton
          text={truncateText("SALTO", 7)}
          onClick={() => { history.push('/allfilter/salto'); }}
          className="buttontruncate rounded-lg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <MainButton
          text={truncateText("PATEO", 7)}
          onClick={() => { history.push('/allfilter/pateo'); }}
          className="buttontruncate rounded-lg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <MainButton
          text={truncateText("LANZAR", 7)}
          onClick={() => { history.push('/allfilter/lanzar'); }}
          className="buttontruncate rounded-lg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <MainButton
          text={truncateText("RECIBIR", 7)}
          onClick={() => { history.push('/allfilter/recibir'); }}
          className="buttontruncate rounded-lg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <MainButton
          text={truncateText("REBOTAR", 7)}
          onClick={() => { history.push('/allfilter/rebotar'); }}
          className="buttontruncate rounded-lg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <MainButton
          text={truncateText("GOLPEAR", 7)}
          onClick={() => { history.push('/allfilter/golpear'); }}
          className="buttontruncate rounded-lg"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperHabilities;