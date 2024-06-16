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
      <IonHeader className="w-full h-7">
        <IonTitle class="ion-text-center text-black">
          Actividades
        </IonTitle>
      </IonHeader>

      <IonContent>
        <section className="bodybgs min-h-full">
          {activities?.map((el: any, i: number) => (
            <Activity key={el.title + i} activity={el} />
          ))}
        </section>
      </IonContent>
    </IonPage>
  );
};

export default AllActivities;
