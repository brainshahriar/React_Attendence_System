import React, { Component,Fragment } from 'react'
import {Navbar,Container, Row, Col} from 'react-bootstrap';
import Logo from '../../assets/images/logo.png';
import {Link} from "react-router-dom";
class Navmenudekstop extends Component {
    logout = () => {
        localStorage.clear();
   }
    render() {
        let buttons;
        if(localStorage.getItem('token')){
             buttons = (
                  <div>
                <a className="btn"><i className="fa h4 fa-user-alt"></i></a>
                 <Link to="/profile" className="h4 btn">PROFILE</Link>
                 <Link to="/" onClick={this.logout} className="h4 btn">LOGOUT</Link>
                  </div> 
             )
        }else{
             buttons = (
                  <div>

                <a className="btn"><i className="fa h4 fa-mobile-alt"></i></a>
                 <Link to="/login" className="h4 btn">LOGIN</Link>
                 <Link to="/register" className="h4 btn">REGISTER</Link>

                  </div> 
             )

        }





        return (
            <Fragment>
            <div className="TopSectionDown">
            <Navbar fixed={"top"} className="navbar" bg="light">
            
            <Container fluid={"true"} className="fixed-top shadow-sm p-2 mb-0 bg-white">
                     <Row>
                          <Col lg={4} md={4} sm={12} xs={12}>
                          <Link to="/"> <img alt='' className="nav-logo" src={Logo} /> </Link>
                          </Col>
            
                          <Col lg={4} md={4} sm={12} xs={12}>
                          </Col>
            
                 <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                 {buttons}
              </Col>
            
                     </Row>
            
                </Container>
            
              </Navbar>
              </div>
            
                           </Fragment>
        )
    }
}

export default Navmenudekstop
