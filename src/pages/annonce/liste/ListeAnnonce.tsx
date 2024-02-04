import { IonContent } from "@ionic/react";
import "../annonce.scss";
import Bouton from "../../../components/bouton/Bouton";

const ListeAnnonce: React.FC = () => {
    return (
        <IonContent>
            <div className="liste-annonce">
                <div className="liste-annonce__header">
                    <h1 className="liste-annonce--title">
                        Vos Annonces
                    </h1>
                </div>

                <div className="liste-annonce__empty">
                    <p className="liste-annonce__empty--message">
                        Aucune annonce disponible
                    </p>
                    <Bouton
                        text="Créer une annonce"
                        className="liste-annonce__empty--button"
                    />
                </div>

                <div className="liste-annonce__content">
                    
                </div>
            </div>
        </IonContent>
    )
}

export default ListeAnnonce;