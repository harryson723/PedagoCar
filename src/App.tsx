import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { help, home, search, reorderFour } from "ionicons/icons";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";
import Main from "./pages/main/Main";
import { Redirect, Route } from "react-router";
import { IonReactRouter } from "@ionic/react-router";
import Search from "./pages/search/Search";
import Suggestion from "./pages/suggestion/Suggestion";
import AllActivities from "./components/activities/AllActivities";
import Activities from "./components/activities/Activities";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs >
        <IonRouterOutlet>
          <Route exact path="/main" component={Main} />
          <Route path="/search" component={Search} />
          <Route path="/all" component={AllActivities} />
          <Route path="/activities/:category/:id" component={Activities} />
          <Route exact path="/suggestions" component={Suggestion} />
          <Redirect exact from="/" to="/main" />
        </IonRouterOutlet>
        <IonTabBar slot="bottom" >
          <IonTabButton tab="main" href="/main">
            <IonIcon icon={home} />
          </IonTabButton>
          <IonTabButton tab="search" href="/search">
            <IonIcon icon={search} />
          </IonTabButton>
          <IonTabButton tab="all" href="/all">
            <IonIcon icon={reorderFour} />
          </IonTabButton>
          <IonTabButton tab="suggestions" href="/suggestions">
            <IonIcon icon={help} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
