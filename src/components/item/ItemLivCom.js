import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";


export const ItemLivCom = ({ prod }) => {
    return (
        <section className="row my-5">
            <div className='col-sm-12 col-md-4'>
                <Card>
                    <Image src={require('../../data/productos/img/livingcomedor/accesoriouno.jpg')} alt={prod.nombre} fluid />
                    <Card.Body>
                        <Card.Title>{prod.nombre}</Card.Title>
                        <Card.Text>
                            Categoria:<br /> {prod.categoria}
                        </Card.Text>
                        <Card.Text>${prod.precio}</Card.Text>
                        <Link to={`/detalle/${prod.id}`} className="btn btn-primary">Ver más</Link>
                    </Card.Body>
                </Card>
            </div>
        </section>
    )
}