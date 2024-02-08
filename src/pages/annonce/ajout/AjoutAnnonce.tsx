import { IonBackButton, IonButtons, IonContent, IonHeader, IonSelect, IonSelectOption, IonTextarea, IonToolbar } from "@ionic/react";
import "../annonce.scss";
import Input from "../../../components/input/Input";
import Select from "../../../components/input/Select";
import { useState } from "react";

const AjoutAnnonce: React.FC = () => {
    const [lieu, setLieu] = useState([
        {
            id: 1,
            designation: "Antananarivo"
        }
    ])

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
                    </div>
                </div>
           </IonContent>
        </>
    )
}

export default AjoutAnnonce;