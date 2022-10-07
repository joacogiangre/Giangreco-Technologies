import CartWidget from "./CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <Navbar bg="primary" expand="lg">
      <Container className="my-2">
        <Link to="/"><Navbar.Brand className="text-dark fw-bolder">Giangreco Technologies</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/category/0" className="text-dark fw-bolder mx-3 text-decoration-none">TV, audio and video</Link>
            <Link to="/category/1" className="text-dark fw-bolder mx-3 text-decoration-none">Cell Phones, Notebooks and Technology</Link>
            <Link to="/category/2" className="text-dark fw-bolder mx-3 text-decoration-none">Home appliances and air conditioners</Link>
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavBar;