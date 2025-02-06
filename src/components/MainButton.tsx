import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";

interface MainButtonProps {
  text: string;
  onClick: any;
  className?: string; // Añadir className a las props
}

const MainButton: React.FC<MainButtonProps> = ({
  text,
  onClick,
  className,
}) => {
  return (
    <IonButton
      className={`${className}`} // Combinar las clases
      onClick={onClick}
    >
      <p>{text}</p>
    </IonButton>
  );
};

export default MainButton;
