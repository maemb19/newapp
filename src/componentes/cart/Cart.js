import React from 'react'
import { useContext } from "react";
import { CartContext } from '../../componentes/context/CartContext';
import { Link } from 'react-router-dom';
import { ItemCart } from "../itemCart/ItemCart"
import'./Cart.scss'
 

    export const Cart = () => {
    const {cart, cartTotal, emptyCart} = useContext(CartContext)

    if(cart.length === 0){
      return(
        <div className=" container my-5">
           <div className="compra justify-content-center"> 
             <h2>Carrito Vacío</h2>
             <Link to="/" className="btn btn-info my-2">Ir a comprar</Link>
           </div>
        </div>
      )
    }
    
 
    return (
     <div className='container my-5'>
       <h2>Carrito</h2>

       { cart.map((producto) => {
        return(
           <ItemCart producto={producto} key={producto.id}/> 
           );

          })}
        
      <div className='total'>   
        <h4>Total:${cartTotal()}</h4>
        <button onClick={emptyCart} className="btn btn-info my-2">Vaciar Carrito</button>
      </div>
          
     </div>
   )
 }
 
 export default Cart;