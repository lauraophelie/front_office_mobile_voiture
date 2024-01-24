import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import "./Home.scss";
import Bouton from '../components/bouton/Bouton';
import { useHistory } from 'react-router';

const Home: React.FC = () => {
  const history = useHistory();

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
            onClick={() => history.push("/login")}
          />
          <Bouton 
            text={"S'inscrire"} 
            className="home__nav__button home__nav__button--two"
            onClick={() => history.push("/inscription")}
          />
        </div>
      </div>
    </IonPage>
  );
};

export default Home;
