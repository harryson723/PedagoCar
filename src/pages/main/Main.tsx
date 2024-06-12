import { IonContent, IonPage, IonTitle } from "@ionic/react";
import "./main.scss"; // Asegúrate de importar el archivo SCSS

const Main: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen >
        <div className="bodybg">
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Main;
