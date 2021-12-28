import React, { Component } from 'react'
import Footerdekstop from '../common/Footerdekstop'
import Navmenudekstop from '../common/Navmenudekstop'
import Profile from '../common/Profile'

class ProfilePage extends Component {
    render() {
        const User = this.props.user;
        return (
            <>
            
            <div className='Desktop'>
                <Navmenudekstop/>
                </div>
                <Profile user = {User}/>
                <div className='Desktop'>
                    <Footerdekstop/>
                </div>
    
            
            </>
        )
    }
}

export default ProfilePage
