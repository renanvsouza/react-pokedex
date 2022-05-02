import './styles.css'

export default function Button({ text, loadMorePosts, disabled }) {
    return (
        <div className="button-container">
            <button
                disabled={disabled}
                onClick={loadMorePosts}
            >
                {text}
            </button>
        </div>
    )
}