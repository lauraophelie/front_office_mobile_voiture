import { IonFab, IonFabButton, IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router"
import Menu from "../../pages/menu/Menu";
import { home, grid, notificationsOutline, logOutOutline, addCircle, add } from 'ionicons/icons';
import ListeAnnonce from "../../pages/annonce/liste/ListeAnnonce";
import Notifications from "../../pages/notifications/Notifications";
import AjoutAnnonce from "../../pages/annonce/ajout/AjoutAnnonce";

const Footer: React.FC = () => {
    return (
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route path="/menu" render={() => <Menu />} exact={true} />
                    <Route path="/liste_annonce" render={() => <ListeAnnonce />} exact={true} />
                    <Route path="/notifications" render={() => <Notifications />} exact={true} />
                    <Route path="/ajout_annonce" render={() => <AjoutAnnonce />} exact={true} />
                </IonRouterOutlet>

                <IonTabBar slot="bottom">
                    <IonTabButton tab="menu" href="/menu">
                        <IonIcon icon={home}/>
                    </IonTabButton>

                    <IonTabButton tab="liste_annonce" href="/liste_annonce">
                        <IonIcon icon={grid} />
                    </IonTabButton>

                    <IonTabButton tab="ajout_annonce" href="/ajout_annonce">
                        <IonIcon icon={addCircle} />
                    </IonTabButton>

                    <IonTabButton tab="notifications" href="/notifications">
                        <IonIcon icon={notificationsOutline} />
                    </IonTabButton>

                    <IonTabButton>
                        <IonIcon icon={logOutOutline} />
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    )
}

export default Footer;