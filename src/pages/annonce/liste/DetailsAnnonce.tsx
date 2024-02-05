import { IonContent } from "@ionic/react";
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
                </div>
            </div>
        </IonContent>
    )
}

export default DetailsAnnonce;