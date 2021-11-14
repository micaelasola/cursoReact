import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard'; 
import Img from "../../assets/img/banda1.png"; 
import {Container} from 'react-bootstrap';

import "./ItemListContainer.css"; 



export default function ItemListContainer ({greeting}) {
    return (
        <div className="global-css">
           
            
          
            <ProductCard img={Img} name="Lollapalooza 2022" />
            {greeting}
            
        </div>
    )
}