'use client';
import './Header.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';
import { IoSearchOutline } from 'react-icons/io5';

export default function Header() {
  return (
    <header className="head-1">
      <Container className="d-flex justify-content-between align-items-center py-4">
        <div>
          <h1 className="tit-1">IES CURA VALERA</h1>
          <p className="sub-1">Junta de Andalucía</p>
        </div>
        <div className="search-box d-flex align-items-center">
          <IoSearchOutline className="icon-lupa" />
          <span className="text-search">SEARCH</span>
        </div>
      </Container>

      <Container className="wrap-1">
        <Navbar className="nav-1 shadow-sm">
          <Nav className="w-100 d-flex justify-content-around">
            
            <Nav.Link as={Link} href="/instituto" className="link-1">Inicio</Nav.Link>
            <NavDropdown title="Noticias" id="nav-noticias" className="link-1">
              <NavDropdown.Item as={Link} href="/instituto/noticias/jefatura">Jefatura de Estudios</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/instituto/noticias/Plan de igualdad">Plan de igualdad y escuela:espacio de faz</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/instituto/noticias/Trofeo">Trofeo director</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/instituto/noticias/Adultos">Adultos</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/instituto/noticias/Videos y fotos">Videos y fotos</NavDropdown.Item>

            </NavDropdown>
            <NavDropdown title="Oferta Educativa" id="nav-oferta" className="link-1">
              <NavDropdown.Item as={Link} href="/instituto/oferta/oferta">Oferta educativa</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/instituto/oferta/Departamentos">Departamentos</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/instituto/noticias/BTOPA"> BTOPA</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/instituto/noticias/ESPA">ESPA</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Biblioteca" id="nav-biblio" className="link-1">
              <NavDropdown.Item as={Link} href="/instituto/biblioteca/BiblioWeb">BiblioWeb</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/instituto/biblioteca/Blog">Blog</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} href="/instituto/Contacto" className="link-1">Contacto</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </header>
  );
}