import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand className="text-white m" href="#home">Giangreco's Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-white mx-4" href="#home">TV, audio y video</Nav.Link>
            <Nav.Link className="text-white mx-4" href="#home">Celulares, Notebooks y Tecnología</Nav.Link>
            <Nav.Link className="text-white mx-4" href="#home">Electrodomésticos y Aires Ac.</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;