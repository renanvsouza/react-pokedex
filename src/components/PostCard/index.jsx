import './styles.css';

export default function PostCard({ card }) {

	return (
		<div className='card'>
			<img src={card.imgUrl} alt={card.name} />
			<div className='card-content'>
				<h3>
					<span>{String(card.id).padStart(3, '0')}</span>
					{card.name.charAt(0).toUpperCase() + card.name.slice(1)}
				</h3>
				<section className='types'>
					{card.types.map((type, index) =>
						<span className={type} key={index + 1}>{type}</span>)}
				</section>
			</div>
		</div>
	);
};
