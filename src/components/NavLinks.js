import React from "react";
import PropTypes from "prop-types";

const NavLinks = ({ links }) => {
  return (
    <ul className="navbar-nav">
      {links.map((element) => (
        <li class="nav-item">
          <a className="nav-link active" href="#">
            {element.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

NavLinks.propTypes = {
  title: PropTypes.array
};
