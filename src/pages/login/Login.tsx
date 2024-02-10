import { IonPage } from "@ionic/react";

import "./Login.scss";
import Input from "../../components/input/Input";
import Bouton from "../../components/bouton/Bouton";
import { useHistory } from "react-router";
import { useState } from "react";
import baseUrl from "../../config";
import axios from "axios";

const Login: React.FC = () => {
    const history = useHistory();

    const [login, setLogin] = useState({
        email: "alice.smith@example.com",
        password: "password456"
    });

    const [error, setError] = useState(null);

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    };

    const clickLogin = async (e: { preventDefault: () => void; }) => {
        console.log("login");
        e.preventDefault();

        const url = baseUrl.baseUrl + "rest/auth/login";
        try {
            const response = await axios.post(url, login);
            
            if(response.data) {
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
                        name="email"
                        value="alice.smith@example.com"
                        onChange={handleChange}
                    />

                    <Input 
                        type={"password"} 
                        placeholder={"Mot de passe"}
                        className="form__input__text"
                        required={true}
                        name="password"
                        value="password456"
                        onChange={handleChange}
                    />

                    <Bouton 
                        text={"Se connecter"} 
                        className="form__input__button"
                        onClick={clickLogin}
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

