import { ItemCount } from "../ItemCount/ItemCount";
import Card from "react-bootstrap/Card";
import { useContext, useState } from "react";
import { CartContext } from '../context/CartContext';
import { Link } from "react-router-dom"
import "./ItemDetail.scss"

export const ItemDetail = ({producto})=> {

  const  {addToCart, isInCart } = useContext(CartContext)
  const [cantidad, setCantidad] = useState(1);


  const handleAgregar = ( ) => {
    const itemToCart = {
      id: producto.id,
      producto: producto.producto,
      precio: producto.precio,
      cantidad
       
    }
    isInCart(producto.id)
    addToCart(itemToCart)
  }

    return(
        <div  className="container">
        <Card border="info" style={{ width: "20rem" }} >
          <Card.Body>
            <Card.Img variant="top" src={producto.img}/>
          </Card.Body>
            <Card.Body>
              <Card.Title>{producto.producto}</Card.Title>
              <Card.Text>{producto.precio}</Card.Text>
              <Card.Text>{producto.descripcion}</Card.Text>
            <Card.Text>stock:{producto.stock}</Card.Text>

              {
                isInCart(producto.id)
                ? <Link to="/cart" className="btn btn-info my-2">Terminar Compra</Link>
                :<ItemCount max={producto.stock} 
                       counter={cantidad}
                       setCounter={setCantidad}
                       handleAgregar={handleAgregar}
                  />
               }    
          </Card.Body>
        </Card>  
      </div>  
    )

}

export default ItemDetail 