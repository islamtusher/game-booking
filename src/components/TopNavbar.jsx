import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TopNavbar = () => {
    return (
      <Navbar collapseOnSelect expand="lg" data-bs-theme="dark" className="bg-transparent">
        <Container>
          <Navbar.Brand>
            <Link to="/" className='font-bold text-light'>GAME</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/games-list">GAMES</Link>
              <Link to="/login">LOGIN</Link>
              <Link to="/sign-up">SIGN-UP</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default TopNavbar;