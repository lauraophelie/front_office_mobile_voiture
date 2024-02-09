import { IonBackButton, IonButtons, IonContent, IonHeader, IonToolbar } from "@ionic/react";
import { useState } from "react";
import Select from "../../../components/input/Select";
import Bouton from "../../../components/bouton/Bouton";
import { useHistory } from "react-router";
import Input from "../../../components/input/Input";

const DetailsVoiture: React.FC = () => {
    const [listeCategorie, setListeCategorie] = useState([]);
    const [listeTypeEnergie, setListeTypeEnergie] = useState([]);
    const [listeVitesse, setListeVitesse] = useState([]);

    const history = useHistory();

    const handleClick = () => {
        history.push("/images_voiture");
    }

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonButtons>
                        <IonBackButton defaultHref="/ajout_voiture"> </IonBackButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className="ajout-annonce">
                    <h2 className="ajout-annonce__title">
                        <p className="ajout-annonce__title--main">
                            Ajout annonce (3)
                        </p>
                        <p className="ajout-annonce__title--extra">
                            A propos du véhicule
                        </p>
                    </h2>

                    <div className="ajout-annonce__content">
                        <div className="ajout-annonce__content__input">
                            <label className="ajout-annonce__content__input--label"> 
                                Catégorie
                            </label>
                            <Select
                                placeholder="Choisir une catégorie"
                                data={listeCategorie}
                            />
                        </div>

                        <div className="ajout-annonce__content__input">
                            <label className="ajout-annonce__content__input--label"> 
                                Energie
                            </label>
                            <Select
                                placeholder="Choisir un type d'energie"
                                data={listeTypeEnergie}
                            />
                        </div>

                        <div className="ajout-annonce__content__input">
                            <label className="ajout-annonce__content__input--label"> 
                                Vitesse
                            </label>
                            <Select
                                placeholder="Choisir un type d'energie"
                                data={listeVitesse}
                            />
                        </div>

                        <div className="ajout-annonce__content__input">
                            <label className="ajout-annonce__content__input--label"> 
                                Kilométrage
                            </label>
                            <Input
                                type={"text"}
                                placeholder="Ecrivez ici"
                                className="ajout-annonce__content__input--element"
                            /> 
                        </div>

                        <Bouton
                            text="Suivant"
                            className="ajout-annonce__content__input--button"
                            onClick={handleClick}
                        />
                    </div>
                </div>
            </IonContent>
        </>
    )
}

export default DetailsVoiture;