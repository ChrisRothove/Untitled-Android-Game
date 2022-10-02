import { render, screen } from '@testing-library/react';
import SplashScene from "./SplashScene";
import {CREATOR_SLUG} from "../../constants";

test('renders Splash Screen', () => {
    render(<SplashScene />);
    const element = screen.getByTestId("splash-screen");
    expect(element).toBeInTheDocument();
    const slug = screen.getByText(CREATOR_SLUG)
    expect(slug).toBeInTheDocument();
});