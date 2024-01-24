import { IonPage } from "@ionic/react";

import "./Login.scss";
import Input from "../../components/input/Input";
import Bouton from "../../components/bouton/Bouton";
import { useHistory } from "react-router";

const Login: React.FC = () => {
    const history = useHistory();

    return (
        <IonPage>
            <div className="form">
                <h1 className="form__title">
                    Login
                    <p className="form__p">
                        Connectez-vous à votre compte
                    </p>
                </h1>

                <div className="form__input">
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
                        text={"Se connecter"} 
                        className="form__input__button"
                    />
                </div>

                <p 
                    className="form__p form__p--footer"
                    onClick={() => history.push("/inscription")}
                >
                    Pas encore de compte ? Inscrivez-vous
                </p>
            </div>
        </IonPage>
    )
}

export default Login;

