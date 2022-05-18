import React, { useContext } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../assets/logo-llama.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "../App";

const NavBar = () => {
  // Variable to display current user in navbar
  const currentUser = useContext(CurrentUserContext);

  // Icons visible to non-logged in users
  const loggedOutIcons = (
    <>
      {" "}
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/login">
        <i className="fas fa-sign-in-alt"></i>Log in
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signup">
        <i className="fas fa-user-plus"></i>Sign up
      </NavLink>
    </>
  );

  // Icons visible to logged in users
  const loggedInIcons = <>{currentUser?.username}</>;

  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand className={styles.Brand}>
            <img src={logo} alt="logo" height="60" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink
              to="/"
              className={styles.NavLink}
              activeClassName={styles.Active}>
              {currentUser ? loggedInIcons : loggedOutIcons}
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
