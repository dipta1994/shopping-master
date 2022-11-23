import React,{useState} from "react";
import Cart from "./Components/Cart";
import NavBar from "./Components/Navbar";
import Shop from "./Components/Shop";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function App(){
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].quantity += d;

    if (arr[ind].quantity === 0) arr[ind].quantity = 1;
    setCart([...arr]);
  };
    return(
      <Container>
        <Row><h2>Sample UI Mockups</h2></Row>
          <NavBar setShow={setShow} size={cart.length} />
            {show ? (
                  <Shop handleClick={handleClick} />
                ) : (
                  <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
                )}          
      </Container>      
    )
};
export default App;