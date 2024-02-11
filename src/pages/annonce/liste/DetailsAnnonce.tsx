import { IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import { useLocation } from "react-router";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';

import Image from "../../../components/image/Image";
import "../annonce.scss";
import baseUrlRelationnel from "../../../config";
import { useEffect, useState } from "react";
import axios from "axios";
import { Annonce, DetailsAnnonceInterface } from "../annonce";

const DetailsAnnonce: React.FC = () => {
    const location = useLocation<{ id: number }>();
    const annonceId = location.state.id;

    const [ficheAnnonce, setFicheAnnonce] = useState<Annonce>({});
    const [images, setImages] = useState<DetailsAnnonceInterface>();
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("tokenAdmin");

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const url = baseUrlRelationnel.baseUrlRelationnel + "annonce/findById/" + annonceId;
        const urlImage = baseUrlRelationnel.baseUrlRelationnel + "details_annonce/findByAnnonce/" + annonceId;
        
        const fetchData = async() => {
            const response = await axios.get(url, config);

            if(response.data.data) {
                setFicheAnnonce(response.data.data);

                const img = await axios.get(urlImage, config);

                if(img.data.data) {
                    setImages(img.data.data);
                }
            } else if(response.data.error) {
                setError(response.data.error);
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/liste_annonce"> </IonBackButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            {ficheAnnonce && (
                <IonContent>
                    <div className="details-annonce">
                        <div className="details-annonce__image">
                            <Swiper>
                                <SwiperSlide>
                                    <Image
                                        src={images && images.image1}
                                        className="details-annonce__image__element"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image
                                        src={images && images.image2}
                                        className="details-annonce__image__element"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image
                                        src={images && images.image3}
                                        className="details-annonce__image__element"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image
                                        src={images && images.image4}
                                        className="details-annonce__image__element"
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        
                        <div className="details-annonce__content">
                            <h1 className="details-annonce__content__header">
                                <p className="details-annonce__content__header--main">
                                    {ficheAnnonce.titre}
                                </p>
                                <p className="details-annonce__content__header--details">
                                    Créée le : {ficheAnnonce.dateHeure}
                                </p>
                            </h1>

                            <h2 className="details-annonce__content__desc">
                                <p className="details-annonce__content__desc--main">
                                    Description
                                </p>
                                <p className="details-annonce__content__desc--content">
                                    {ficheAnnonce.description}
                                </p>
                            </h2>
                            <div className="details-annonce__content__element">
                                <p className="details-annonce__content__element--main">
                                    Lieu 
                                </p>
                                <p className="details-annonce__content__element--content">
                                    {ficheAnnonce.lieu && ficheAnnonce.lieu.nom_lieu}
                                </p>
                            </div>

                            <div className="details-annonce__content__element">
                                <p className="details-annonce__content__element--main">
                                    Prix
                                </p>
                                <p className="details-annonce__content__element--content">
                                    {ficheAnnonce.prixVente}
                                </p>
                            </div>

                            <div className="details-annonce__content__voiture">
                                <h2 className="details-annonce__content__voiture--title">
                                    A propos du véhicule
                                </h2>

                                <div className="details-annonce__content__element">
                                    <p className="details-annonce__content__element--main">
                                        Marque
                                    </p>
                                    <p className="details-annonce__content__element--content">
                                        {ficheAnnonce.voiture && ficheAnnonce.voiture.marque && ficheAnnonce.voiture.marque.nom}
                                    </p>
                                </div>

                                <div className="details-annonce__content__element">
                                    <p className="details-annonce__content__element--main">
                                        Modèle
                                    </p>
                                    <p className="details-annonce__content__element--content">
                                        {ficheAnnonce.voiture && ficheAnnonce.voiture.modele && ficheAnnonce.voiture.modele.nom}
                                    </p>
                                </div>

                                <div className="details-annonce__content__element">
                                    <p className="details-annonce__content__element--main">
                                        Catégorie
                                    </p>
                                    <p className="details-annonce__content__element--content">
                                        {ficheAnnonce.voiture && ficheAnnonce.voiture.categorie && ficheAnnonce.voiture.categorie.nom}
                                    </p>
                                </div>

                                <div className="details-annonce__content__element">
                                    <p className="details-annonce__content__element--main">
                                        Vitesse
                                    </p>
                                    <p className="details-annonce__content__element--content">
                                        {ficheAnnonce.voiture && ficheAnnonce.voiture.vitesse && ficheAnnonce.voiture.vitesse.designation}
                                    </p>
                                </div>

                                <div className="details-annonce__content__element">
                                    <p className="details-annonce__content__element--main">
                                        Places
                                    </p>
                                    <p className="details-annonce__content__element--content">
                                        {ficheAnnonce.voiture && ficheAnnonce.voiture.nombrePlace}
                                    </p>
                                </div>

                                <div className="details-annonce__content__element">
                                    <p className="details-annonce__content__element--main">
                                        Energie
                                    </p>
                                    <p className="details-annonce__content__element--content">
                                        {ficheAnnonce.voiture && ficheAnnonce.voiture.energie && ficheAnnonce.voiture.energie.designation}
                                    </p>
                                </div>

                                <div className="details-annonce__content__element">
                                    <p className="details-annonce__content__element--main">
                                        Kilométrage
                                    </p>
                                    <p className="details-annonce__content__element--content">
                                        {ficheAnnonce.voiture && ficheAnnonce.voiture.kilometrage}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </IonContent>
            )}
        </>
    )
}

export default DetailsAnnonce;