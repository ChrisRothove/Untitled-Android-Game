import { render, screen } from '@testing-library/react';
import {GameWrapper} from "./GameWrapper";

test('renders Game Wrapper', () => {
    render(<GameWrapper />);
    const linkElement = screen.getByTestId("game-wrapper");
    expect(linkElement).toBeInTheDocument();
});