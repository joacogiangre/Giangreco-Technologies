import CartWidget from "./CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
  return (
    <Navbar bg="primary" expand="lg">
      <Container className="my-2">
        <Navbar.Brand href="/" className="text-dark fw-bolder">Giangreco Technologies</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/category/0" className="text-dark fw-bolder">TV, audio and video</Nav.Link>
            <Nav.Link href="/category/1" className="text-dark fw-bolder">Cell Phones, Notebooks and Technology</Nav.Link>
            <Nav.Link href="/category/2" className="text-dark fw-bolder">Home appliances and air conditioners</Nav.Link>
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavBar;