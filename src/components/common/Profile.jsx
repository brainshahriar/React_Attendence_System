import React, { Component } from 'react'
import { Fragment } from 'react'
import { Redirect } from 'react-router-dom';

class Profile extends Component {
     constructor() {
          super();
          this.state = { 
               time: new Date() 
          };
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
     render() { 

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
                   <h1> User Profile Page </h1>
               <ul className="list-group">
     <li className="list-group-item">Name :  {name} </li>
     <li className="list-group-item">Email :  {email} </li>
               </ul>
               <div className="Clock">
          <h3 id="time">{this.state.time.toLocaleTimeString()}</h3>
        </div>

              </Fragment>
          )
     }
}

export default Profile