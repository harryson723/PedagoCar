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

const data = [
  "Amsterdam",
  "Buenos Aires",
  "Cairo",
  "Geneva",
  "Hong Kong",
  "Istanbul",
  "London",
  "Madrid",
  "New York",
  "Panama City",
];

const Search: React.FC = () => {
  const [results, setResults] = useState([...data]);
  const [showQuery, setShowQuery] = useState(false);

  const handleInput = (ev: Event) => {
    let query = "";
    const target = ev.target as HTMLIonSearchbarElement;
    if (target) query = target.value!.toLowerCase();
    const filter = data.filter((d) => d.toLowerCase().indexOf(query) > -1);
    setResults(filter);
    if (filter.length > 0 && query != "") setShowQuery(true);
    else setShowQuery(false);
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

        {showQuery && (
          <IonList>
            {results.map((result) => (
              <IonItem>{result}</IonItem>
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Search;
