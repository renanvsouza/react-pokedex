import './styles.css';

export default function PostCard({ post }) {
	return (
		<div className='post'>
			<img src={post.imgUrl} alt={post.name} />
			<div className='post-content'>
				<h3>
					<span>{String(post.id).padStart(3, '0')}</span>
					{post.name.charAt(0).toUpperCase() + post.name.slice(1)}
				</h3>
				<section className='types'>
					{post.types.map(type =>
						<span className={type}>{type}</span>)}
				</section>
			</div>
		</div>
	);
};
