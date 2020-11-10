import React from 'react'
import './Login.css'
import { loginUrl } from './spotify'

function Login() {
    return (
        <div className="login">

            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1024px-Spotify_logo_with_text.svg.png" alt="Spotify Logo" />
            
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
