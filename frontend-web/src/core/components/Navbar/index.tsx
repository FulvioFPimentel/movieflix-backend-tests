import { getAccessTokenDecoded, logout } from 'core/utils/auth';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.scss'

const Navbar = () => {

    const [ currentUser, setCurrentUser ] = useState('');
    const location = useLocation();

    useEffect(() => {
        const currentUserData = getAccessTokenDecoded();
        setCurrentUser(currentUserData.user_name)
            },[location])

    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        logout();
    }

    return (
        <nav className="row bg-primary main-nav">
                <div className="col-2">
                    <Link to="/movies" className="nav-logo-text">
                        <h4>MovieFlix</h4>
                    </Link>
                </div>

                <div className="col-3">
                    { currentUser && (
                        <>
                            <div className="nav-login-text">
                                <h6 className="nav-login-name">{currentUser}</h6>
                                    <h6 className="nav-login-separator">|</h6>
                                    <a href="#logout" 
                                        className="nav-login-text"
                                        onClick={handleLogout}
                                        > 
                                        <h6 className="nav-login-name">LOGOUT</h6>
                                    </a>
                            </div>

                        </>
                    )}
                </div>

        </nav>
    )
}

export default Navbar;