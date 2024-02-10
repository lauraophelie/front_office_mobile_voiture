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

const DetailsAnnonce: React.FC = () => {
    const location = useLocation<{ id: number }>();
    const annonceId = location.state.id;

    const [ficheAnnonce, setFicheAnnonce] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("tokenAdmin");

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const url = baseUrlRelationnel.baseUrlRelationnel + "annonce/findById/" + annonceId;
        const fetchData = async() => {
            const response = await axios.get(url, config);

            if(response.data.data) {
                setFicheAnnonce(response.data.data);
            } else if(response.data.error) {
                setError(response.data.error);
                console.log(error);
            }
        }
        fetchData();
    })

    console.log("Annonce : " + annonceId);

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/liste_annonce"> </IonBackButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className="details-annonce">
                    <div className="details-annonce__image">
                        <Swiper>
                            <SwiperSlide>
                                <Image
                                    src="src/imgs/essai-1.jpg"
                                    className="details-annonce__image__element"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    src="src/imgs/essai-2.jpg"
                                    className="details-annonce__image__element"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    src="src/imgs/essai-3.jpg"
                                    className="details-annonce__image__element"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    src="src/imgs/essai-4.jpg"
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
                                {ficheAnnonce.lieu.nom_lieu}
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
                                    {ficheAnnonce.voiture.marque.designation}
                                </p>
                            </div>

                            <div className="details-annonce__content__element">
                                <p className="details-annonce__content__element--main">
                                    Modèle
                                </p>
                                <p className="details-annonce__content__element--content">
                                    {ficheAnnonce.voiture.modele.designation}
                                </p>
                            </div>

                            <div className="details-annonce__content__element">
                                <p className="details-annonce__content__element--main">
                                    Catégorie
                                </p>
                                <p className="details-annonce__content__element--content">
                                    {ficheAnnonce.voiture.categorie.nom}
                                </p>
                            </div>

                            <div className="details-annonce__content__element">
                                <p className="details-annonce__content__element--main">
                                    Vitesse
                                </p>
                                <p className="details-annonce__content__element--content">
                                    {ficheAnnonce.voiture.vitesse.designation}
                                </p>
                            </div>

                            <div className="details-annonce__content__element">
                                <p className="details-annonce__content__element--main">
                                    Places
                                </p>
                                <p className="details-annonce__content__element--content">
                                    {ficheAnnonce.voiture.nombrePlace}
                                </p>
                            </div>

                            <div className="details-annonce__content__element">
                                <p className="details-annonce__content__element--main">
                                    Energie
                                </p>
                                <p className="details-annonce__content__element--content">
                                    {ficheAnnonce.voiture.energie.designation}
                                </p>
                            </div>

                            <div className="details-annonce__content__element">
                                <p className="details-annonce__content__element--main">
                                    Kilométrage
                                </p>
                                <p className="details-annonce__content__element--content">
                                    {ficheAnnonce.voiture.kilometrage}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </IonContent>
        </>
    )
}

export default DetailsAnnonce;