import React, { Component } from 'react'
import Footerdekstop from '../common/Footerdekstop'
import Navmenudekstop from '../common/Navmenudekstop'
import UserLogin from '../common/UserLogin'
class UserLoginPage extends Component {
    render() {
        return (
            <>
            
            <div className='Desktop'>
                <Navmenudekstop/>
                </div>
                <UserLogin/>
                <div className='Desktop'>
                    <Footerdekstop/>
                </div>
    
            
            </>
        )
    }
}

export default UserLoginPage
