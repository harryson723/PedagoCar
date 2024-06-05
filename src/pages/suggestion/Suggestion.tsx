import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./suggestion.css";

const Suggestion: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonTitle>Suggestions</IonTitle>
      </IonHeader>
      <IonContent fullscreen>Suggestions</IonContent>
    </IonPage>
  );
};

export default Suggestion;
