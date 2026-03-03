'use client';
import Carousel from 'react-bootstrap/Carousel';

export default function PageAndalucia() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="/almeria.jpeg" width="600" height="400" alt="Almeria" />
        <Carousel.Caption>
            <a href='/instituto/andalucia/almeria'><h3>almeria</h3></a>
            <h3>almeria</h3>
            <p>texto de prueba para ver si se muestra</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src="/granada.jpeg" width="600" height="400" alt="Granada" />
        <Carousel.Caption>
            <a href='/instituto/andalucia/granada'><h3>granada</h3></a>
          <h3>Granada</h3>
            <p>texto de prueba para ver si se muestra</p>            
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src="/malaga.jpeg" width="600" height="400" alt="Malaga" />
        <Carousel.Caption>
            <a href='/instituto/andalucia/malaga'><h3>malaga</h3></a>
          <h3>Malaga</h3>
          <p>texto de prueba para ver si se muestra</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}