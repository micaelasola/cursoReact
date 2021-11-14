import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard'; 
import Img from "../../assets/img/banda1.png"; 

import "./ItemListContainer.css"; 



export default function ItemListContainer ({greeting}) {
    return (
        <div className="global-css">
            {greeting}
            <ProductCard img={Img} name="Lollapalooza 2022" />
            
        </div>
    )
}