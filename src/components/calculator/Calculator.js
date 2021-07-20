import "./Calculator.css"
import Screen from "./Screen";
import InputButton from "./InputButton";

function Calculator() {
    return (
        <div className="calculator">
            <Screen/>
            <div className="button-row">
                <InputButton type="primary" text="7" />
                <InputButton type="primary" text="8" />
                <InputButton type="primary" text="9" />
                <InputButton type="secondary" text="÷" />
            </div>
            <div className="button-row">
                <InputButton type="primary" text="4" />
                <InputButton type="primary" text="5" />
                <InputButton type="primary" text="6" />
                <InputButton type="secondary" text="×" />
            </div>
            <div className="button-row">
                <InputButton type="primary" text="1" />
                <InputButton type="primary" text="2" />
                <InputButton type="primary" text="3" />
                <InputButton type="secondary" text="+" />
            </div>
            <div className="button-row">
                <InputButton type="primary" text="." />
                <InputButton type="primary" text="0" />
                <InputButton type="primary" text="00" />
                <InputButton type="secondary" text="-" />
            </div>
            <div className="footer-row">
                <InputButton type="secondary" text="C" specifier="clear" />
                <InputButton type="primary" text="=" specifier="equals" />
            </div>
        </div>
    );
}

export default Calculator;