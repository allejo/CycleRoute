import React from "react";
import "./navigationBar.css"
import { Link } from "react-router-dom";

const NavigationBar = (props) => {

  const user = props.user


  return (
    <>
      <div className="linkRoutes">
        <Link to="/home"> Home</Link>

        {!user ? null : <Link to="/favorites"> Favorites</Link>}

        <Link to="/login"> Login</Link>

        <Link to="/profile"> Profile</Link>
      </div>

    </>
  )
};
export default NavigationBar;