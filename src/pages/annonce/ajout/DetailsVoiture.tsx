import { IonBackButton, IonButtons, IonContent, IonHeader, IonToolbar } from "@ionic/react";
import { useEffect, useState } from "react";
import Select from "../../../components/input/Select";
import Bouton from "../../../components/bouton/Bouton";
import { useHistory, useLocation } from "react-router";
import baseUrlRelationnel from "../../../config";
import axios from "axios";

const DetailsVoiture: React.FC = () => {
    const [listeCategorie, setListeCategorie] = useState([]);
    const [listeTypeEnergie, setListeTypeEnergie] = useState([]);
    const [listeVitesse, setListeVitesse] = useState([]);

    const token = localStorage.getItem('tokenAdmin');

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };


    const location = useLocation<{ annonce: {} }>();
    const annonceData = location.state.annonce;

    useEffect(() => {
        const url = baseUrlRelationnel.baseUrlRelationnel + "modele/findCaracteristique/" + annonceData.modele;
        
        const fetchData = async () => {
            const response = await axios.get(url, config);
            if (response.data.data) {
                const data = response.data.data;

                const categories = new Set();
                const typeEnergies = new Set();
                const vitesses = new Set();
    
                data.forEach(item => {
                    categories.add(JSON.stringify(item.categorie));
                    typeEnergies.add(JSON.stringify(item.typeEnergie));
                    vitesses.add(JSON.stringify(item.boiteVitesse));
                });
    
                setListeCategorie(Array.from(categories).map(JSON.parse));
                setListeTypeEnergie(Array.from(typeEnergies).map(JSON.parse));
                setListeVitesse(Array.from(vitesses).map(JSON.parse));
            } else if(response.data.error) {
                console.error(response.data.error);
            }
        }
        fetchData();
    }, []);
    

    const history = useHistory();

    const [annonce, setAnnonce] = useState(annonceData);

    const handleChangeCategorie = (selectedCategorie: string | number) => {
        setAnnonce({
            ...annonce,
            categorie: selectedCategorie
        });
    };

    const handleChangeEnergie = (selectedEnergie: string | number) => {
        setAnnonce({
            ...annonce,
            type_energie: selectedEnergie
        });
    };

    const handleChangeVitesse = (selectedVitesse: string | number) => {
        setAnnonce({
            ...annonce,
            vitesse: selectedVitesse
        });
    };
    
    const handleClick = () => {
        history.push({
            pathname: "/images_voiture",
            state: { annonce : annonce }
        });
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
                                onSelect={handleChangeCategorie}
                            />
                        </div>

                        <div className="ajout-annonce__content__input">
                            <label className="ajout-annonce__content__input--label"> 
                                Energie
                            </label>
                            <Select
                                placeholder="Choisir un type d'energie"
                                data={listeTypeEnergie}
                                onSelect={handleChangeEnergie}
                            />
                        </div>

                        <div className="ajout-annonce__content__input">
                            <label className="ajout-annonce__content__input--label"> 
                                Vitesse
                            </label>
                            <Select
                                placeholder="Choisir un type d'energie"
                                data={listeVitesse}
                                onSelect={handleChangeVitesse}
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