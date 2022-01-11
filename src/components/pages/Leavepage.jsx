import React, { Component } from 'react'
import Footerdekstop from '../common/Footerdekstop'
import Navmenudekstop from '../common/Navmenudekstop'
import Leave from '../home/Leave'

class Leavepage extends Component {
    render() {

        return (
            <>
            <Navmenudekstop/>
            <Leave/>
            <div className='Desktop'>
            <Footerdekstop/>
            </div>
            </>
        )
    }
}

export default Leavepage
