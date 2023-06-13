import { render, screen } from "@testing-library/react";
import Header from '../components/Margins/header';

describe("Header", () => {

  test("renders Header component", () => {
    render(<Header />);
  });

  test('Header must have alt = "logo"', () => {
    render(<Header />)
    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('alt', 'logo');
  });

});
