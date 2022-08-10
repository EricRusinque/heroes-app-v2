import './index.css'
import './_login-screen.scss'
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { types } from '../../types/types';
import { AuthContext } from '../../auth/authContext';

export const LoginScreen = () => {

    const { dispatch } = useContext( AuthContext )
  
    const navigate = useNavigate()

    const handleLogin = () => {

        const action = {
            type: types.login,
            payload: 'Eric'  
        }
        
        dispatch(action);
        
        const lastPath = localStorage.getItem('lastPath') || '/marvel'
        navigate(lastPath,{
            replace: true
        })
    }
  
    return (
        <form className="box">
            <div className="form-opacity">
            <h1>Login</h1>
            <input 
                type="text" 
                name="" 
                placeholder="Username"
                autoComplete="off"
            />
            <input 
                type="password" 
                name="" 
                placeholder="Password"
                autoComplete="off"
            />
            <button
                onClick={handleLogin}
                type="submit"
            >
                Submit
            </button>
            </div>
        </form>
    )
};
  