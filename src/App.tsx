import React, { useEffect, useState } from 'react';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonSelect,
  IonSelectOption,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
  IonButton,
  setupIonicReact,
} from "@ionic/react";
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router";

import { Storage } from '@ionic/storage';

import CustomHome from './assets/icons/HomeNew.svg';
import CustomActivities from './assets/icons/ActivitiesNew.svg';
import CustomSearch from './assets/icons/SerachNew.svg';
import CustomProfile from './assets/icons/ProfileNew.svg';
import CustomAdd from './assets/icons/AddNew.svg';

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import '../src/Styles/globals.css';
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import '@ionic/react/css/palettes/dark.class.css';
/* import '@ionic/react/css/palettes/dark.always.css'; */
/*import "@ionic/react/css/palettes/dark.system.css";*/

import "./theme/variables.css";
import Main from "./pages/main/Main";
import Search from "./pages/search/Search";
import Suggestion from "./pages/suggestion/Suggestion";
import AllActivities from "./components/activities/AllActivities";
import Activities from "./components/activities/Activities";
import AddActivity from "./pages/AddActivity/AddActivity";

setupIonicReact();

const App: React.FC = () => {
  const [storage, setStorage] = useState<Storage | null>(null);
  const [userData, setUserData] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | undefined>();

  const handleSelectChange = (event: CustomEvent) => {
    setSelectedOption(event.detail.value);
  };

  const handleContinue = async () => {
    await saveUserData(true);
    setUserData(true);
  };

  useEffect(() => {
    // Inicializa el almacenamiento y recupera el estado
    const initStorage = async () => {
      const storage = new Storage();
      await storage.create();
      setStorage(storage);
      
      const savedData = await storage.get('userData');
      if (savedData) {
        setUserData(savedData);
      }
    };
    initStorage();

    SplashScreen.hide();
    StatusBar.setStyle({ style: Style.Dark });
  }, []);

  // Función para guardar datos
  const saveUserData = async (data: boolean) => {
    if (storage) {
      await storage.set('userData', data);
      console.log('Datos guardados exitosamente.');
    }
  };

  return (
    <IonApp className="basics">
      {userData &&
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/main" component={Main} />
              <Route path="/search" component={Search} />
              <Route path="/allfilter/:subcategory" component={AllActivities} />
              <Route path="/all" component={AllActivities} />
              <Route path="/activities/:category/:id" component={Activities} />
              <Route exact path="/suggestions" component={Suggestion} />
              <Route exact path="/addActivity" component={AddActivity} />
              <Redirect exact from="/" to="/main" />
            </IonRouterOutlet>
            <IonTabBar className="hometab" slot="bottom">
              <IonTabButton tab="main" href="/main">
                <IonIcon icon={CustomHome} />
              </IonTabButton>
              <IonTabButton tab="search" href="/search">
                <IonIcon icon={CustomSearch} />
              </IonTabButton>
              <IonTabButton tab="addActivity" href="/addActivity">
                <IonIcon icon={CustomAdd} />
              </IonTabButton>
              <IonTabButton tab="all" href="/all">
                <IonIcon icon={CustomActivities} />
              </IonTabButton>
              <IonTabButton tab="suggestions" href="/suggestions">
                <IonIcon icon={CustomProfile} />
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      }
      {!userData &&
        <>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Dropdown Example</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonSelect
              value={selectedOption}
              placeholder="Selecciona tu rol"
              onIonChange={handleSelectChange}
            >
              <IonSelectOption value="1">Padre / Madre</IonSelectOption>
              <IonSelectOption value="2">Maestro</IonSelectOption>
              <IonSelectOption value="3">Cuidador</IonSelectOption>
            </IonSelect>
            <IonButton expand="block" onClick={handleContinue} disabled={!selectedOption}>
              Continuar
            </IonButton>
          </IonContent>
        </>
      }
    </IonApp>
  );
};

export default App;
