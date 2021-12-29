import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card, Button} from 'react-bootstrap'
import axios from 'axios'
import AppUrl from '../../api/AppUrl';

class Profile extends Component {
    constructor(){
        super();
        this.state={
            allData:[]
        }
    }
    componentDidMount(){ 
        axios.get(AppUrl.Allemployee).then(response=>{
            this.setState({allData:response.data});
        }).catch(error=>{

        })
    }
    render() {
        const ShowData=this.state.allData;
        const View=ShowData.map((ShowData,i)=>{
            return (
                <Col key={i.toString()} className="p-1" xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className="image-box card w-100">
                

                {
                    (ShowData.employee).map((Imagelist,i)=>{
                        return  <img alt='' className="center w-75" src={Imagelist.image} />

                    })
                }
                  
                <Card.Body> 
                <p className="product-name-on-card">Name :  {ShowData.name}</p>

                {
                    (ShowData.employee).map((Imagelist,i)=>{
                        return  <p className="product-price-on-card">Designation : {Imagelist.designation}</p>
                        
                    })
                }
                <Button>See Details</Button>

                     
                </Card.Body>
                </Card>          
                </Col>
            )
        });
        return (
            <Fragment>
            <Container className="text-center" fluid={true}>
   <div className="section-title text-center mb-55">
       <h2>EMPLOYEES</h2>
   <p>Global Skills Development Agency</p>
   </div>

<Row>
{View}



</Row>
            </Container>
       </Fragment>
        )
    }
}

export default Profile
