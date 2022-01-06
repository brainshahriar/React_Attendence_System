import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card, Button} from 'react-bootstrap'
import axios from 'axios'
import AppUrl from '../../api/AppUrl';
import Profileloading from '../placeholder/Profileloading';


class Profile extends Component {
    constructor(){
        super();
        this.state={
            allData:[],
            isLoading:"",
            mainDiv:"d-none"
        }
    }
    componentDidMount(){ 
        axios.get(AppUrl.Allemployee).then(response=>{
            this.setState({allData:response.data,isLoading:"d-none",
            mainDiv:""});
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
                        return  <img alt='' className="center w-75" src={"http://localhost:8000/" + Imagelist.image} />

                    })
                }
                  
                <Card.Body> 
                <p className="product-name-on-card">Name :  {ShowData.name}</p>
         

                {
                    (ShowData.employee).map((Imagelist,i)=>{
                        return <div>
                                   <p className="product-price-on-card">Designation : {Imagelist.designation}</p>
                       
                                     </div>
                  
                        
                    })
                }
        
                </Card.Body>
                </Card>          
                </Col>
    
            )
        });
        return (
            <Fragment>
                <Profileloading isLoading={this.state.isLoading} />
                <div className={this.state.mainDiv}>
            <Container className="text-center" fluid={true}>
            <div className="section-title text-center mb-55">
                <h2>OUR EMPLOYEES</h2>
            <p>Global Skills Development Agency</p>
            </div>

<Row>
{View}



</Row>
            </Container>
            </div>
       </Fragment>
        )
    }
}

export default Profile
