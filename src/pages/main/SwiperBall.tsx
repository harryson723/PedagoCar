import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Scrollbar } from 'swiper/modules';
import MainButton from '../../components/MainButton';
import './main.css';
import { useHistory } from 'react-router';
import 'swiper/swiper-bundle.css';

const SwiperBall: React.FC = () => {
  const history = useHistory();

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };

  return (
    <Swiper
      modules={[Scrollbar]}
      slidesPerView={1.5}
      spaceBetween={10}
      loop={true}
      autoHeight={true}
      touchStartPreventDefault={false} // Para asegurar que sea deslizable en dispositivos táctiles
      scrollbar={{ draggable: true }}  // Activa la scrollbar
      className="h-20"
    >
      <SwiperSlide>
        <MainButton
          text={truncateText("TIRO", 7)}
          onClick={() => { history.push('/allfilter/tiro'); }}
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
          text={truncateText("AGARRAR", 7)}
          onClick={() => { history.push('/allfilter/agarrar'); }}
          className="buttontruncate rounded-lg"
        />
      </SwiperSlide>
      {/* Agrega más SwiperSlides si es necesario */}
    </Swiper>
  );
};

export default SwiperBall;
