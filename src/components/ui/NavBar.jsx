import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

import './_ui.scss'

export const Navbar = () => {

    const { user,dispatch } = useContext( AuthContext );

    const navigate = useNavigate()

    const handleLogout = () => {

        const action = {
            type: types.logout
        }


        dispatch(action)
        navigate('/login',{
            replace: true
        })
    }

    return (
        <nav className="nav-container">
            <div className="navbar-links">

                    <NavLink 
                        className=""
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className=""
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        className=""
                        to="/search"
                    >
                        Search
                    </NavLink>
            </div>
            <div className="navbar-logout">
                <ul className="">

                    <span className="user-name">
                        { user.name }
                    </span>

                    <button 
                        className="button-logout" 
                        to="/login"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}