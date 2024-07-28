import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react";
import "./main.scss"; // Asegúrate de importar el archivo SCSS
import { generateSuggestions } from "../../utils/loadActivity";
import { useContext, useEffect, useState } from "react";
import Activity from "../../components/activities/Activity";
import { UserContext } from "../../components/context/UserContext";
import MainButton from "../../components/MainButton";
import { arrowForward } from 'ionicons/icons';


const Main: React.FC = () => {
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const { update } = useContext(UserContext);

  useEffect(() => {
    setSuggestions(generateSuggestions());
  }, [update]);

  const seeMore = () => {

  };

  return (
    <IonPage>
      <IonHeader >
        <IonToolbar className="custom-toolbar">
          <IonTitle className="lilita-one-regular">PIAPP</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="min-h-full">
        <section className="why-us w-[100%]">
          <h1 className="text-white">¿Por qué esta <span className="text-[#f95c1c]">app?</span></h1>
          <p>
            Imagina un mundo donde los niños aprenden y desarrollan sus habilidades psicomotrices jugando. Este libro es tu guía para crear actividades lúdicas y educativas, transformando la rutina en una emocionante aventura. Promovamos juntos una infancia activa y saludable, ¡donde cada día sea una oportunidad para divertirse y crecer!
          </p>
          <MainButton className="custom-home-button" text="VER MÁS" onClick={seeMore} />
        </section>
        <section className="bg-{#f5f5f5} categories">
          <div>
            <h2>HABILIDADES MOTORAS</h2>
            <div>
              <MainButton text="DESPLAZAMIENTO" onClick={seeMore} />
              <MainButton text="SALTO" onClick={seeMore} />
              <MainButton text="PATEO" onClick={seeMore} />
              <MainButton text="LANZAR" onClick={seeMore} />
              <MainButton text="RECIBIR" onClick={seeMore} />
              <MainButton text="REBOTAR" onClick={seeMore} />
              <MainButton text="GOLPEAR" onClick={seeMore} />
            </div>
          </div>
          <div>
            <h2>CATEGORIAS DE APORTE CON PELOTA</h2>
            <div>
              <MainButton text="TIRO" onClick={seeMore} />
              <MainButton text="AGARRAR" onClick={seeMore} />
            </div>
          </div>
        </section>
        <section className="popular-activities">
          <div>
            <h2>ACTIVIDADES POPULARES</h2>
            <IonButton fill="clear">
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
