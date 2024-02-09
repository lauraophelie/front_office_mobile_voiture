import { IonBackButton, IonButtons, IonContent, IonHeader, IonToolbar } from "@ionic/react";
import "../annonce.scss";
import { useState } from "react";
import Select from "../../../components/input/Select";
import Input from "../../../components/input/Input";
import Bouton from "../../../components/bouton/Bouton";
import { useHistory } from "react-router";

const AjoutVoiture: React.FC = () => {
    const [listeMarque, setListeMarque] = useState([
        {
            id: 1,
            nom: "Toyota"
        }
    ]);

    const [listeModele, setListeModele] = useState([]);

    const history = useHistory();

    const handleClick = () => {
        history.push("/details_voiture");
    }

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonButtons>
                        <IonBackButton defaultHref="/ajout_annonce"> </IonBackButton>
                    </IonButtons>
                </IonToolbar>
           </IonHeader>
           <IonContent>
                <div className="ajout-annonce">
                    <h2 className="ajout-annonce__title">
                        <p className="ajout-annonce__title--main">
                            Ajout annonce (2)
                        </p>
                        <p className="ajout-annonce__title--extra">
                            A propos du véhicule
                        </p>
                    </h2>

                    <div className="ajout-annonce__content">
                        <div className="ajout-annonce__content__input">
                            <label className="ajout-annonce__content__input--label"> 
                                Marque
                            </label>
                            <Select
                                placeholder="Choisir une marque"
                                data={listeMarque}
                            />
                        </div>

                        <div className="ajout-annonce__content__input">
                            <label className="ajout-annonce__content__input--label"> 
                                Modèle
                            </label>
                            <Select
                                placeholder="Choisir un modèle"
                                data={listeModele}
                            />
                        </div>

                        <div className="ajout-annonce__content__input">
                            <label className="ajout-annonce__content__input--label"> 
                                Nombre de places
                            </label>
                            <Input
                                type={"text"}
                                placeholder="Ecrivez ici"
                                className="ajout-annonce__content__input--element"
                            /> 
                        </div>

                        <div className="ajout-annonce__content__input">
                            <label className="ajout-annonce__content__input--label"> 
                                Nombre de portes
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

export default AjoutVoiture;