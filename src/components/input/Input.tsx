import "./input.scss";

interface InputProps {
    placeholder?: string,
    name?: string, 
    className?: string,
    id?: string,
    type: string,
    required?: boolean,
    onChange?: (event: any) => void
} 

const Input: React.FC<InputProps> = (props) => {
    return (
        <input
            placeholder={props.placeholder}
            name={props.name}
            type={props.type}
            className={props.className + " input-form"}
            id={props.id}
            required={props.required}
            onChange={props.onChange}
        />
    )
}

export default Input;