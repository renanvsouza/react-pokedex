import './styles.css';

export default function Button({ text, onClick, disabled }) {
    return (
        <div className="button-container">
            <button
                disabled={disabled}
                onClick={onClick}
            >
                {text}
            </button>
        </div>
    );
};