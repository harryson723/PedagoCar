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
          <IonCard key={el.title + i} title={el.title}>
            <IonCardHeader>
              <IonCardTitle>{el.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {el.title}
              <IonButton routerLink={`/activities/${el.category}/${el.id}`}>
                Ver
              </IonButton>
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default AllActivities;
