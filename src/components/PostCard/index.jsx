import './styles.css'

export default function PostCard({ post }) {

    return (
        <div className='post' key={post.id}>
            <img src={post.cover} alt={post.title} />
            <div className='post-content'>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        </div>
    )
}