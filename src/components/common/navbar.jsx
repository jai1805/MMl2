import React, { Component } from 'react';
import "./home.css"


const Navbar = (props) => { 
    let { movies } = props

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="navbar-brand" href="/">MML</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/graphs">Analytics</a>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    );
}

export default Navbar;