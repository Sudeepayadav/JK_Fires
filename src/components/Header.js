import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar } from "react-bootstrap";

function Header() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <>
      <header>
      <LinkContainer to = '/'>
            <Navbar.Brand href="/">
        <h3 className="company">
          <img className="logo" src="./images/gripfire.svg" /> JK Fire & Security
          Systems
        </h3>
        </Navbar.Brand>
          </LinkContainer>

        <nav ref={navRef}>
          <LinkContainer to="/">
            <a href="/">Home</a>
          </LinkContainer>
          <LinkContainer to="/product">
            <a href="/product">Products & Services</a>
          </LinkContainer>
          <LinkContainer to="/about">
            <a href="/about">About Us</a>
          </LinkContainer>
          <LinkContainer to="/contact">
            <a href="#">Contact Us</a>
          </LinkContainer>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </>
  );
}

export default Header;
