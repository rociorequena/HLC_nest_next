'use client';
import './footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="foot-1">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5 className="tit-f">Encuéntranos en...</h5>
            <div className="d-flex mt-3">
              <a href="https://www.facebook.com/p/Ies-Cura-Valera-100011212297789/?locale=es_ES" target="_blank" className="me-3">
                <BsFacebook size={25} style={{ color: '#b04b39' }} />
              </a>
              <a href="https://www.instagram.com/ies_cura_valera/" target="_blank" className="me-3">
                <BsInstagram size={25} style={{ color: '#b04b39' }} />
              </a>
              <a href="https://x.com/?lang=es" target="_blank">
                <BsTwitter size={25} style={{ color: '#b04b39' }} />
              </a>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <h6 className="tit-f2">DIRECCIÓN POSTAL:</h6>
            <p className="txt-f">
              Avda. Guillermo Reyna, 35<br />
              04600 HUÉRCAL-OVERA<br />
              Almería
            </p>
          </Col>
          <Col md={4} className="mb-4">
            <h6 className="tit-f2">DIRECCIÓN ELECTRÓNICA:</h6>
            <p className="txt-f">
              <a href="https://iescuravalera.es" className="link-f">https://iescuravalera.es</a><br />
              <a href="mailto:04002714.edu@juntadeandalucia.es" className="link-f">04002714.edu@juntadeandalucia.es</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}