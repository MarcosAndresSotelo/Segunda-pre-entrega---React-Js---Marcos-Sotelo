import React from "react";
import { Card, Button, Image } from "react-bootstrap";

export const ItemDorBanio = ({ prod }) => {
    return (
        <section className="row my-5">
            <div className='col-sm-12 col-md-4'>
                <Card>
                    <Image src={require('../../data/productos/img/dormitorioybano/alfombrasuno.jpg')} alt={prod.nombre} fluid />
                    <Card.Body>
                        <Card.Title>{prod.nombre}</Card.Title>
                        <Card.Text>
                           Categoria:<br /> {prod.categoria}
                        </Card.Text>
                        <Card.Text>${prod.precio}</Card.Text>
                        <Button variant="primary">Ver mas</Button>
                    </Card.Body>
                </Card>
            </div>
        </section>
    )
}