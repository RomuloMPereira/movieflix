import { getAccessTokenDecoded, logout } from 'core/utils/auth';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.scss';

const Navbar = () => {
    const [currentUser, setCurrentUser] = useState('');
    const location = useLocation();

    useEffect(() => {
        const currentUserData = getAccessTokenDecoded();
        setCurrentUser(currentUserData.user_name);
    }, [location]);

    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        logout();
    }

    return (
        <nav className="main-nav bg-primary">
            <Link to="/" className="nav-logo-text">
                <h4>MovieFlix</h4>
            </Link>
            {currentUser && (
                <a
                    href="#logout"
                    className="nav-link"
                    onClick={(e) => {
                        handleLogout(e);
                    }}
                >
                    SAIR
                </a>
            )}
        </nav>
    );
}

export default Navbar;
