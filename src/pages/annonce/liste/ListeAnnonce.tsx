import { IonContent } from "@ionic/react";
import "../annonce.scss";
import Bouton from "../../../components/bouton/Bouton";
import { useHistory } from "react-router";
import AnnonceCard from "./AnnonceCard";

const ListeAnnonce: React.FC = () => {
    const history = useHistory();

    const data = [
        {
            id: 1,
            title: "Titre de l'annonce",
            horaire: "Date et Heure",
            image: "src/imgs/essai.jpg"
        },
        {
            id: 2,
            title: "Titre de l'annonce",
            horaire: "Date et Heure",
            image: "src/imgs/essai.jpg"
        },
        {
            id: 3,
            title: "Titre de l'annonce",
            horaire: "Date et Heure",
            image: "src/imgs/essai.jpg"
        },
        {
            id: 4,
            title: "Titre de l'annonce",
            horaire: "Date et Heure",
            image: "src/imgs/essai.jpg"
        },
        {
            id: 5,
            title: "Titre de l'annonce",
            horaire: "Date et Heure",
            image: "src/imgs/essai.jpg"
        }
    ]

    return (
        <IonContent>
            <div className="liste-annonce">
                <div className="liste-annonce__header">
                    <h1 className="liste-annonce--title">
                        Vos Annonces
                    </h1>
                </div>
                
                {data.length > 0 ? (
                    <div className="liste-annonce__content">
                        {data.map((item, index) => (
                            <AnnonceCard 
                                key={index}
                                title={item.title} 
                                horaire={item.horaire} 
                                image={item.image} 
                                onClick={() => history.push({
                                    pathname: "/details_annonce",
                                    state: { id: item.id }
                                })}
                            />                        
                        ))}
                    </div>
                ) : (
                    <div className="liste-annonce__empty">
                        <p className="liste-annonce__empty--message">
                            Aucune annonce disponible
                        </p>
                        <Bouton
                            text="Créer une annonce"
                            className="liste-annonce__empty--button"
                            onClick={() => history.push("/ajout_annonce")}
                        />
                    </div>
                )}
            </div>
        </IonContent>
    )
}

export default ListeAnnonce;