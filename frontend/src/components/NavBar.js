import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">ITGRAM</Link>
      </div>
      <div className="menu">
        <Link to="/login">Увійти</Link>
        <Link to="/signup">Зареєструватись</Link>
        <Link to="/create-post">Уповісти дашо</Link>
        <Link to="/profile">Профіль</Link>
      </div>
    </nav>
  );
};

export default NavBar;
