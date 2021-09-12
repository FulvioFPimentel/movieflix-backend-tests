import React from 'react';
import './styles.scss'

const Navbar = () => (
    <nav className="row bg-primary main-nav">
        <div className="col-2">
            <a href="/movies" className="nav-logo-text">
             <h4>MovieFlix</h4>
            </a>
        </div>
    </nav>
);

export default Navbar;