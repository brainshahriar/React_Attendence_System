import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Homepage from '../components/pages/Homepage'

class AppRoute extends Component {
    render() {
        return (
            <>

                <Switch>
                    <Route exact path="/" component={Homepage}/>
                </Switch>
            
            </>
        )
    }
}

export default AppRoute
