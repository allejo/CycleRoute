import { fireEvent, render, screen } from "@testing-library/react"
import FavButton from '../components/Tabs/Favorites/FavButton';
//import your component that you will test here

import { useAuth0 } from "@auth0/auth0-react";
import { mocked } from "jest-mock";
//this info you will get from your users component, get info from a mock account
const user = {
    email: "email@gmail.com",
    email_verified: true,
    sub: "sub from auth0",
    name: "Diana",
    picture: "https://lh3.googleusercontent.com/a/ALm5wu37DG_8TfWnPE6txsyfaUe_ZR6gDFoND9OHc0sn=s96-c"
}


jest.mock("@auth0/auth0-react");

const mockedUseAuth0 = mocked(useAuth0, true);

describe("Test", () => {
    beforeEach(() => {
        mockedUseAuth0.mockReturnValue({
            isAuthenticated: true,
            user,
            logout: jest.fn(),
            loginWithRedirect: jest.fn(),
            getAccessTokenWithPopup: jest.fn(),
            getAccessTokenSilently: jest.fn(),
            getIdTokenClaims: jest.fn(),
            loginWithPopup: jest.fn(),
            isLoading: false,
        });
    });

    test("Display Button", () => {
      render(<FavButton />)
      expect(screen.getByRole('button', {name: 'Add Route'} ));
  });

});