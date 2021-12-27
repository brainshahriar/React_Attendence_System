import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Homepage from '../components/pages/Homepage'
import UserLoginPage from '../components/pages/UserLoginPage'

class AppRoute extends Component {
    render() {
        return (
            <>

                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route exact path="/login" component={UserLoginPage}/>
                </Switch>
            
            </>
        )
    }
}

export default AppRoute
