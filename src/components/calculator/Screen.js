import './Calculator.css';

function Screen({ value, history }) {
    const joinedHistory = history.join(' ');

    return (
        <div className="screen">
            <input className="screen-input" readOnly value={value} />
            <span className="screen-history" title={joinedHistory}>
                {joinedHistory}
            </span>
        </div>
    );
}

export default Screen;
