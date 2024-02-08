import { IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import { useLocation } from "react-router";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';

import Image from "../../../components/image/Image";
import "../annonce.scss";

const DetailsAnnonce: React.FC = () => {
    const location = useLocation<{ id: number }>();
    const annonceId = location.state.id;

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
                                Titre de l'annonce
                            </p>
                            <p className="details-annonce__content__header--details">
                                Créée le : Date et Heure
                            </p>
                        </h1>

                        <h2 className="details-annonce__content__desc">
                            <p className="details-annonce__content__desc--main">
                                Description
                            </p>
                            <p className="details-annonce__content__desc--content">
                                Lorem ipsum dolor sit amet Clita consetetur accusam accusam possim sit. Tempor eirmod erat no amet clita tempor duo dolore vero 
                                consequat ipsum voluptua dolores te et duo dolor elitr.
                            </p>
                        </h2>
                        <div className="details-annonce__content__element">
                            <p className="details-annonce__content__element--main">
                                Lieu 
                            </p>
                            <p className="details-annonce__content__element--content">
                                Lieu
                            </p>
                        </div>

                        <div className="details-annonce__content__element">
                            <p className="details-annonce__content__element--main">
                                Prix
                            </p>
                            <p className="details-annonce__content__element--content">
                                Prix de l'annonce
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
                                    Marque
                                </p>
                            </div>

                            <div className="details-annonce__content__element">
                                <p className="details-annonce__content__element--main">
                                    Modèle
                                </p>
                                <p className="details-annonce__content__element--content">
                                    Modèle
                                </p>
                            </div>

                            <div className="details-annonce__content__element">
                                <p className="details-annonce__content__element--main">
                                    Catégorie
                                </p>
                                <p className="details-annonce__content__element--content">
                                    Catégorie
                                </p>
                            </div>

                            <div className="details-annonce__content__element">
                                <p className="details-annonce__content__element--main">
                                    Vitesse
                                </p>
                                <p className="details-annonce__content__element--content">
                                    Vitesse
                                </p>
                            </div>

                            <div className="details-annonce__content__element">
                                <p className="details-annonce__content__element--main">
                                    Places
                                </p>
                                <p className="details-annonce__content__element--content">
                                    Places
                                </p>
                            </div>

                            <div className="details-annonce__content__element">
                                <p className="details-annonce__content__element--main">
                                    Portes
                                </p>
                                <p className="details-annonce__content__element--content">
                                    Portes
                                </p>
                            </div>

                            <div className="details-annonce__content__element">
                                <p className="details-annonce__content__element--main">
                                    Vitesse
                                </p>
                                <p className="details-annonce__content__element--content">
                                    Vitesse
                                </p>
                            </div>

                            <div className="details-annonce__content__element">
                                <p className="details-annonce__content__element--main">
                                    Kilométrage
                                </p>
                                <p className="details-annonce__content__element--content">
                                    km
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