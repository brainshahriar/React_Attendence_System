import React, { Component } from 'react'
import Footerdekstop from '../common/Footerdekstop'
import Navmenudekstop from '../common/Navmenudekstop'
import History from '../common/History'

class Historypage extends Component {
    render() {
        const User = this.props.user;
        return (
            <>
            
            <div className='Desktop'>
                <Navmenudekstop/>
                </div>
                    <History  user = {User} />
                <div className='Desktop'>
                    <Footerdekstop/>
                </div>
    
            
            </>
        )
    }
}

export default Historypage
