import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import { Link, BrowserRouter as Router, useLocation} from "react-router-dom";
import './Navbar.css';

const NavBar2 = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Link to="/"> Home </Link>
            <Link to="/Profile"> Profile </Link>
            <Link to="/Learn"> Learn </Link>
          </Nav>
          <span className="navbar-text">
            <HashLink to='#connect'>
              <button className="vvd"><span>Login</span></button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar2;