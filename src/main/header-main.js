import React from 'react';
import { Link } from 'react-router-dom';
import NavTab from './nav-tab';
import '../css/header.css';

class HeaderMain extends React.Component {
    render() {
        return (
            <div className="Header">
                <div className="_bar">
                    <div className="_icon">
                        
                    </div>
                    <div className="_title">
                        Open Library
                    </div>
                    <div className="_actions">

                    </div>
                </div>
                <div className="_content">
                    <NavTab />
                </div>
            </div>
        );
    }
}

export default HeaderMain;