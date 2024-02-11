interface ImageProps {
    src: string | any,
    alt?: string,
    className?: string,
    onClick?: () => void
}

const Image: React.FC<ImageProps> = (props) => {
    return (
        <img 
            alt={props.alt}
            src={props.src}
            className={props.className}
            onClick={props.onClick}
        />
    )
}

export default Image;