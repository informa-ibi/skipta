import './Header.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/logo.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Header() {
  return (
    <Navbar className='nav-bg' expand="lg">
      <Container>
        <Navbar.Brand className='skipta-logo-wrap' href="#home">
          <div className='skipta-logo'>
            <img src={logo} alt="logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Router>
            <Link className='nav-link' to="pages/about">About</Link>
            <Nav.Link href="#link">Communities</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
          </Router>  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
