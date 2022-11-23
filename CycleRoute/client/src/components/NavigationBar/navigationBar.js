import React from "react";
import "./navigationBar.css"
import { Link } from "react-router-dom";

const NavigationBar = (props) => {
//Need to pass user as props from App.js, in the Navigation Bar.
  const user = props.user

  return (
    <>
      <div className="linkRoutes">
        <Link to="/home">Home</Link>
        {/* Display Favorites/Profile tab IF user SIGNED IN. Can't alter Routes in App.js per error */}
        {!user ? null : <Link to="/favorites"> Favorites</Link>}
        {!user ? null : <Link to="/profile"> Profile</Link>}
        {/* <Link to="/profile"> Profile</Link> */}
        <Link to="/bikestations"> Bike Stations</Link>
      </div>

    </>
  )
};
export default NavigationBar;