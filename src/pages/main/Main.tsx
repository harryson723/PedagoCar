import React, { useContext, useState } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import { arrowForward } from "ionicons/icons";
import { useHistory } from "react-router";
import SwiperHabilities from "./SwiperHabilities";
import SwiperBall from "./SwiperBall";
import { UserContext } from "../../components/context/UserContext";
import MainButton from "../../components/MainButton";
import "./main.css";

const Main: React.FC = () => {
  const [key, setKey] = useState(0); // Key para forzar el renderizado
  const history = useHistory();

  // Detectar cuando el usuario regresa a la página
  useIonViewWillEnter(() => {
    setKey((prevKey) => prevKey + 1); // Incrementa la key para forzar recreación
  });

  return (
    <IonPage className="min-h-[100vh]">
      <IonHeader>
        <IonToolbar className="custom-toolbar">
          <IonTitle className="lilita-one-regular">PIAPP</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bgcolor">
        <section className="why-us w-[100%]">
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
            onClick={() => {
              history.push(`/suggestions`);
            }}
          />
        </section>

        <section className="min-h-[70vh]">
          <div>
            <div className="slidersections mt-5">
              <h2>Habilidades Locomotoras</h2>
              <div className="sw-mod">
                <SwiperHabilities key={`habilities-${key}`} />{" "}
                {/* Key dinámica */}
              </div>
            </div>
            <div className="slidersections mt-5">
              <h2>Habilidades con pelota</h2>
              <div className="sw-mod">
                <SwiperBall key={`ball-${key}`} /> {/* Key dinámica */}
              </div>
            </div>
          </div>
          <div className="popular-activities">
            <div className="slidersections mt-5 populars">
              <h2>Actividades populares</h2>
              <IonButton
                fill="clear"
                className="text-[#F95715] font-bold text-left text-[10px]"
                onClick={() => {
                  history.push(`/all`);
                }}
              >
                ver todas
                <IonIcon slot="end" icon={arrowForward}></IonIcon>
              </IonButton>
            </div>
          </div>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Main;
