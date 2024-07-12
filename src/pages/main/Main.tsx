import { IonContent, IonPage, IonText, IonTitle } from "@ionic/react";
import "./main.scss"; // Asegúrate de importar el archivo SCSS
import { generateSuggestions } from "../../utils/loadActivity";
import { useContext, useEffect, useState } from "react";
import Activity from "../../components/activities/Activity";
import { UserContext } from "../../components/context/UserContext";

const Main: React.FC = () => {
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const { update } = useContext(UserContext);
  
  useEffect(() => {
    setSuggestions(generateSuggestions());
  }, [update]);
  return (
    <IonPage>
      <IonContent className="bodybg min-h-full">
        <div >
          <div>
            <img src="/img/girl.png" alt="" />
            {suggestions.length > 0 ?
              <IonText color="dark" class="texth1">
                <h1>¡Descubre las actividades perfectas para ti!</h1>
              </IonText> :
              <IonText color="dark" class="texth1">
                <h1>¡Interactúa con las actividades para recibir recomendaciones personalizadas!</h1>
              </IonText>}
          </div>
          <section>
            {suggestions?.map((el: any, i: number) => (
              <Activity key={el.title + i} activity={el} />
            ))}
          </section>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Main;
