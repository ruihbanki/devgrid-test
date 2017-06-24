import React from 'react';
import { Link } from 'react-router-dom'

class Login extends React.Component {
    render() {
        return (
            <div className="Login">
                Login<br/>
                <Link to="/main/my-list">Enter</Link> 
            </div>
        );
    }
}

export default Login;