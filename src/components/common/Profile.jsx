import React, { Component } from 'react'
import { Fragment } from 'react'
import { Container,Button,Row,Col,Form } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import AppUrl from '../../api/AppUrl';

class Profile extends Component {
     constructor() {
          super();
          this.state = { 
               time: new Date() ,
               reason:"",
               out_reason:""

          };
        }
        messageOnChange = (e) =>{
          let reason=e.target.value;
     //     alert(reason);
         this.setState({reason:reason})

     }
     outOnChange = (e) =>{
          let out_reason=e.target.value;
     //     alert(reason);
         this.setState({out_reason:out_reason})

     }
        currentTime() {
          this.setState({ time: new Date() });
        }
        componentDidMount() {
          this.interval = setInterval(() => this.currentTime(), 1000);
        }
        componentWillUnmount() {
          clearInterval(this.interval);
        }


        onFormSubmit = (e) =>{
          const current = new Date();
          const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
          let id = this.props.user.id;
          let reason=this.state.reason;
          let present_date=date;
          let sendBtn = document.getElementById('sendBtn');
          let contactForm = document.getElementById('contactForm');

               sendBtn.innerHTML="Attended...";   
               let MyFormData=new FormData();
               MyFormData.append("user_id",id)
               MyFormData.append("reason",reason)
               MyFormData.append("present_date",present_date)



               axios.post(AppUrl.AttendenceSubmit,MyFormData)
               .then(function(response){
                    if(response.status===200 && response.data===1){
                         toast.success("Attended");
                         sendBtn.innerHTML="IN";
                         contactForm.reset();
                    }
                    else{
                     toast.error("error"); 
                    //  toast.error("Please write your message");
                    sendBtn.innerHTML="IN";
                    }
               })
               .catch(function(error){
                    toast.error(error);
                    toast.error("Already Present Today!!");
                    sendBtn.innerHTML="IN";
               });

          e.preventDefault();
     }
     outFormSubmit = (e) =>{
          const current = new Date();
          const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
          let id = this.props.user.id;
          let out_reason=this.state.out_reason;
          let out_date=date;
          let outBtn = document.getElementById('outBtn');
          let contactForm = document.getElementById('contactForm');

               outBtn.innerHTML="Outted...";   
               let MyFormData=new FormData();
               MyFormData.append("user_id",id)
               MyFormData.append("out_reason",out_reason)
               MyFormData.append("out_date",out_date)



               axios.post(AppUrl.AttendenceOut,MyFormData)
               .then(function(response){
                    if(response.status===200 && response.data===1){
                         toast.success("Thankyou");
                         outBtn.innerHTML="Out";
                         contactForm.reset();
                    }
                    else{
                     toast.error("error"); 
                    //  toast.error("Please write your message");
                    outBtn.innerHTML="Out";
                    }
               })
               .catch(function(error){
                    toast.error(error);
                    toast.error("Already Out Today!!");
                    outBtn.innerHTML="Out";
               });

          e.preventDefault();
     }
     render() { 

          const current = new Date();
          const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
          let name;
          let email;
          if(this.props.user){
               name = this.props.user.name;
               email = this.props.user.email;
          }
          if(!localStorage.getItem('token')){
               return <Redirect to="/login" />
          }
          return (
              <Fragment>
                   <Container>
                   <h1> User Profile Page </h1>
               <ul className="list-group">
     <li className="list-group-item">Name :  {name} </li>
     <li className="list-group-item">Email :  {email} </li>
               </ul>
    
               <div className="Clock">
          <h1 id="time">Time : {this.state.time.toLocaleTimeString()}</h1>
          <br />
          <h1>Date : {date}</h1>
        </div>
     <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                   <Row className="text-center">
             <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
     <Form id="contactForm" className="onboardForm" onSubmit={this.onFormSubmit}>
          <Form.Control onChange={this.messageOnChange} className="form-control m-2" as="textarea" rows={3} placeholder="Reason (Not Required)" />
          <Button id="sendBtn" type="submit" className="btn btn-block m-2 site-btn-login"> IN </Button>
     </Form>
               </Col>
               <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
     <Form id="contactForm" className="onboardForm" onSubmit={this.outFormSubmit}>
          <Form.Control onChange={this.outOnChange} className="form-control m-2" as="textarea" rows={3} placeholder="Reason (Not Required)" />
          <Button id="outBtn" type="submit" className="btn btn-block m-2 site-btn-login"> OUT </Button>
     </Form>
               </Col>
                    </Row>
                         </Col>
                    </Row>
                    {/* <Link to={"/history/"+this.props.user.id}>
                         
                    <Button>My History</Button></Link> */}
        </Container>
        <ToastContainer/>
              </Fragment>
          )
     }
}

export default Profile