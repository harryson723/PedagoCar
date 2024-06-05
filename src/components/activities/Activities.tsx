import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonLabel,
  IonPage,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { fetchDataAndSearchById } from "../../utils/loadActivity";
import "./activities.css";
import ActivitiesContent from "./ActivitiesContent";

interface ActivitiesProps {
  match: any;
}

interface Psycomotor {
  title: string;
  description: string;
}

interface Activity {
  id: string;
  title: string;
  category: string;
  keywords: string;
  purpose: string;
  description: string;
  materials: string[];
  variables: string;
  psycomotor: Psycomotor[];
  extraInfo: string;
}

const initialActivity: Activity = {
  id: "1",
  title: "saltar",
  category: "saltar",
  keywords: "saltar",
  purpose: "saltar",
  description: "saltar",
  materials: ["cuerda"],
  variables: "variables",
  psycomotor: [
    {
      title: "Motor",
      description: "Motor",
    },
    {
      title: "Cognitivo",
      description: "Cognitivo",
    },
    {
      title: "Social",
      description: "Social",
    },
  ],
  extraInfo: "",
};

const Activities: React.FC<ActivitiesProps> = ({ match }) => {
  const [activity, setActivity] = useState(initialActivity);
  const [showPurpose, setShowPurpose] = useState("activity");

  useEffect(() => {
    const get = async () => {
      let activity: any = await fetchDataAndSearchById(
        match.params.id,
        match.params.category
      );
      setActivity(activity);
    };
    get();
  }, []);

  const handleSegment = (ev: any) => {
    setShowPurpose(ev.detail.value);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton default-href="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Descripción</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonSegment value={showPurpose} onIonChange={handleSegment}>
              <IonSegmentButton value="activity">
                <IonLabel>Actividad</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="purpose">
                <IonLabel>Aportes</IonLabel>
              </IonSegmentButton>
            </IonSegment>
          </IonToolbar>
        </IonHeader>
        <div>
          {showPurpose == "activity" ? (
            <section>
              <h1>Nombre: {activity.title}</h1>
              <ActivitiesContent
                title="Propósito"
                description={activity.purpose}
              />
              <ActivitiesContent
                title="Descripción"
                description={activity.description}
              />
              <div>
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>Materiales requeridos</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    {activity.materials?.map((el: string) => (
                      <IonChip key={el} outline={true}>
                        {el}
                      </IonChip>
                    ))}
                  </IonCardContent>
                </IonCard>
              </div>
              <ActivitiesContent
                title="Variables"
                description={activity.variables}
              />
            </section>
          ) : (
            <section>
              <h2>Aportes Psicomotores</h2>
              {activity.psycomotor?.map((el: any) => (
                <IonCard key={el.title}>
                  <IonCardHeader>
                    <IonCardTitle>{el.title}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>{el.description}</IonCardContent>
                </IonCard>
              ))}
            </section>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Activities;
