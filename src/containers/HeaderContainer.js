import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from "reactstrap";
export const HeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">ChikuFashion.com</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink>
              <Link to="/">Products</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to="/cart">Cart</Link>
            </NavLink>
          </NavItem>
        </Nav>
        <Nav className="pull-right mr-auto" navbar>
          <NavItem className="pull-right">
            <NavLink>
              <Link to="/login">Login</Link>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
