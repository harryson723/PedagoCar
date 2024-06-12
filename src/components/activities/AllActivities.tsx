import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonChip,
  IonContent,
  IonHeader,
  IonItem,
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
        <IonTitle class="ion-text-center bg-white text-black">Actividades</IonTitle>
      </IonHeader>
      <IonContent >
        <section className="h-full bodybgs">
        {activities?.map((el: any, i: number) => (
          <IonCard key={el.title + i} title={el.title} >
            <IonCardHeader>
              <IonCardTitle className="text-center">{el.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {el.title}
              <IonButton routerLink={`/activities/${el.category}/${el.id}`}>
                Ver
              </IonButton>
            </IonCardContent>
          </IonCard>
        ))}
        </section>        
      </IonContent>
    </IonPage>
  );
};

export default AllActivities;
