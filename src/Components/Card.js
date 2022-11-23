import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({ item, handleClick }){
  const { name, price} = item;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Price - {price}Rs</Card.Text>
        <Button onClick={() => handleClick(item)}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Cards;
