import {
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./suggestion.css";
import { useHistory } from "react-router";

const Suggestion: React.FC = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/addActivity`);
  };

  return (
    <IonPage>
      <IonContent>
        <section className="bodybgs min-h-full">
          <IonText color="dark" class="texth1">
            <h1>¿Por qué esta app...?</h1>
          </IonText>
          <div className="infosugg">
            <p className="parragraphp1">
              ¡Bienvenidos a un viaje de descubrimiento y diversión! Este tomo es el resultado de un emocionante proyecto de investigación titulado "Aplicación móvil para la estimulación psicomotriz y la reducción de hábitos de sedentarismo en la primera infancia", llevado a cabo en Fusagasugá, Colombia, y Muzambinho, Brasil.
            </p>
          </div>
          <div className="infosugg">
            <p className="parragraphp1">
              Todo comenzó al observar la realidad en los hogares comunitarios tradicionales de bienestar en Fusagasugá, donde la atención a los niños es una prioridad. Gracias a la colaboración con las dedicadas madres comunitarias del municipio, los entusiastas estudiantes de la licenciatura en Educación Básica con énfasis en Educación Física, Recreación y Deporte de la Universidad de Cundinamarca, y las observaciones realizadas por nuestros curiosos investigadores, nació esta cartilla.
            </p>
          </div>
          <div className="infosugg">
            <p className="parragraphp1">
              Pero, ¿qué hace a esta cartilla tan especial? Más que una simple respuesta a las necesidades de la comunidad, es un complemento pedagógico diseñado para destacar los maravillosos beneficios de la recreación. Queremos que todos reconozcan cómo la diversión y el juego pueden estimular la actividad física y, al mismo tiempo, reducir el sedentarismo en los más pequeños.
            </p>
          </div>
          <div className="infosugg">
            <p className="parragraphp1">
              Imagina un mundo donde los niños corren, saltan y juegan mientras aprenden y desarrollan sus habilidades psicomotrices. Este tomo es tu guía para crear ese mundo, lleno de actividades lúdicas y educativas que transformarán la rutina diaria en una aventura emocionante.

              Únete a nosotros en esta misión de promover una infancia activa y saludable. Juntos, podemos hacer de cada día una oportunidad para aprender, crecer y, sobre todo, ¡divertirse!
            </p>
          </div>
          <button onClick={handleClick}>Crear actividad</button>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Suggestion;
