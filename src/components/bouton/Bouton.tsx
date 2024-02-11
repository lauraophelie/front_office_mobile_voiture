import { IonIcon } from "@ionic/react";
import "./bouton.scss";

interface BoutonProps {
    text: string,
    className?: string,
    id?: string,
    icon?: any,
    onClick?: () => void
}

const Bouton: React.FC<BoutonProps> = (props) => {
    return (
        <button
            className={props.className + " button"}
            id={props.id}
            onClick={props.onClick}
        >
            <IonIcon icon={props.icon}> </IonIcon>
            {props.text}
        </button>
    )
}

export default Bouton;