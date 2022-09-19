import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { Link } from "react-router-dom"
import "./CartWiidget.scss"

 export const CartWidget = () => {

  const {cartQuantity,cart}  = useContext(CartContext)
   return (
    
     <Link to="/cart" className={`cartshop ${cart.length > 0 ? 'cartshop-visible' :''}`}>  
         <img src="/assets/img/cart.png" alt="cart"/>
         <span>{cartQuantity()}</span>
     </Link>
   )
 }
 
 export default CartWidget;