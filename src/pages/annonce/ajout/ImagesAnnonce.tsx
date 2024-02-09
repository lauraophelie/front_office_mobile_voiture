import { IonBackButton, IonButtons, IonContent, IonHeader, IonToolbar } from "@ionic/react";
import { usePhotoGallery } from "../../../hooks/usePhotoGallery";
import { camera } from "ionicons/icons";
import Bouton from "../../../components/bouton/Bouton";
import Image from "../../../components/image/Image";

const ImagesAnnonce: React.FC = () => {
    const { takePhoto, photos } = usePhotoGallery();

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonButtons>
                        <IonBackButton defaultHref="/details_voiture"> </IonBackButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className="ajout-annonce">
                    <h2 className="ajout-annonce__title">
                        <p className="ajout-annonce__title--main">
                            Ajout annonce (4)
                        </p>
                        <p className="ajout-annonce__title--extra">
                            Ajouter des images
                        </p>
                    </h2>

                    <div className="ajout-annonce__content">
                        <Bouton
                            icon={camera}
                            text=" Prendre une photo"
                            className="ajout-annonce__content__input--button ajout-annonce__content__input--camera"
                            onClick={() => takePhoto()}
                        />
                    </div>

                    {photos && (
                        <div className="ajout-annonce__display-img">
                            {photos.map((photos, index) => (
                                <Image
                                    src={photos}
                                    key={index}
                                    className="ajout-annonce__display-img__element"
                                />
                            ))}
                        </div>
                    )}

                    <div className="ajout-annonce__content">
                        <Bouton
                            text="Créer l'annonce"
                            className="ajout-annonce__content__input--button"
                        />
                    </div>
                </div>
            </IonContent>
        </>
    )
}

export default ImagesAnnonce;