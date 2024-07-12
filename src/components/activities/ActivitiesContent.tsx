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
          <IonCardTitle className="font-bold">{title}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent className="text-black">{description}</IonCardContent>
      </IonCard>
    </>
  );
};

export default ActivitiesContent;
