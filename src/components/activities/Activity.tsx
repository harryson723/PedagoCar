import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";
import "./activities.css";
import { ActivityType } from "../../utils/types";
import { useHistory } from "react-router";
import { saveUserData } from "../../utils/loadActivity";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

interface ActivityProps {
  activity: ActivityType;
}

const Activity: React.FC<ActivityProps> = ({ activity }) => {
  const { update, setUpdate } = useContext(UserContext);
  const history = useHistory();

  const handleClick = () => {
    // Crear un nuevo objeto JSON con los datos de activity
    const updatedJson = {
      category: activity.category,
      id: activity.id,
    };
    saveUserData(updatedJson);
    // Redirigir a la nueva ruta
    setUpdate(!update);
    history.push(`/activities/${activity.category}/${activity.id}`);
  };
  return (
    <IonCard
      title={activity.title}
      className="activityBg flex flex-row"
      onClick={handleClick}
    >
      <img src={activity.img.replace('dataimage', 'data:image').replace('base64', ';base64,')} alt="" className="w-[50%]"/>
      <div className="flex flex-col w-[50%]">
        <IonCardHeader>
          <IonCardTitle className="activityTitle font-bold">{activity.title}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent className="flex flex-col">
          <p className="h-20 overflow-hidden overflow-y-scroll text-black">{activity.description}</p>
        </IonCardContent>
      </div>
    </IonCard>
  );
};

export default Activity;
