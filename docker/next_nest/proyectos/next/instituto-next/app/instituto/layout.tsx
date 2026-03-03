'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './componentes/Header';
import Footer from './componentes/footer';

export default function InstitutoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout-1">
      <Header />

      <Container className="main-1 mt-4">
        <Row>
          <Col md={8}>
            {children}
          </Col>

          <Col md={4} className="sidebar-1">
            <aside className="d-flex flex-column gap-4 text-center">
              <div>
                <h5 className="tit1">BIBLIOTECA WEB</h5>
                <img src="/biblioweb.png" alt="Biblioweb" className="img-sidebar" />
              </div>
              <img src="/biblioteca.png" alt="Biblioteca IES" className="img-sidebar" />
              <div className="mt-4">
                <h5 className="tit">VÍDEO INSTITUTO</h5>
                <div className="ratio ratio-16x9">
                  <iframe
                    src="/videoplayback.mp4"
                    title="Video"
                    allowFullScreen>
                  </iframe>
                </div>
              </div>
            </aside>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}