import React, { Component } from 'react'
import Footerdekstop from '../common/Footerdekstop'
import Navmenudekstop from '../common/Navmenudekstop'
import Profile from '../home/Profile'

class Homepage extends Component {
    render() {
        return (
            <>
            <Navmenudekstop/>
            <Profile/>
            <Footerdekstop/>
            </>
        )
    }
}

export default Homepage
