import React, { useEffect } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import MainButton from "../../components/MainButton";
import "./main.css";

interface SplideHabilitiesProps {
  seeMore: () => void;
}

const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

const SplideHabilities: React.FC<SplideHabilitiesProps> = ({ seeMore }) => {
  useEffect(() => {
    new Splide(".splide-habilities", {
      type: "loop",
      perPage: 1.5,
      perMove: 1,
      autoplay: false,
      arrows: false,
      pagination: false,
      autoHeight: true,
    }).mount();
  }, []);

  return (
    <div className="splide-habilities splide">
      <div className="splide__track">
        <ul className="splide__list">
          <li className="splide__slide">
            <MainButton
              text={truncateText("DESPLAZAMIENTO", 7)}
              onClick={seeMore}
              className="buttontruncate rounded-lg"
            />
          </li>
          <li className="splide__slide">
            <MainButton
              text={truncateText("SALTO", 7)}
              onClick={seeMore}
              className="buttontruncate rounded-lg"
            />
          </li>
          <li className="splide__slide">
            <MainButton
              text={truncateText("PATEO", 7)}
              onClick={seeMore}
              className="buttontruncate rounded-lg"
            />
          </li>
          <li className="splide__slide">
            <MainButton
              text={truncateText("LANZAR", 7)}
              onClick={seeMore}
              className="buttontruncate rounded-lg"
            />
          </li>
          <li className="splide__slide">
            <MainButton
              text={truncateText("RECIBIR", 7)}
              onClick={seeMore}
              className="buttontruncate rounded-lg"
            />
          </li>
          <li className="splide__slide">
            <MainButton
              text={truncateText("REBOTAR", 7)}
              onClick={seeMore}
              className="buttontruncate rounded-lg"
            />
          </li>
          <li className="splide__slide">
            <MainButton
              text={truncateText("GOLPEAR", 7)}
              onClick={seeMore}
              className="buttontruncate rounded-lg"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SplideHabilities;
