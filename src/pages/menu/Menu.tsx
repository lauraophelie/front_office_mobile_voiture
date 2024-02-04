import { IonContent } from "@ionic/react";
import "./Menu.scss";
import "./card/card.scss";
import { grid, notifications } from "ionicons/icons";
import { useHistory } from "react-router";
import MenuCard from "./card/MenuCard";

const Menu: React.FC = () => {
    const history = useHistory();

    const cards = [
        {
            title: "Annonces",
            icon: grid,
            onclick: () => {history.push("/liste_annonce")}
        },
        {
            title: "Notifications",
            icon: notifications,
            onclick: () => {history.push("/notifications")}
        }
    ]

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
                    {cards.map((item, index) => (
                        <MenuCard
                            key={index}
                            title={item.title}
                            icon={item.icon}
                            onClick={item.onclick}
                        />
                    ))}
                </div>
            </div>
        </IonContent>
    )
}

export default Menu;