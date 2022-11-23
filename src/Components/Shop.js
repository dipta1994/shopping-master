import React, { useState } from "react";
import CardData from "../Data";
import Cards from "./Card";
import Container from "react-bootstrap/esm/Container";
import SideBar from "./SideBar";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Shop({handleClick}){

  const [content, setContent] = useState(CardData)
  const [name, setName] = useState ('')
    
  const handleSearch = (e) =>{
    const keyword = e.target.value;
    if (keyword !== ''){
      const results = CardData.filter(item=>
         item.name.toString().toLowerCase().startsWith(keyword.toLowerCase()) 
      )
      setContent(results)
    }
    else {
        setContent(CardData)
    }
    setName(keyword)
}
    return(
        <>
        <input type="search" value={name} onChange={handleSearch} className="input" placeholder="Filter" />
        <Container>             
            <Row>
                <Col><SideBar/></Col>
                <Col>
                <Row >
                {content.map((item)=>(
                        <Cards className="col-xs-1" key={item.id} item={item} handleClick={handleClick}/>
                    ))}
                </Row>                              
                </Col>
            </Row>
        </Container>
        </>
    )     
};
export default Shop;


