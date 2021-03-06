import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { pedirDatos } from "../helpers/pedirDatos";
import ItemList from "../ItemList/ItemList";


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
      <>
          {
              loading 
                  ? <h2>Cargando...</h2> 
                  : <ItemList items={productos} />
          }
      </>
  )
}
