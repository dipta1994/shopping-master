import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

function SideBar(){

    
    
    return(
        <Container>
            <Row>
                <ul><b>Colour</b>
                    <form>
                        <ul><input type="checkbox" /> Red</ul>
                        <ul><input type="checkbox" /> Blue</ul>
                        <ul><input type="checkbox" /> Green</ul>                                                                            
                    </form>
                </ul>
            </Row>
            <Row>
            <ul><b>Gender</b>
                    <form>
                        <ul><input type="checkbox"  /> Men</ul>
                        <ul><input type="checkbox" /> Women</ul>
                        <ul><input type="checkbox" /> Others</ul>                                                                          
                    </form>
            </ul>
            </Row>
            <Row>
            <ul><b>Price</b>
                <form>
                    <ul><input type="checkbox"/> 0 to Rs.250</ul>
                    <ul><input type="checkbox"/> Rs.251 to Rs.450</ul>
                    <ul><input type="checkbox"/> Rs.450 to Rs.1000</ul>                                                                           
                </form>
            </ul>        
            </Row>
            <Row>
            <ul><b>Type</b> 
                <form>
                    <ul><input type="checkbox"/> Polo</ul>
                    <ul><input type="checkbox"/> Hoodie</ul>
                    <ul><input type="checkbox"/> Round</ul>                                                                        
                </form>
            </ul>
            </Row>
        </Container>
    )
};
export default SideBar;

