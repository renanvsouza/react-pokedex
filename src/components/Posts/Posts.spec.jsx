import { render, screen } from "@testing-library/react";
import Posts from '.';

const props = {
    posts: [
        {
            id: 1,
            title: 'Title 1',
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nulla delectus magnam nobis dignissimos modi itaque, iusto aut nihil ipsam, accusamus quis eveniet! Harum repellendus, enim iure voluptates ad quos?',
            cover: './img/img1.png'
        },
        {
            id: 2,
            title: 'Title 2',
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nulla delectus magnam nobis dignissimos modi itaque, iusto aut nihil ipsam, accusamus quis eveniet! Harum repellendus, enim iure voluptates ad quos?',
            cover: './img/img2.png'
        },
        {
            id: 3,
            title: 'Title 3',
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nulla delectus magnam nobis dignissimos modi itaque, iusto aut nihil ipsam, accusamus quis eveniet! Harum repellendus, enim iure voluptates ad quos?',
            cover: './img/img3.png'
        }
    ]
};

describe('<Posts />', () => {
    it('Should render posts', () => {
        render(<Posts {...props} />)

        expect(screen.getAllByRole('heading', { name: /title/i }))
            .toHaveLength(3)
        expect(screen.getAllByRole('img', { name: /title/i }))
            .toHaveLength(3)
        expect(screen.getAllByText(/lorem/i))
            .toHaveLength(3)
    })
});