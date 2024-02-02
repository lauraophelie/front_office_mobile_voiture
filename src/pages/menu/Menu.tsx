import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent } from "@ionic/react";
import "./Menu.scss";
import "./card/card.scss";

const Menu: React.FC = () => {
    return (
        <IonContent>
            <div className="menu">
                <div className="menu__header">
                    <h1 className="menu__title">
                        <p className="menu__title--p">
                            Bienvenu(e),
                        </p>
                        <p className="menu__title--h">
                            Nom utilisateur
                        </p>
                    </h1>
                </div>

                <div className="menu__content">
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle>Card Title</IonCardTitle>
                            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                        </IonCardHeader>

                        <IonCardContent>Card Content</IonCardContent>
                    </IonCard>

                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle>Card Title</IonCardTitle>
                            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                        </IonCardHeader>

                        <IonCardContent>Card Content</IonCardContent>
                    </IonCard>
                </div>
            </div>
        </IonContent>
    )
}

export default Menu;