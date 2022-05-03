import { render, screen } from "@testing-library/react";
import PostCard from '.';

const props = {
	title: 'Title',
	body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sint aut assumenda vel est consequuntur expedita optio architecto et magni quia deleniti odio dignissimos doloribus aliquid?',
	cover: './img/img.png',
	id: 1,
}

describe('<PostCard />', () => {
	it('Should render PostCard', () => {
		render(<PostCard post={props} key={props.id} />)

		expect(screen.getByAltText('Title')).toBeInTheDocument()

	});
});
