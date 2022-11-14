import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
// import Loading from "./components/Auth0/loading";
import React from 'react';
import { ReactDOM } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from './components/NavigationBar/navigationBar';
import NavBar from './components/Auth0/Nav/nav-bar';
import Header from "./components/Margins/header";
import Footer from './components/Margins/footer';
import Home from './components/Tabs/Home/home';
import Favorites from './components/Tabs/Favorites/favorites';
import Profile from './components/Tabs/Profile/profile';
import AllStations from './components/Tabs/Bike Stations/allStations';

function App() {

  // const { isLoading } = useAuth0();
  //Once user LOGS IN, Auth0 send token (that stores user profile info) to React and stores token in {user}.
  const { user } = useAuth0();
  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <div className="App">
      <NavBar />
      <Header />
      {/* If user is NOT signed in, display Login button; otherwise display Logout*/}
      <div className='auth0-btns-section'>
        {/* {!user ? <LoginButton /> : <LogoutButton />} */}
      </div>
      <NavigationBar
        user={user} />
      <Routes >
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/profile" element={<Profile user={user} />} />
        {/* <Route path="/bikestations" element={<BikeStations />} /> */}
        <Route path="/bikestations" element={<AllStations />} />
      </Routes>


      <Footer />
    </div>
  );
}

export default App;
