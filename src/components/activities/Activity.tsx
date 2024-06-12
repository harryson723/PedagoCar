import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";
import "./activities.css";
import { ActivityType } from "../../utils/types";

interface ActivityProps {
  activity: ActivityType;
}

const Activity: React.FC<ActivityProps> = ({ activity }) => {
  return (
    <IonCard title={activity.title} className="flex flex-col">
      <IonCardHeader>
        <IonCardTitle>{activity.title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent className="flex flex-col">
        <p className="h-20 overflow-hidden overflow-y-scroll">{activity.description}</p>
        <IonButton
          routerLink={`/activities/${activity.category}/${activity.id}`}
        >
          Ver
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default Activity;
