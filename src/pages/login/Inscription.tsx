import { IonPage } from "@ionic/react";

import "./Login.scss";
import Input from "../../components/input/Input";
import Bouton from "../../components/bouton/Bouton";
import { useHistory } from "react-router";
import { useState } from "react";
import baseUrl from "../../config";
import axios from "axios";

const Inscription: React.FC = () => {
    const history = useHistory();

    const [inscription, setInscription] = useState({
        nom_complet: null,
        date_naissance: null,
        email: null,
        password: null,
        role: 0
    })

    
    const [error, setError] = useState(null);

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setInscription({
            ...inscription,
            [e.target.name]: e.target.value
        })
    };

    const clickInscription = async(e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const url = baseUrl.baseUrl + "rest/auth/inscription";
        console.log(inscription);
        try {
            const response = await axios.post(url, inscription);
            console.log(inscription);
            if(response.data) {
                console.log(response.data);
                const token = response.data.token;
                const userEmail = response.data.email;

                const getToken = await axios.post(baseUrl.baseUrlRelationnel + "rest/auth/login", baseUrl.admin);
                
                if(getToken.data) {
                    localStorage.setItem("token", token);
                    localStorage.setItem("tokenAdmin", getToken.data.token);
                    localStorage.setItem("userEmail", userEmail);

                    history.push("/menu");
                }
            } else if(response.data.error) {
                setError(response.data.error);
                console.log(error);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <IonPage>
            <div className="form">
                <h1 className="form__title form__title__inscription">
                    Inscription
                    
                    <p className="form__p">
                        Créez votre compte
                    </p>
                </h1>

                <div className="form__input">
                    <Input
                        type={"text"} 
                        placeholder={"Nom complet"}
                        className="form__input__text"
                        required={true}
                        name="nom_complet"
                        onChange={handleChange}
                    />

                    <Input
                        type={"date"} 
                        className="form__input__text"
                        required={true}
                        name="date_naissance"
                        onChange={handleChange}
                    />

                    <Input 
                        type={"email"} 
                        placeholder={"Adresse e-mail"}
                        className="form__input__text"
                        required={true}
                        name="email"
                        onChange={handleChange}
                    />

                    <Input 
                        type={"password"} 
                        placeholder={"Mot de passe"}
                        className="form__input__text"
                        required={true}
                        name="password"
                        onChange={handleChange}
                    />

                    <Bouton
                        text={"S'inscrire"} 
                        className="form__input__button"
                        onClick={clickInscription}
                    />
                </div>

                <p 
                    className="form__p form__p--footer"
                    onClick={() => history.push("/login")}
                >
                    Déjà inscrit(e) ? Connectez-vous
                </p>
            </div>   
        </IonPage>
    )
}

export default Inscription;