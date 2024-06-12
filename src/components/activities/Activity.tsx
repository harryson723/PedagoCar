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
        <IonCard title={activity.title}>
            <IonCardHeader>
                <IonCardTitle>{activity.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                {activity.description}
                <IonButton routerLink={`/activities/${activity.category}/${activity.id}`}>
                    Ver
                </IonButton>
            </IonCardContent>
        </IonCard>
    );
};

export default Activity;
