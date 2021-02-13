import React, { useState } from "react";
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
            <NavLink to="/">Products</NavLink>
            {/* <Link to="/">Products</Link> */}
          </NavItem>
          <NavItem>
            <NavLink to="/cart">Cart</NavLink>
          </NavItem>
        </Nav>
        <Nav className="pull-right mr-auto" navbar>
          <NavItem className="pull-right">
            <NavLink to="/login">Login</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
