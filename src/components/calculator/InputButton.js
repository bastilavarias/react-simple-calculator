import "./Calculator.css"

function InputButton({type, text, specifier}) {
    return(
        <button className={`input-button input-button-${type} input-button-${specifier}`}>{text}</button>
    );
}

export default InputButton;