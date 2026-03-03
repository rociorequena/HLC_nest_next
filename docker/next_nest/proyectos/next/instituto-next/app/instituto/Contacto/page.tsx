interface PageProps { params: Promise<{ id: string }>}
export default async function Page({ params }: PageProps) {
 const { id } = await params; //Necesita leer el parámetro de entrada
 return ( <div> <p>Estás viendo la página con ID: {'Contacto'}</p> </div>)
}
 