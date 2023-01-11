import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWindget from '../cartWindget/CartWidget';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container style={{ textDecoration: 'none' }}>
                <Link to='/inicio' style={{ fontSize: "50px", textDecoration: 'none' }}>Maria</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" style={{ paddingLeft: "350px", fontSize: "20px" }}>
                        <Link to='/inicio' style={{ textDecoration: 'none' }}>Inicio</Link>
                        <NavDropdown title="Tienda" id="basic-nav-dropdown">
                            <Link to='/livingcomedor/:productosLivCom'>
                                Living y Comedor</Link>
                                <br/>
                            <Link href="#dormitorioBanio">
                                Dormitorio y Baño
                            </Link>
                        </NavDropdown>
                        <Link href="#acercaDe" style={{ textDecoration: 'none' }} >Acerca de</Link>
                        <Link href="#contacto" style={{ textDecoration: 'none' }}>Contacto</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <CartWindget />
        </Navbar >
    );
}

export default NavBar