import { useEffect, useState } from 'react';
import db from './../firebase/firebaseConfig'
import styled from "styled-components";
import { Contacto } from './Contacto';
import { collection, onSnapshot } from "firebase/firestore";


export const ListaContactos = () => {

    const [contactos, setContactos] = useState([])

    useEffect(() => {
      onSnapshot(
        collection(db, 'usuarios'),
        (snapshot) => {
            // console.log('Se ejecuto Snachot');
            // console.log(snapshot.docs[0].data());
            
            const arregloUsuarios = snapshot.docs.map((documento)=>{
              return {...documento.data(), id: documento.id}
            });  

            setContactos(arregloUsuarios);
        },
        (error) => {
          console.warn(error);
        }
      );
    }, [])
    

  return (
    contactos.length > 0 &&
        <ContenedorContactos>
            {contactos.map((contacto) => (
                <Contacto key={contacto.id} id={contacto.id} nombre={contacto.nombre} correo={contacto.correo} />
            ))}
        </ContenedorContactos>
    
  )
}


const ContenedorContactos = styled.div`
    margin-top: 40px;
`;