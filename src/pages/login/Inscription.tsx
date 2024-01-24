import { IonPage } from "@ionic/react";

import "./Login.scss";
import Input from "../../components/input/Input";
import Bouton from "../../components/bouton/Bouton";
import { useHistory } from "react-router";

const Inscription: React.FC = () => {
    const history = useHistory();

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
                    />

                    <Input
                        type={"date"} 
                        className="form__input__text"
                        required={true}
                    />

                    <Input 
                        type={"email"} 
                        placeholder={"Adresse e-mail"}
                        className="form__input__text"
                        required={true}
                    />

                    <Input 
                        type={"password"} 
                        placeholder={"Mot de passe"}
                        className="form__input__text"
                        required={true}
                    />

                    <Bouton
                        text={"S'inscrire"} 
                        className="form__input__button"
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