import { IonRouterOutlet, IonTabs } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

const Header: React.FC = () => {
    return (
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    
                </IonRouterOutlet>
            </IonTabs>
        </IonReactRouter>
    )
}

export default Header;