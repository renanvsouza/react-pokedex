import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from '.';

describe('<Button />', () => {

    it('Should display the text "Load more"', () => {

        render(<Button text={'Load more'} />);

        const button = screen.getByText('Load more');

        expect(button).toBeInTheDocument();
    });

    it('Should call a function on click', () => {

        const fn = jest.fn(); //Create a Jest mock function

        render(<Button text={'Load more'} onClick={fn} />);

        const button = screen.getByText('Load more');
        userEvent.click(button);

        expect(fn).toHaveBeenCalledTimes(1);
    });

    it('Should be disabled when disabled property is true', () => {

        render(<Button text={'Load more'} disabled={true} />);

        const button = screen.getByText('Load more');

        expect(button).toBeDisabled();
    });

});