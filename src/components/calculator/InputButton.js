import './Calculator.css';

function InputButton({ type, text, specifier, onClick }) {
    return (
        <button
            className={`input-button input-button-${type} input-button-${specifier}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default InputButton;
