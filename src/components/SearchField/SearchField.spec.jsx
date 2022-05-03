import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchField from ".";

describe('<SearchField />', () => {

    it('Should be on the screen', () => {
        render(<SearchField />);

        const searchField = screen.getByPlaceholderText('Search');

        expect(searchField).toBeInTheDocument();
    });

    it('Should call a function on each key press', () => {
        const fn = jest.fn();

        render(<SearchField onChange={fn} />);

        const searchField = screen.getByPlaceholderText('Search');
        const value = 'lorem';

        userEvent.type(searchField, value);

        expect(searchField.value).toBe(value);
        expect(fn).toHaveBeenCalledTimes(value.length);
    });

});