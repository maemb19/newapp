import React from 'react'
import { useContext } from "react";
import { CartContext } from '../../componentes/context/CartContext';
import Card from "react-bootstrap/Card";
import { BsTrash } from "react-icons/bs";
import "./ItemCart.scss"
 


export const ItemCart = ({producto}) =>{

    const {removeItem } = useContext(CartContext)
    
    return(
    <div className="cart">
        <Card border="info"  style={{ width: "20rem"}}>
          <Card.Body>
            <Card.Title> Producto: {producto.producto}</Card.Title>
            <Card.Text>Precio: {producto.precio}</Card.Text>
            <Card.Text>Cantidad: {producto.cantidad}</Card.Text>
            <button onClick={() =>removeItem(producto.id)} className="btn btn-info my-2"><BsTrash/></button>
          </Card.Body>
        </Card>
    </div> 
    )
}

export default ItemCart