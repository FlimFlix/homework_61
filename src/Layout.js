import React, {Component} from 'react'
import {NavLink} from "react-router-dom";
import './Layout.css';


class Layout extends Component {
    render() {
        return <div className='App'>

            <nav className='header'>
                <div className='container'>
                    <NavLink to='/' className="nav-link">Home</NavLink>
                    <NavLink to='/about' className="nav-link">About us</NavLink>
                    <NavLink to='/contacts' className="nav-link">Contacts</NavLink>
                </div>

            </nav>
            <div className='content container'>
                {this.props.children}
            </div>

        </div>;
    }
}

export default Layout;