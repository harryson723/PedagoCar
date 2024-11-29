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
import { ClipLoader } from "react-spinners";
import { Loader } from "rsuite";

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
  title: "Saltar",
  category: "Saltar",
  keywords: "Saltar",
  purpose: "Saltar",
  description: "Saltar",
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
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const get = async () => {
      setShowLoader(true);
      let activity: any = await fetch(
        `https://services.qalaub.com/api/ipapp?id=${match.params.id}`
      );
      let newActivity = await activity.json();
      newActivity.materials = newActivity.materials.split(",");
      setActivity(newActivity);
      setShowLoader(false);
    };
    get();
  }, []);

  const handleSegment = (ev: any) => {
    setShowPurpose(ev.detail.value);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="custom-toolbar">
          <IonButtons slot="start">
            <IonBackButton default-href="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Descripción</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {showLoader && (
          <div className="h-[100vh] flex flex-row justify-center content-center ">
            <ClipLoader size={60} />
          </div>
        )}
        {!showLoader && (
          <>
            <IonHeader>
              <IonToolbar>
                <IonSegment value={showPurpose} onIonChange={handleSegment}>
                  <IonSegmentButton
                    className="custom-segment-button"
                    value="activity"
                  >
                    <IonLabel>Actividad</IonLabel>
                  </IonSegmentButton>
                  <IonSegmentButton
                    className="custom-segment-button"
                    value="purpose"
                  >
                    <IonLabel>Aportes</IonLabel>
                  </IonSegmentButton>
                </IonSegment>
              </IonToolbar>
            </IonHeader>
            <div className="bodybgs min-h-full">
              {showPurpose == "activity" ? (
                <section>
                  <h1 className="text-center mt-5 font-bold bg-white rounded-lg py-2.5 w-[90%] mx-auto">
                    {activity.title}
                  </h1>
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
                        <IonCardTitle className="font-bold">
                          Materiales requeridos
                        </IonCardTitle>
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
                <section className="min-h-full justific">
                  <h2 className="text-center mt-5 font-bold bg-white rounded-lg py-2.5 w-[90%] mx-auto">
                    Aportes Psicomotores
                  </h2>
                  {activity.psycomotor?.map((el: any) => (
                    <IonCard key={el.title}>
                      <IonCardHeader>
                        <IonCardTitle className="font-bold">
                          {el.title}
                        </IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>{el.description}</IonCardContent>
                    </IonCard>
                  ))}
                </section>
              )}
            </div>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Activities;
