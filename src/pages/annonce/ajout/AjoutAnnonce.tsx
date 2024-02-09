import { IonBackButton, IonButtons, IonContent, IonHeader, IonSelect, IonSelectOption, IonTextarea, IonToolbar } from "@ionic/react";
import "../annonce.scss";
import Input from "../../../components/input/Input";
import Select from "../../../components/input/Select";
import { useEffect, useState } from "react";
import Bouton from "../../../components/bouton/Bouton";
import { useHistory } from "react-router";
import baseUrlRelationnel from "../../../config";
import axios from "axios";

const AjoutAnnonce: React.FC = () => {
    const [lieu, setLieu] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const url = baseUrlRelationnel.baseUrlRelationnel + "lieu/findAll";

        const fectchData = async() => {
            console.log(url);
            try {
                const response = await axios.get(url, config);

                if(response.data.data) {
                    setLieu(response.data.data);
                } else if(response.data.error) {
                    console.error(response.data.error);
                }
            } catch (error) {
                console.error(error);
            }
        }
        fectchData();
    }, []);

    const [annonce, setAnnonce] = useState({
        dateHeure: null,
        titre: null,
        description: null,
        prixVente: 0,
        lieu: null,
        proprietaire: null,
        voiture: null,
        etat: 0,
        status: 0
    })

    const history = useHistory();

    const handleClick = () => {
        history.push("/ajout_voiture");
    }

    return (
        <>
           <IonHeader>
                <IonToolbar>
                    <IonButtons>
                        <IonBackButton defaultHref="/menu"> </IonBackButton>
                    </IonButtons>
                </IonToolbar>
           </IonHeader>
           <IonContent>
                <div className="ajout-annonce">
                    <h2 className="ajout-annonce__title">
                        <p className="ajout-annonce__title--main">
                            Ajout annonce
                        </p>
                        <p className="ajout-annonce__title--extra">
                            Créer une annonce
                        </p>
                    </h2>

                    <div className="ajout-annonce__content">
                        <div className="ajout-annonce__content__input">
                            <label className="ajout-annonce__content__input--label"> 
                                Titre de l'annonce 
                            </label>
                            <Input 
                                type={"text"}
                                placeholder="Ecrivez ici"
                                className="ajout-annonce__content__input--element"
                            /> 
                        </div>

                        <div className="ajout-annonce__content__input">
                            <label className="ajout-annonce__content__input--label"> 
                                Prix de vente
                            </label>
                            <Input 
                                type={"text"}
                                placeholder="Ecrivez ici"
                                className="ajout-annonce__content__input--element"
                            /> 
                        </div>

                        <div className="ajout-annonce__content__input">
                            <label className="ajout-annonce__content__input--label"> 
                                Lieu
                            </label>
                            <Select 
                                placeholder="Chosir un lieu"
                                data={lieu}
                            />
                        </div>

                        <div className="ajout-annonce__content__input">
                            <label className="ajout-annonce__content__input--label"> 
                                Description
                            </label>
                            <IonTextarea value={"Ecrivez ici"}> </IonTextarea>
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

export default AjoutAnnonce;