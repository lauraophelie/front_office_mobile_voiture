import { IonCard, IonCardContent, IonCardHeader, IonIcon } from "@ionic/react";
import "./card.scss";

interface MenuCardProps {
    title: string,
    icon: any,
    onClick?: () => void
}

const MenuCard: React.FC<MenuCardProps> = (props) => {
    return (
        <IonCard onClick={props.onClick}>
            <IonCardHeader>
                <IonIcon icon={props.icon} size="large" />
            </IonCardHeader>
            <IonCardContent>
                {props.title}
            </IonCardContent>
        </IonCard>
    )
}

export default MenuCard;