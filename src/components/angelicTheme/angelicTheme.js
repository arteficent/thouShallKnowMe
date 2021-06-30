import React from 'react'
import './angelicTheme.css'
import {ReactComponent as Sun} from './angelicIcons/sun.svg';
import {ReactComponent as Cloud1} from './angelicIcons/cloud1.svg';
import { Row,Col,Container } from 'react-bootstrap';

function AngelicTheme() {
   return (
       <div className='dpShadow'>
           <Container fluid>
            <Row>
                <Col><Sun className='sun-logo'/></Col>
            </Row>
            </Container>           
           <h1>THOU shall die</h1>
           <Cloud1 className='cloud'/>
       </div>             
    )
}

export default AngelicTheme
