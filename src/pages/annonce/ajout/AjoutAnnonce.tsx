import { IonBackButton, IonButtons, IonContent, IonHeader, IonTextarea, IonToolbar } from "@ionic/react";
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
        const token = localStorage.getItem('tokenAdmin');

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const url = baseUrlRelationnel.baseUrlRelationnel + "lieu/findAll";

        const fectchData = async() => {
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

    const [annonce, setAnnonce] = useState<any>({
        dateHeure: Date.now(),
        titre: null,
        description: null,
        prixVente: 0,
        lieu: null,
        marque: null,
        modele: null,
        categorie: null,
        type_energie: null,
        vitesse: null,
        places: 0,
        proprietaire: null,
        etat: 0,
        status: 0,
        kilometrage: null
    })

    const history = useHistory();

    const handleClick = () => {
        try {
            history.push({
                pathname: "/ajout_voiture",
                state: { annonce: annonce }
            })
        } catch (error) {
            console.error("error", error);
        }
    }

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setAnnonce({
            ...annonce,
            [e.target.name]: e.target.value
        })
    };

    const handleChangeLieu = (selectedLieu: string | number | any) => {
        setAnnonce({
            ...annonce,
            lieu: selectedLieu
        });
    };

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
                                name="titre"
                                onChange={handleChange}
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
                                name="prixVente"
                                onChange={handleChange}
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
                                onSelect={handleChangeLieu}
                            />
                        </div>

                        <div className="ajout-annonce__content__input">
                            <label className="ajout-annonce__content__input--label"> 
                                Description
                            </label>
                            <textarea 
                                name="description" 
                                className="ajout-annonce__content__input--element"
                                onChange={handleChange}
                            > </textarea>
                        </div>
                        <div className="ajout-annonce__content__input ajout-annonce__content__input--button-container">
                            <Bouton
                                text="Suivant"
                                className="ajout-annonce__content__input--button"
                                onClick={handleClick}
                            />
                        </div>           
                    </div>
                </div>
           </IonContent>
        </>
    )
}

export default AjoutAnnonce;