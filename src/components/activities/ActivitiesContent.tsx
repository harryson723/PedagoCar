import {
    IonCard,
    IonCardContent,
    IonCardHeader,
  IonCardTitle,
} from "@ionic/react";
import "./activities.css";

interface ActivitiesContentProps {
  title: string;
  description: string;
}

const ActivitiesContent: React.FC<ActivitiesContentProps> = ({
  title,
  description,
}) => {
  return (
    <>
      <IonCard>
        <IonCardHeader className="prueba">
          <IonCardTitle>{title}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>{description}</IonCardContent>
      </IonCard>
    </>
  );
};

export default ActivitiesContent;
