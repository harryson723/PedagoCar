import React, { useEffect, useState } from "react";
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
import niña from "./assets/Img/girl.webp";
import {
  personOutline,
  chevronDown,
  chevronUp,
  arrowForward,
} from "ionicons/icons";
import { SplashScreen } from "@capacitor/splash-screen";
import { StatusBar, Style } from "@capacitor/status-bar";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router";

import { Storage } from "@ionic/storage";

import CustomHome from "./assets/icons/HomeNew.svg";
import CustomActivities from "./assets/icons/ActivitiesNew.svg";
import CustomSearch from "./assets/icons/SerachNew.svg";
import CustomProfile from "./assets/icons/ProfileNew.svg";
import CustomAdd from "./assets/icons/AddNew.svg";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "../src/Styles/globals.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/palettes/dark.class.css";
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

      const savedData = await storage.get("userData");
      if (savedData) {
        setUserData(savedData);
      }
    };
    initStorage();

    SplashScreen.hide();
  }, []);

  // Función para guardar datos
  const saveUserData = async (data: boolean) => {
    if (storage) {
      await storage.set("userData", data);
      console.log("Datos guardados exitosamente.");
    }
  };
  const customAlertOptions = {
    header: "Rol",
    subHeader: "Selecciona tu rol",
    translucent: true,
  };

  return (
    <IonApp className="basics">
      {userData && (
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
      )}
      {!userData && (
        <>
          <IonContent>
            <div className="select_roll_container">
              <div className="w-full flex flex-col content-center items-center justify-center">
                <h1 className="poppins text-white font-extrabold text-3xl mb-5">Bienvenidos</h1>
                <img src={niña} className="w-[60%] self-center" />
              </div>
              <div className="relative bg-white w-[100%] h-[200px] p-6 rounded-3xl edit_shadow flex justify-center content-center items-center">
                <div className="w-[95%]">
                  <IonSelect
                    value={selectedOption}
                    placeholder="ESCOGER ROL"
                    onIonChange={handleSelectChange}
                    className="no-focus-indicator border border-black pl-[10%] rounded-3xl"
                    toggleIcon={chevronDown}
                    expandedIcon={chevronUp}
                    interfaceOptions={customAlertOptions}
                  >
                    <IonIcon
                      slot="start"
                      icon={personOutline}
                      aria-hidden="true"
                      color="medium"
                      className="poppins"
                    ></IonIcon>
                    <IonSelectOption value="1">Padre / Madre</IonSelectOption>
                    <IonSelectOption value="2">Maestro</IonSelectOption>
                    <IonSelectOption value="3">Cuidador</IonSelectOption>
                  </IonSelect>
                </div>
                <div className="rounded-full absolute -bottom-8 overflow-hidden p-0.5 bg-white edit_shadow2">
                  <IonButton
                    onClick={handleContinue}
                    disabled={!selectedOption}
                    shape="round"
                    size="large"
                  >
                    <IonIcon
                      slot="icon-only"
                      icon={arrowForward}
                      aria-hidden="true"
                      color="ligth"
                    ></IonIcon>
                  </IonButton>
                </div>
              </div>
            </div>
          </IonContent>
        </>
      )}
    </IonApp>
  );
};

export default App;
