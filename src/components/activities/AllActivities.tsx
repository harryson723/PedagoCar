import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
} from "@ionic/react";
import { useState } from "react";
import { fetchAllData } from "../../utils/loadActivity";
import "./activities.css";
import Activity from "./Activity";

const data = fetchAllData();

const AllActivities: React.FC = () => {
  const [activities, setActivities] = useState(data);
  return (
    <IonPage>
      <IonHeader>
        <IonTitle>Actividades</IonTitle>
      </IonHeader>
      <IonContent fullscreen>
        {activities?.map((el: any, i: number) => (
          <Activity key={el.title + i} activity={el} />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default AllActivities;
