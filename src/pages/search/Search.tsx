import {
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonSearchbar,
  IonTitle,
} from "@ionic/react";
import { useState } from "react";
import "./search.css";
import { fetchDataAndSearchByKeyword } from "../../utils/loadActivity";
import { ActivityType } from "../../utils/types";
import Activity from "../../components/activities/Activity";

const Search: React.FC = () => {
  const [results, setResults] = useState<ActivityType[]>([]);
  const [showQuery, setShowQuery] = useState(false);

  const handleInput = (ev: Event) => {
    let query = "";
    const target = ev.target as HTMLIonSearchbarElement;
    if (target) query = target.value!.toLowerCase();

    fetchDataAndSearchByKeyword(query) // Asegúrate de proporcionar la categoría
      .then((result) => {
        if (typeof result === 'string') {
          setResults([]);
        } else {
          setResults(result);
          if (result.length > 0 && query != "") setShowQuery(true);
          else setShowQuery(false);
        }
      })
      .catch((error) => {
      });
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonSearchbar
          showClearButton="always"
          animated={true}
          placeholder="¿Qué estás buscando hoy?"
          onIonInput={(ev) => handleInput(ev)}
        ></IonSearchbar>
        {showQuery && results.length == 0 && (
          <IonTitle>No hay actividades para esta palabra</IonTitle>
        )}
        {showQuery && (
          <IonList>
            {results.map((result, i) => (
              <Activity key={result.title + i} activity={result} />
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Search;
