import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white",
    borderBottom: "0px solid #e0e0e0",
  };

  return (
    <nav>
      <Link style={navStyle} to="/home">
        <h3>Logo</h3>
      </Link>\
      <ul clas
        sName="nav-links">
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>

        <Link style={navStyle} to="/shop">
          <li>Shop</li>
        </Link>

        <Link style={navStyle} to="/blog">
          <li>Blog</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
