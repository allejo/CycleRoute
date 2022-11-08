
// import NavBar from "./components/Auth0/nav-bar";
// import Students from "./components/students";
import { useAuth0 } from '@auth0/auth0-react';
// import Loading from "./components/Auth0/loading";
// import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import React from 'react';
import { ReactDOM } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Margins/header";
import Footer from './components/Margins/footer';
import NavigationBar from './components/NavigationBar/navigationBar';
import Home from './components/Tabs/Home/home';
import Favorites from './components/Tabs/Favorites/favorites';
import Login from './components/Tabs/Login/login';
import Profile from './components/Tabs/Profile/profile';

import LoginButton from './components/Auth0/Buttons/login-button';
import LogoutButton from './components/Auth0/Buttons/logout-button';
function App() {

  // const { isLoading } = useAuth0();
  const { user } = useAuth0();
  // if (isLoading) {
  //   return <Loading />;
  // }

  //return (
  //   <div id="app" className="d-flex flex-column h-100">
  //     <NavBar />
  //     <div className="container flex-grow-1">
  //     {!user ? <span>Hello from Techtonica</span> : <span>Hello <Link to="api/me">{user.name}</Link></span> }
  //     </div>
  //   </div>
  // );

  return (
    <div className="App">
      <Header />
      <div>
        {!user ? <LoginButton /> : <LogoutButton />}
      </div>


          <NavigationBar
            user={user} />
          <Routes >
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/profile" element={<Profile user={user} />} />
          </Routes>


      <Footer />
    </div>
  );
}

export default App;
