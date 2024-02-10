import { IonBackButton, IonButtons, IonContent, IonHeader, IonToolbar } from "@ionic/react";
import "../annonce.scss";
import { useEffect, useState } from "react";
import Select from "../../../components/input/Select";
import Input from "../../../components/input/Input";
import Bouton from "../../../components/bouton/Bouton";
import baseUrlRelationnel from "../../../config";
import { useHistory, useLocation } from "react-router";
import axios from "axios";

const AjoutVoiture: React.FC = () => {
    const [listeMarque, setListeMarque] = useState([]);
    const [listeModele, setListeModele] = useState([]);

    const location = useLocation<{ annonce: {} }>();
    const annonceData = location.state.annonce;

    useEffect(() => {
        const token = localStorage.getItem('tokenAdmin');

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const url = baseUrlRelationnel.baseUrlRelationnel + "marque/findAll";
        const fectchData = async() => {
            try {
                const response = await axios.get(url, config);

                if(response.data.data) {
                    setListeMarque(response.data.data);
                } else if(response.data.error) {
                    console.error(response.data.error);
                }
            } catch (error) {
                console.error(error);
            }
        }
        fectchData();
    }, []);

    const history = useHistory();

    const [annonce, setAnnonce] = useState(annonceData);

    const handleChangeModele = (selectedModele: string | number) => {
        setAnnonce({
            ...annonce,
            modele: selectedModele
        })
    }

    const handleChangeMarque = (selectedMarque : string | number) => {
        setAnnonce({
            ...annonce,
            marque: selectedMarque
        });
        const fetchModele = async () => {
            const url = baseUrlRelationnel.baseUrlRelationnel + "modele/findByMarque/" + selectedMarque;
            const token = localStorage.getItem('tokenAdmin');

            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            try {
                const response = await axios.get(url, config);
                if(response.data.data) {
                    setListeModele(response.data.data);
                } else if(response.data.error) {
                    console.error(response.data.error);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchModele();
    }

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setAnnonce({
            ...annonce,
            [e.target.name]: e.target.value
        })
    };

    const handleClick = () => {
        console.log(annonce);
        history.push({
            pathname: "/details_voiture",
            state: { annonce: annonce }
        })
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
                                onSelect={handleChangeMarque}
                            />
                        </div>

                        <div className="ajout-annonce__content__input">
                            <label className="ajout-annonce__content__input--label"> 
                                Modèle
                            </label>
                            <Select
                                placeholder="Choisir un modèle"
                                data={listeModele}
                                onSelect={handleChangeModele}
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
                                name="places"
                                onChange={handleChange}
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