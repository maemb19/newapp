import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from '../cartWidget/CartWidget'
import { Link } from "react-router-dom"
import "./header.scss"
 
export const Header = () => {
 
  return (
    <>
      <Navbar  className='Navbar'>
        <img src="/assets/img/Logo.jpg" alt="Logo" className='logo'/>
        <Container className="justify-content-center">
          <Nav className='links'>
            <Nav.Item>
              <Link to={'/items/invierno'}>Invierno</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to={'/items/usoPersonal'}>Uso Personal</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to={'/items/mateyTe'}>Mate y Té</Link>
            </Nav.Item>
          </Nav>
        </Container>
        <CartWidget/>
      </Navbar>
    </>
  )

}

export default Header;
