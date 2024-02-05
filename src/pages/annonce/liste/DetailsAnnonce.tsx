import { IonContent } from "@ionic/react";
import { useLocation } from "react-router";

const DetailsAnnonce: React.FC = () => {
    const location = useLocation<{ id: number }>();
    const annonceId = location.state.id;

    console.log("Annonce : " + annonceId);

    return (
        <IonContent>
            <div className="details-annonce">
                <div className="details-annonce__image">
                    images
                </div>

                <div className="details-annonce__content">
                    
                </div>
            </div>
        </IonContent>
    )
}

export default DetailsAnnonce;