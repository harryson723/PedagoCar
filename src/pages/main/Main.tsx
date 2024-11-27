import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./main.css"; // Asegúrate de importar el archivo SCSS
import { generateSuggestions } from "../../utils/loadActivity";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../components/context/UserContext";
import MainButton from "../../components/MainButton";
import { arrowForward } from "ionicons/icons";
import { useHistory } from "react-router";
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperHabilities from "./SwiperHabilities";
import SwiperBall from "./SwiperBall";

const Main: React.FC = () => {
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const { update } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    setSuggestions(generateSuggestions());
  }, [update]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="custom-toolbar">
          <IonTitle className="lilita-one-regular">PIAPP</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bgcolor min-h-full">
        <section className=" why-us w-[100%]">
          <h1 className="text-white">
            ¿Por qué esta <span className="text-[#f95c1c]">app?</span>
          </h1>
          <p>
            Imagina un mundo donde los niños aprenden y desarrollan sus
            habilidades psicomotrices jugando. Este libro es tu guía para crear
            actividades lúdicas y educativas, transformando la rutina en una
            emocionante aventura. Promovamos juntos una infancia activa y
            saludable, ¡donde cada día sea una oportunidad para divertirse y
            crecer!
          </p>
          <MainButton
            className="custom-home-button"
            text="VER MÁS"
            onClick={() => {history.push(`/suggestions`)}}
          />
        </section>
        <section className="">
          <div className="slidersections mt-5">
            <h2>Habilidades Locomotoras</h2>
            <div className="sw-mod" >
              <SwiperHabilities />
            </div>
          </div>
          <div className="slidersections mt-5">
            <h2>Habilidades con pelota</h2>
            <div className="sw-mod">
              <SwiperBall />
            </div>
          </div>
        </section>
        <section className="popular-activities">
          <div className="slidersections mt-5 populars">
            <h2>Actividades populares</h2>
            <IonButton
              fill="clear"
              className="text-[#F95715] font-bold text-left text-[10px]"
              onClick={() => {history.push(`/all`)}}
            >
              ver todas
              <IonIcon slot="end" icon={arrowForward}></IonIcon>
            </IonButton>
          </div>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Main;
