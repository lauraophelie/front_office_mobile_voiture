import { IonContent } from "@ionic/react";
import "../annonce.scss";
import Bouton from "../../../components/bouton/Bouton";
import { useHistory } from "react-router";
import AnnonceCard from "./AnnonceCard";
import { useEffect, useState } from "react";
import baseUrlRelationnel from "../../../config";
import axios from "axios";

const ListeAnnonce: React.FC = () => {
    const history = useHistory();
    const [annonces, setAnnonces] = useState([]);

    useEffect(() => {
        const userEmail = localStorage.getItem('userEmail');
        const token = localStorage.getItem('tokenAdmin');

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        
        const url = baseUrlRelationnel.baseUrlRelationnel + "annonce/find_by_user/" + userEmail;
 
        const fetchData = async () => {
            const response = await axios.get(url, config);
            if(response.data.data) {
                setAnnonces(response.data.data);
            } else if(response.data.error) {
                console.error(response.data.error);
            }
        }
        fetchData();
    }, []);

    return (
        <IonContent>
            <div className="liste-annonce">
                <div className="liste-annonce__header">
                    <h1 className="liste-annonce--title">
                        Vos Annonces
                    </h1>
                </div>
                
                {annonces.length > 0 ? (
                    <div className="liste-annonce__content">
                        {annonces.map((item, index) => (
                            <AnnonceCard 
                                key={index}
                                title={item.titre} 
                                horaire={item.dateHeure} 
                                //image={item.image} 
                                onClick={() => history.push({
                                    pathname: "/details_annonce",
                                    state: { id: item.id }
                                })}
                            />                        
                        ))}
                    </div>
                ) : (
                    <div className="liste-annonce__empty">
                        <p className="liste-annonce__empty--message">
                            Aucune annonce disponible
                        </p>
                        <Bouton
                            text="Créer une annonce"
                            className="liste-annonce__empty--button"
                            onClick={() => history.push("/ajout_annonce")}
                        />
                    </div>
                )}
            </div>
        </IonContent>
    )
}

export default ListeAnnonce;