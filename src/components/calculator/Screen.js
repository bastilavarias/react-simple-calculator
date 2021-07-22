import './Calculator.css';

function Screen({ value, history }) {
    return (
        <div className="screen">
            <input
                className="screen-input"
                readOnly
                value={value}
                placeholder="0"
            />
            <span className="screen-history" title={history}>
                {history}
            </span>
        </div>
    );
}

export default Screen;
