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
  return (
    <IonPage>
      <IonHeader className="w-full h-7">
        <IonTitle class="custom-activitiesbar ion-text-center text-white">
          Información
        </IonTitle>
      </IonHeader>
      <IonContent>
        <section className="bodybgs min-h-full">
          <IonText
            color="dark"
            className="text-black uppercase font-bold m-5 text-2xl text-center "
          ></IonText>
          <div className="infosugg">
            <h2>Quiénes Somos</h2>
            <p className="parragraphp1">
              ¡Bienvenidos a un viaje de descubrimiento y diversión! La presente
              aplicación es el resultado de un emocionante proyecto de
              investigación titulado " EFECTIVIDAD DE UNA APLICACIÓN MÓVIL EN EL
              MEJORAMIENTO DE NIVELES DE ACTIVIDAD FÍSICA EN LA PRIMERA
              INFANCIA, MUNICIPIO DE FUSAGASUGÁ ", llevado a cabo en el
              municipio de Fusagasugá, Colombia.
            </p>
          </div>
          <div className="infosugg">
            <h2>Nuestro Origen</h2>
            <p className="parragraphp1">
              Todo comenzó al observar la realidad en los niños y niñas de
              iniciación escolar en instituciones educativas públicas del
              municipio de Fusagasugá, donde su bienestar es una prioridad.
              Gracias a la colaboración con las docentes dedicadas a la atención
              de dicha población, los entusiastas estudiantes de la licenciatura
              en Educación Física, Recreación y Deporte, sumado a los creativos
              ingenieros de sistemas de la Universidad de Cundinamarca, y las
              observaciones realizadas por nuestros curiosos investigadores,
              nació esta propuesta pedagógica digital.
            </p>
          </div>
          <div className="infosugg">
            <h2>Por Qué Esta App</h2>
            <p className="parragraphp1">
              Pero, ¿qué hace a esta aplicación movil tan especial? Más que una
              simple respuesta a las necesidades de la comunidad, es un
              complemento pedagógico diseñado para destacar los maravillosos
              beneficios del juego. Queremos que todos reconozcan cómo la
              diversión y pueden estimular la actividad física y, al mismo
              tiempo, reducir hábitos de sedentarismo en los más pequeños.
            </p>
          </div>
          <div className="infosugg">
            <h2>Nuestro Compromiso</h2>
            <p className="parragraphp1">
              Imagina un mundo donde los niños corren, saltan y juegan mientras
              aprenden y desarrollan sus habilidades psicomotrices. Esta
              aplicación es tu guía para crear ese mundo, lleno de actividades
              lúdicas y educativas que transformarán la rutina diaria escolar en
              una aventura emocionante.
            </p>
          </div>
          <div className="infosugg">
            <h2>Únete a Nosotros</h2>
            <p className="parragraphp1">
              Únete a nosotros en esta misión de promover una infancia activa y
              saludable. Juntos, podemos hacer de cada día una oportunidad para
              aprender, crecer y, sobre todo, ¡divertirse!
            </p>
          </div>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Suggestion;
