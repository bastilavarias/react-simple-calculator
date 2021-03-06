import './Calculator.css';
import Screen from './Screen';
import InputButton from './InputButton';
import { useState } from 'react';

const operationDictionary = {
    addition: '+',
    subtraction: '-',
    multiplication: '×',
    division: '÷',
    equals: '=',
};

function Calculator() {
    const [screenValue, setScreenValue] = useState('');
    const [screenHistory, setScreenHistory] = useState('');
    const [firstNumber, setFirstNumber] = useState(0);
    const [execOperation, setExecOperation] = useState('');

    const handleInputButtonClick = (text) => {
        const hasDecimal = screenValue.split('').includes('.');
        if (Object.values(operationDictionary).includes(text)) return;
        if (text === '.' && hasDecimal) return;
        if (screenValue.length >= 9) return;
        setScreenValue(screenValue + text || 0);
    };

    const handleInputButtonOperationClick = (operation) => {
        if (screenValue.length === 0) return;
        const firstNum = parseFloat(screenValue);
        setFirstNumber(firstNum);
        setExecOperation(operation);
        setScreenHistory(`${firstNum} ${operation}`);
        setScreenValue('');
    };

    const handleInputButtonEqualsClick = () => {
        const secondNumber = parseFloat(screenValue) || 0;
        let result = firstNumber + secondNumber;
        if (execOperation === '-') result = firstNumber - secondNumber;
        if (execOperation === '×') result = firstNumber * secondNumber;
        if (execOperation === '÷') result = firstNumber / secondNumber;
        result = result.toFixed(2);
        result = result.toString().includes('.00') ? parseInt(result) : result;
        setScreenValue(result);
        setScreenHistory(
            `${firstNumber} ${execOperation} ${secondNumber} = ${result}`
        );
    };

    const handleInputButtonClearClick = () => {
        setFirstNumber(0);
        setScreenHistory('');
        setScreenValue('');
    };

    return (
        <div className="calculator">
            <Screen value={screenValue} history={screenHistory} />
            <div className="button-row">
                <InputButton
                    type="primary"
                    text="7"
                    onClick={() => handleInputButtonClick('7')}
                />
                <InputButton
                    type="primary"
                    text="8"
                    onClick={() => handleInputButtonClick('8')}
                />
                <InputButton
                    type="primary"
                    text="9"
                    onClick={() => handleInputButtonClick('9')}
                />
                <InputButton
                    type="secondary"
                    text={operationDictionary.division}
                    onClick={() =>
                        handleInputButtonOperationClick(
                            operationDictionary.division
                        )
                    }
                />
            </div>
            <div className="button-row">
                <InputButton
                    type="primary"
                    text="4"
                    onClick={() => handleInputButtonClick('4')}
                />
                <InputButton
                    type="primary"
                    text="5"
                    onClick={() => handleInputButtonClick('5')}
                />
                <InputButton
                    type="primary"
                    text="6"
                    onClick={() => handleInputButtonClick('6')}
                />
                <InputButton
                    type="secondary"
                    text={operationDictionary.multiplication}
                    onClick={() =>
                        handleInputButtonOperationClick(
                            operationDictionary.multiplication
                        )
                    }
                />
            </div>
            <div className="button-row">
                <InputButton
                    type="primary"
                    text="1"
                    onClick={() => handleInputButtonClick('1')}
                />
                <InputButton
                    type="primary"
                    text="2"
                    onClick={() => handleInputButtonClick('2')}
                />
                <InputButton
                    type="primary"
                    text="3"
                    onClick={() => handleInputButtonClick('3')}
                />
                <InputButton
                    type="secondary"
                    text={operationDictionary.addition}
                    onClick={() =>
                        handleInputButtonOperationClick(
                            operationDictionary.addition
                        )
                    }
                />
            </div>
            <div className="button-row">
                <InputButton
                    type="primary"
                    text="."
                    onClick={() => handleInputButtonClick('.')}
                />
                <InputButton
                    type="primary"
                    text="0"
                    onClick={() => handleInputButtonClick('0')}
                />
                <InputButton
                    type="primary"
                    text="00"
                    onClick={() => handleInputButtonClick('00')}
                />
                <InputButton
                    type="secondary"
                    text={operationDictionary.subtraction}
                    onClick={() =>
                        handleInputButtonOperationClick(
                            operationDictionary.subtraction
                        )
                    }
                />
            </div>
            <div className="footer-row">
                <InputButton
                    type="secondary"
                    text="C"
                    specifier="clear"
                    onClick={handleInputButtonClearClick}
                />
                <InputButton
                    type="primary"
                    text={operationDictionary.equals}
                    onClick={handleInputButtonEqualsClick}
                    specifier="equals"
                />
            </div>
        </div>
    );
}

export default Calculator;
