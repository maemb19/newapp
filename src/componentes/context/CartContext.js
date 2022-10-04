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
      title: 'Estas seguro de vaciar el carrito?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, vaciar!'
    }).then((result) => {
      if (result.isConfirmed) {
        setCart([])
      }
    })       
  }

  const terminarCompra = (id) => {
    Swal.fire({
      title: '¡Compra exitosa!',
      text: 'Tú número de orden es: $(id)',
      imageUrl: '/assets/img/saludo.jpg',
      confirmButtonColor: '#39d4ec',
      confirmButtonText: 'Aceptar'
    })
    setCart([])
  }
  
  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeItem,
      isInCart,
      cartQuantity,
      cartTotal,
      emptyCart,
      terminarCompra
      }}>
      {children}
    </CartContext.Provider>     
  )
}
   
export default CartContext;