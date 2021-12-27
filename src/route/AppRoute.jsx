import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Profile from '../components/home/Profile'

class AppRoute extends Component {
    render() {
        return (
            <>

                <Switch>
                    <Route exact path="/" component={Profile}/>
                </Switch>
            
            </>
        )
    }
}

export default AppRoute
