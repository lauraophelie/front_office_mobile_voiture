import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import "./Home.scss";
import Bouton from '../components/bouton/Bouton';

const Home: React.FC = () => {
  return (
    <IonPage>
      <div className="home">
        <h1 className="home__title">
          <p>
            Bienvenu(e) sur,
          </p>
          <p>
            Occazz
          </p>
        </h1>
        <div className="home__nav">
          <Bouton 
            text={"Se connecter"}
            className="home__nav__button home__nav__button--one"
          />
          <Bouton 
            text={"S'inscrire"} 
            className="home__nav__button home__nav__button--two"
          />
        </div>
      </div>
    </IonPage>
  );
};

export default Home;
