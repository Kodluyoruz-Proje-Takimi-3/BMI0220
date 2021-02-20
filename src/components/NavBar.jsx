import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  const navItems = props.link
    .filter((item) => item.isLink)
    .map((item) => (
      <Nav.Link key={item.id}>
        <Link
          to={item.link}
          className="nav-link d-flex justify-content-end text-light fw-300 "
        >
          {" "}
          <b id="homepg">{item.title}</b>
        </Link>
      </Nav.Link>
    ));
  return (
    <Navbar expand="lg">
      <Link to="/">
        <b className="fs-50 text-primary ls-5 "> BMI> </b>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav id="itemler" className="ml-auto pr-4 fs-18 ">
          {navItems}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
