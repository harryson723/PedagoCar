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
  useIonRouter,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { fetchAllData } from "../../utils/loadActivity";
import "./activities.css";
import Activity from "./Activity";

interface ActivitiesProps {
  match: any;
}

const AllActivities: React.FC<ActivitiesProps> = ({ match }) => {
  const [activities, setActivities] = useState([]);
  const router = useIonRouter();

  useEffect(() => {
    (async () => {
      const subcategory = match.params.subcategory;
      let url = 'https://services.qalaub.com/api/ipapp';
      if (subcategory) url = 'https://services.qalaub.com/api/ipapp/subcategory?subcategory=' + subcategory;
      const res = await fetch(url);
      setActivities(await res.json())
    })();
  }, [router.routeInfo]);

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
