import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Navigate } from "react-router-dom";
import { addDoc, collection, doc } from "firebase/firestore";
import { db } from '../firebase/config'

const Checkout = () => {
  const { cart, cartTotal, terminarCompra } = useContext(CartContext);

  const [values, setValues] = useState({
    nombre: "",
    email: "",
    direccion: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const orden = {
      comprador:values,
      items: cart,
      total: cartTotal(),
    }

    if (values.nombre.length <2 ){
      alert("Nombre incorrecto")
      return
    }

    if (values.email.length < 2) {
      alert("Email incorrecto")
      return
    }
    const ordenesRef= collection(db, "ordenes")

    addDoc(ordenesRef, orden)
       .then((doc) =>{
        console.log(doc.id)
        terminarCompra(doc.id)
       })
  };

  if (cart.length === 0){
    return <Navigate to={"/"}/>
  }

  return (
    <div className="container my-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Control
            name= "nombre" 
            type="text"
            value={values.nombre}
            onChange={handleInputChange}
            placeholder="Nombre"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDirección">
          <Form.Control
            name="direccion"
            type="text"
            value={values.direccion}
            onChange={handleInputChange}
            placeholder="Dirección"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            name= "email"
            type="text"
            value={values.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
        </Form.Group>
        <Button variant="info" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default Checkout;