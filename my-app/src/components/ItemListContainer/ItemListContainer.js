import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { pedirDatos } from "../helpers/pedirDatos";
import { Container } from "react-bootstrap";

export const ItemListContainer = () => {

  const [loading, setLoading] = useState(false);
  const [productos, setProductos] = useState([]); // empieza como un array vacio

  useEffect(() => {

    setLoading(true);
    pedirDatos()
      .then((resp) => {
        setProductos(resp);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Container className="my-5">
      
      {
          loading 
          ? <h2 className="msg">Cargando...</h2> 
          : <div className="container">
                {productos.map( (items) =>(
                    <div className="items">
                        <img src={items.img}/>
                        <h3>{items.name}</h3>
                        <p>Precio: ${items.price}</p>
                    </div>
                ))}
            </div>
      }
    </Container>
  );
};

/*
export default function ItemListContainer ({greeting}) {
    return (
        <div className="global-css">
           
            
          
            <ProductCard img={Img} name="Lollapalooza 2022" />
            {greeting}
            
        </div>
    )
}*/
