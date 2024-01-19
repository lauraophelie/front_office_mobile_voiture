interface BoutonProps {
    text: string,
    className?: string,
    id?: string,
    onClick?: () => void
}

const Bouton: React.FC<BoutonProps> = (props) => {
    return (
        <button
            className={props.className + " button"}
            id={props.id}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    )
}

export default Bouton;