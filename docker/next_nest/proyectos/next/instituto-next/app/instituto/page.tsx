'use client';

import { Row, Col, Container } from 'react-bootstrap';
import Card from './componentes/Card';
import Link from 'next/link';

export default function InstitutoPage() {
  return (
    <Container className="mt-5">
      <Row className="g-4">
        <Col md={3}>
          <div className="d-flex flex-column">
            <Card
              titulo="Next.js"
              imagen="/next.png"
              destino="/instituto/noticias/next"
            />
            <Link
              href="/instituto/noticias/next"
              className="btn mt-2 text-white"
              style={{ backgroundColor: '#b04b39', fontWeight: 'bold' }}
            >
              Ver detalle
            </Link>
          </div>
        </Col>

        <Col md={3}>
          <div className="d-flex flex-column">
            <Card
              titulo="Almeria"
              imagen="/almeria.jpeg"
              destino="/instituto/andalucia"
            />
            <Link
              href="/instituto/noticias/almeria"
              className="btn mt-2 text-white"
              style={{ backgroundColor: '#b04b39', fontWeight: 'bold' }}
            >
              Ver detalle
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}