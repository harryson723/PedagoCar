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
}

const MainButton: React.FC<MainButtonProps> = ({ text, onClick }) => {
    return (
        <IonButton
            className="activityBtn custom-button"
            onClick={onClick}
        >
            {text}
        </IonButton>
    );
};

export default MainButton;
