import { notFound } from "next/navigation";
import Link from "next/link";
import '../../page.css';
import '../../layout.css';

interface PageProps { 
  params: Promise<{ seccion: string; id: string }> 
}

export default async function Page({ params }: PageProps) {
  const { seccion, id } = await params; 

  const contenidoCards: Record<string, { titulo: string, imagen: string, texto: string }> = {
    "next": {
      titulo: "Next.js",
      imagen: "/next.png",
      texto: "Next.js es el framework de React para la web que permite renderizado en servidor (SSR) y generación de sitios estáticos de alto rendimiento."
    },
    "almeria": {
      titulo: "Almería",
      imagen: "/almeria.jpeg",
      texto: "Almería es una provincia andaluza destacada por su Alcazaba, sus playas vírgenes y su clima soleado durante todo el año."
    }
  };

  const esNoticia = seccion.toLowerCase() === "noticias";
  const datos = contenidoCards[id.toLowerCase()];

  if (!esNoticia || !datos) {
    return (
      <div className="box-1 text-center">
        <h2 className="tit">NADA QUE MOSTRAR</h2>
        <div className="mt-4">
          <img src="/404.png" alt="404" style={{ width: '300px' }} />
        </div>
        <Link href="/instituto" className="btn btn-danger mt-4">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="box-1">
      
      
      <div className="card-1 shadow-sm p-4 bg-white" style={{ height: 'auto', display: 'block' }}>
        <h3 className="tit-2 text-dark mb-3" style={{ textShadow: 'none' }}>{datos.titulo}</h3>
        
        <img 
          src={datos.imagen} 
          alt={datos.titulo} 
          className="img-fluid rounded mb-3" 
          style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
        />

        <p className="txt-f">
          {datos.texto}
        </p>

        <div className="mt-4 border-top pt-3 text-center">
          <Link href="/instituto" className="btn btn-primary" style={{ backgroundColor: '#b04b39', border: 'none' }}>
            Volver a Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}