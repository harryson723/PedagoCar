import {
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./suggestion.css";

const Suggestion: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <section className="bodybgs">
          <div className="infosugg">
            <IonText color="dark" class="texth1">
              <h1>¿Por qué esta app...?</h1>
            </IonText>
            <p className="parragraphp1">
              La Cartilla pedagógica de primera infancia y recreación, Tomo 1,
              es producto del proyecto de investigación “Aplicación móvil para
              estimulación psicomotriz, reducción de hábitos de sedentarismo en
              la primera infancia, municipios de Fusagasugá Colombia, Muzambinho
              Brasil”, que se diseña a partir de la realidad observada en la
              atención de los niños en los hogares comunitarios tradicionales de
              bienestar que funcionan en Fusagasugá. Esto es posible gracias a
              la interacción con las madres comunitarias del municipio, al
              aporte de los estudiantes de la licenciatura de Educación Básica
              con énfasis en Educación Física, Recreación y Deporte de la
              Universidad de Cundinamarca y a la observación realizada por los
              investigadores en el contexto real de atención a los niños. Más
              que una solución a las necesidades de la población, pretende ser
              un complemento pedagógico que permita reconocer los aportes de la
              recreación para estimular la actividad física y así lograr la
              disminución del sedentarismo.
            </p>
          </div>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Suggestion;
