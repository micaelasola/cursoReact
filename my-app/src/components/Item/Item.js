
import React from 'react';

export const Item = ({id, name, img, desc, price, category}) => {

    return (
        <article key={id} className="card m-3" style={{width: "18rem"}}>
            <img src={img} alt={name}/>
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-text">Precio: ${price}</p>
                <p className="card-text">{desc}</p>
                <p className="card-text">{category}</p>
                
            </div>
        </article>
    )
}

/*

export const items = [
    {
        id: 1,
        price: 15000,
        name: "Banda 1",
        img: "https://via.placeholder.com/200",
    },
    {
        id: 2,
        price: 10000,
        name: "Banda 2",
        img: "https://via.placeholder.com/200",
    },
    {
        id: 3,
        price: 20000,
        name: "Banda 3",
        img: "https://via.placeholder.com/200",
    },
    {
        id: 4,
        price: 1500,
        name: "Banda 4",
        img: "https://via.placeholder.com/200",
    },
    {
        id: 5,
        price: 5000,
        name: "Banda 5",
        img: "https://via.placeholder.com/200",
    },
    {
        id: 6,
        price: 11500,
        name: "Banda 6",
        img: "https://via.placeholder.com/200",
    }
]

*/