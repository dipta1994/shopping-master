import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Cart({ cart, setCart, handleChange }){
  const [price, setPrice] = useState(0)

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.quantity * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <Container className="flex">
        <div><h2>Shopping cart</h2></div>
            {cart.map((item) => (
                <Container>
                    <Row>
                            <Col key={item.id}>
                                <Col>
                                    <img src="holder.js/100px180" alt="" />
                                    <p>{item.name}</p>
                                </Col>
                            </Col>
                            <Col>
                                <button onClick={() => handleChange(item, 1)}>+</button>
                                <button>{item.quantity}Qty</button>
                                <button onClick={() => handleChange(item, -1)}>-</button>
                            </Col>                            
                            <Col><button onClick={() => handleRemove(item.id)}>Remove</button></Col>
                            <Col><span>Price : {item.price}</span></Col>                        
                    </Row>
                </Container>
            ))}
        <Row className="position-absolute end-50" style={{backgroundColor: 'red'}}>
            <span><b>Total Price of your Cart is :Rs - {price}</b></span>
        </Row>
    </Container>
  );
};

export default Cart;
