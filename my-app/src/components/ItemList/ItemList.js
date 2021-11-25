import React from "react";
import { Container, Row } from "react-bootstrap";
import { Item } from "../Item/Item";

const ItemList = ({items}) => {

    return (
        <Container className="my-5">
            <h2>Entradas disponibles</h2>
            <hr/>
            <Row>
                {items.map((prod) => (
                    <Item key={prod.id} {...prod}/>
                    ))}
            </Row>
        </Container>
    );
};

export default ItemList;


