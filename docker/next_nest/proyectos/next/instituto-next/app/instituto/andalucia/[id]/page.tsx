import { notFound } from "next/navigation";

interface PageProps { params: Promise<{ id: string }>}
export default async function Page({ params }: PageProps) {
 const { id } = await params; 
 switch (id){
   case 'almeria' : return (<div> <p>Estás viendo cosas de almeria</p> </div>); break
   case 'granada' : return (<div> <p>Estás viendo cosas de granada</p> </div>); break
   default: notFound();
 }
 return ( <div> <p>Estás viendo la página con ID: {id}</p> </div>)
}