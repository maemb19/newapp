import { createContext,useState } from "react";
import Swal from 'sweetalert2';
 
 
export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart]= useState([])

    const addToCart = (producto)  => {
      setCart([...cart, producto])
    }

    const removeItem = (id) => {
        setCart( cart.filter((producto) => producto.id !== id))
    }
  
    const isInCart = (id) => {
      return cart.some((producto) => producto.id === id)
    }
  
    const cartQuantity = () => {
      return cart.reduce((acc, producto)=> acc + producto.cantidad, 0)
    }

    const cartTotal = ()  => {
        return cart.reduce ((acc, producto)=> acc + producto.cantidad * producto.precio, 0)
    }

    const emptyCart = () =>{
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          setCart([])
        }
      })
       
    }
  

     return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeItem,
            isInCart,
            cartQuantity,
            cartTotal,
            emptyCart
          }}>
            {children}
         </CartContext.Provider>     
     )
   }
   
   export default CartContext;