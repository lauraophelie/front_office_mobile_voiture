import { IonBackButton, IonButtons, IonContent, IonHeader, IonToolbar } from "@ionic/react";
import { usePhotoGallery } from "../../../hooks/usePhotoGallery";
import { camera } from "ionicons/icons";
import Bouton from "../../../components/bouton/Bouton";
import Image from "../../../components/image/Image";
import { useHistory, useLocation } from "react-router";
import storage from "../../../fireBaseConfig";
import { useState } from "react";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { Annonce, DetailsAnnonce, Voiture } from "../annonce";
import axios from "axios";
import baseUrlRelationnel from "../../../config";

const ImagesAnnonce: React.FC = () => {
    const { takePhoto, photos } = usePhotoGallery();

    const location = useLocation<{ annonce: {} }>();
    const annonceData = location.state.annonce;

    console.log(annonceData);
    console.log(storage);

    const [imageUrls, setImageUrls] = useState<string[]>([]);

    const uploadImageToFirebase = async (photoUri: string) => {
        try {
            const response = await fetch(photoUri);
            const blob = await response.blob();
    
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = async () => {
                const base64data = reader.result;
                const imageRef = ref(storage, `images/${generateUniqueFileName()}`);
                await uploadString(imageRef, base64data as string, 'data_url');
                const downloadURL = await getDownloadURL(imageRef);
                imageUrls.push(downloadURL);
            };
        } catch (error) {
            console.error("Erreur lors du téléchargement de l'image sur Firebase Storage:", error);
            return null;
        }
    };
    
    const history = useHistory();

    const generateUniqueFileName = () => {
        return `${Math.random().toString(36).substring(7)}_${Date.now()}`;
    };

    const handleCreateAnnonce = async () => {
        try {
            const uploadedImageUrls = await Promise.all(photos.map(uploadImageToFirebase));
            console.log(imageUrls);
            const voiture: Voiture = {
                nombrePlace: annonceData.places,
                kilometrage: annonceData.kilometrage,
                marque: {
                    id: annonceData.marque
                },
                modele: {
                    id: annonceData.modele
                },
                categorie: {
                    id: annonceData.categorie
                },
                energie: {
                    id: annonceData.type_energie
                },
                vitesse: {
                    id: annonceData.vitesse
                } 
            }
            const token = localStorage.getItem('tokenAdmin');

            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            const url = baseUrlRelationnel.baseUrlRelationnel + "voiture/save";
            const send = await axios.post(url, voiture, config);
                if(send.data.data) {
                    const dataVoiture = send.data.data;
                    const sendAnnonce: Annonce = {
                        dateHeure: annonceData.dateHeure,
                        titre: annonceData.titre,
                        description: annonceData.description,
                        prixVente: Number(annonceData.prixVente),
                        lieu: {
                            id: annonceData.lieu
                        },
                        proprietaire: localStorage.getItem('userEmail'),
                        voiture: {
                            id: dataVoiture.id
                        },
                        etat: 0,
                        status: 0
                    }
                    const urlAnnonce = baseUrlRelationnel.baseUrlRelationnel + "annonce/insert";
                    const sendingAnnonce = await axios.post(urlAnnonce, sendAnnonce, config);

                        if(sendingAnnonce.data.data) {
                            console.log(sendingAnnonce.data.data);
                            console.log(imageUrls);
                            const dataAnnonce = sendingAnnonce.data.data;
                            const detailsAnnonce: DetailsAnnonce = {
                                id_annonce: {
                                    id: dataAnnonce.id
                                },
                                image1: imageUrls[0],
                                image2: imageUrls[1],
                                image3: imageUrls[2],
                                image4: imageUrls[4]
                            }
                            console.log(detailsAnnonce);
                            const urlImage = baseUrlRelationnel.baseUrlRelationnel + "details_annonce/save";
                            const sendDetails = await axios.post(urlImage, detailsAnnonce, config);

                            if(sendDetails.data.data) {
                                //history.push("/liste_annonce");
                            } else {
                                console.error("An error occurred : " + sendDetails.data.data.error);
                            }
                        } else if(sendingAnnonce.data.error) {
                            console.error("An error occurred : " + sendingAnnonce.data.error);
                        }
                } else if(send.data.error) {
                    console.error("An error occurred : " + sendDetails.data.error);
                }
        } catch (error) {
            console.error("Error creating annonce:", error);
        }
    };

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
                            onClick={handleCreateAnnonce}
                        />
                    </div>
                </div>
            </IonContent>
        </>
    )
}

export default ImagesAnnonce;