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
import { Loader } from "rsuite";
import { ClipLoader } from "react-spinners";

interface ActivitiesProps {
  match: any;
}

const AllActivities: React.FC<ActivitiesProps> = ({ match }) => {
  const [activities, setActivities] = useState([]);
  const router = useIonRouter();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    (async () => {
      setShowLoader(true);
      const subcategory = match.params.subcategory;
      let url = 'https://services.qalaub.com/api/ipapp';
      if (subcategory) url = 'https://services.qalaub.com/api/ipapp/subcategory?subcategory=' + subcategory;
      const res = await fetch(url);
      setActivities(await res.json());
      setShowLoader(false);
    })();
  }, [router.routeInfo]);

  return (
    <IonPage>
      <IonHeader className="w-full h-7">
        <IonTitle class="custom-activitiesbar ion-text-center text-white">
          Actividades
        </IonTitle>
      </IonHeader>

      <IonContent>
        {showLoader && < div className="h-[100vh] flex flex-row justify-center content-center " >
          <ClipLoader size={60} />
        </div >}
        {!showLoader && <section className="bodybgs min-h-full">
          {activities?.map((el: any, i: number) => (
            <Activity key={el.title + i} activity={el} />
          ))}
        </section>}

      </IonContent>
    </IonPage>
  );
};

export default AllActivities;
