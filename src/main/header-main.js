import React from 'react';
import { Link } from 'react-router-dom';
import NavTab from './nav-tab';
import logoSrc from '../images/logo.png';
import '../css/header.css';

class HeaderMain extends React.Component {
    render() {
        return (
            <div className="Header Header-main">
                <div className="_bar">
                    <div className="_icon">
                        <a className="material-icons" href="">menu</a>
                    </div>
                    <div className="_title">
                        
                    </div>
                    <div className="_actions">

                    </div>
                </div>
                <div className="_content">
                    <div className="_img">
                        <img src={logoSrc} alt="Logo"/>
                    </div>
                    <div className="_nav">
                        <NavTab />
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderMain;