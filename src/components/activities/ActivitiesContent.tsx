import {
    IonCard,
    IonCardContent,
    IonCardHeader,
  IonCardTitle,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonItem,
  IonLabel,
  IonRow,
} from "@ionic/react";
import { useState } from "react";
import { fetchDataAndSearchById } from "../../utils/loadActivity";
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
        <IonCardHeader>
          <IonCardTitle>{title}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>{description}</IonCardContent>
      </IonCard>
    </>
  );
};

export default ActivitiesContent;
