import React, { Component } from 'react'
import Footerdekstop from '../common/Footerdekstop'
import Navmenudekstop from '../common/Navmenudekstop'
import Register from '../common/Register'

class RegisterPage extends Component {
    render() {
        const setUser = this.props.setUser;
        const user = this.props.user;
        return (
            <>
            
            <div className='Desktop'>
                <Navmenudekstop/>
                </div>
                <Register setUser={setUser} user ={user} />
                <div className='Desktop'>
                    <Footerdekstop/>
                </div>
    
            
            </>
        )
    }
}

export default RegisterPage
