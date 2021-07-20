import './Calculator.css';

function Screen({ value, history }) {
    return (
        <div className="screen">
            <input className="screen-input" readOnly value={value} />
            <span className="screen-history">{history.join(' ')}</span>
        </div>
    );
}

export default Screen;
