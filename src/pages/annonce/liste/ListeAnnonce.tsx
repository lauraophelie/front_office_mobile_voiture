import { IonContent } from "@ionic/react";
import "../annonce.scss";

const ListeAnnonce: React.FC = () => {
    return (
        <IonContent>
            <div className="liste-annonce">
                <div className="liste-annonce__header">
                    <h1 className="liste-annonce--title">
                        Annonces
                    </h1>
                </div>

                <div className="liste-annonce__content">
                    
                </div>
            </div>
        </IonContent>
    )
}

export default ListeAnnonce;