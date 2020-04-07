import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {

    render() {
        return (
            <div>
                <header>
                    <h1 className='logo'>SHEFILE</h1>
                    <Link className='dashboard-button' to='/'>Dashboard</Link>
                    <Link className='add-inventory-button' to='/add'>Add inventory</Link>
                </header>
            </div>
        )
    }
}

export default Header