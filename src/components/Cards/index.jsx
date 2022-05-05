import './styles.css';
import PostCard from "../PostCard";

export default function Cards({ cards }) {
	return (
		<div className="cards">
			{cards.map((card) => (
				<PostCard card={card} key={card.id} />
			))}
		</div>
	);
}
