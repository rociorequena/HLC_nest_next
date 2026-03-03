import Link from 'next/link';
import './Card.css';

interface CardProps {
  titulo: string;   
  imagen: string;   
  destino: string;  
}

export default function Card({ titulo, imagen, destino }: CardProps) {
  return (
    <Link href={destino} className="link-1">
      <article className="card-1" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${imagen})` }}>
        <div className="box-1">
          <h3 className="tit-2">{titulo}</h3>
        </div>
      </article>
    </Link>
  );
}