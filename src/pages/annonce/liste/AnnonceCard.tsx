import Bouton from "../../../components/bouton/Bouton";
import Image from "../../../components/image/Image";
import "../annonce.scss";

interface AnnonceCardProps {
    title: string,
    horaire: string,
    image: string,
    onClick?: () => void
}

const AnnonceCard: React.FC<AnnonceCardProps> = (props) => {
    return (
        <div className="liste-annonce__content__card" onClick={props.onClick}>
            <Image
                src={props.image}
                className="liste-annonce__content__card--image"
            />
            <p className="liste-annonce__content__card--title">
                {props.title}
            </p>
            <p className="liste-annonce__content__card--details">
                <p className="liste-annonce__content__card--details--one">
                    {props.horaire}
                </p>
                <p className="liste-annonce__content__card--details--two">
                    <Bouton
                        text="Détails"
                        className="liste-annonce__content__card--details--button"
                    />
                </p>
            </p>
        </div>
    )
}

export default AnnonceCard;