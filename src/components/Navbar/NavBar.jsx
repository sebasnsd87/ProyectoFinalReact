import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CardWidget from "../CardWidget/CardWidget";
import {Link, NavLink} from 'react-router-dom';
import "./navbar.css"

function NavBar() {

  const enlaces =[
    "Amoladora",
    "Taladro",
    "Desmalezadora",
    "Carretilla",
    "Escaleras"
  ]

  return (
    <>
    <h2 className="titulo">FERRETERIA EMILIO E-COMMERCE</h2>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="navegacion">
        <Navbar.Brand as={Link} to = {"/"}>INICIO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to = {"/Ubicacion"}>UBICACION</Nav.Link>
            <Nav.Link as={Link} to = {"/Contacto"}>CONTACTO</Nav.Link>
            <NavDropdown title="PRODUCTOS" id="basic-nav-dropdown">
              <ul className="drop">
                {enlaces.map((e,id)=>
                
                <li className="lista" key={id}>
                  <Link to={`${e}`}>
                    {e}
                  </Link>

                </li>
                
                )}
              </ul>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CardWidget />
    </Navbar>
    </>
  );
}

export default NavBar;
