import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Homepage from '../components/pages/Homepage'
import ProfilePage from '../components/pages/ProfilePage'
import RegisterPage from '../components/pages/RegisterPage'
import UserLoginPage from '../components/pages/UserLoginPage'
import AppUrl from '../api/AppUrl'
import axios from 'axios' 
import Navmenudekstop from '../components/common/Navmenudekstop'
import Historypage from '../components/pages/Historypage'
import Leave from '../components/home/Leave'

class AppRoute extends Component {
    constructor(){
        super();
        this.state={
             user:{}
        }
   }
   componentDidMount(){
    axios.get(AppUrl.UserData).then((response) => { 
             this.setUser(response.data)
        }).catch(error=>{

        });
   }


   setUser = (user) => {
        this.setState({user:user})
   }

    render() {
        return (
            <>
            <Navmenudekstop user={this.state.user} setUser={this.setUser} />
                <Switch>
                    <Route exact path="/" render={(props) => <Homepage user={this.state.user} setUser={this.setUser}  {...props} key={Date.now()} /> }/>
                    <Route exact path="/login" render={(props) => <UserLoginPage user={this.state.user} setUser={this.setUser}  {...props} key={Date.now()} /> } />
                    <Route exact path="/register" render={(props) => <RegisterPage user={this.state.user} setUser={this.setUser} {...props} key={Date.now()} /> } />
                    <Route exact path="/profile" render={(props) => <ProfilePage user={this.state.user} setUser={this.setUser}  {...props} key={Date.now()} /> } />
                    <Route exact path="/history/:id" render={(props) => <Historypage user={this.state.user} setUser={this.setUser}  {...props} key={Date.now()} /> } />
                    <Route exact path="/leave" render={(props) => <Leave user={this.state.user} setUser={this.setUser}  {...props} key={Date.now()} /> } />
                </Switch>
            
            </>
        )
    }
}

export default AppRoute
