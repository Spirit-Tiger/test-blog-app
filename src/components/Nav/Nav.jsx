import React from "react";
import { Link } from "react-router-dom";
import { StyledNav } from "./styles";

const Nav = () => {
  return (
    <StyledNav>
      <div><Link to="/">MyBlog</Link></div>
      <ul className="nav-ul">
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/create-post">Create post</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
