import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'

class Profile extends Component {
    render() {
        return (
            <Fragment>
            <Container className="text-center" fluid={true}>
   <div className="section-title text-center mb-55"><h2>EMPLOYEES</h2>
   <p>Global Skills Development Agency</p>
   </div>

<Row>
   <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
   <Card className="image-box card w-100">
   <img alt='' className="center w-75" src="https://rukminim1.flixcart.com/image/800/960/kf1fo280hlty2aw-0/t-shirt/w/s/e/-original-imafdfvvr8hqdu65.jpeg?q=50" />   
   <Card.Body> 
   <p className="product-name-on-card">Name :  Men Hooded Neck Red</p>
   <p className="product-price-on-card">ID : $120</p>
   </Card.Body>
   </Card>         
   </Col>
</Row>
            </Container>
       </Fragment>
        )
    }
}

export default Profile
