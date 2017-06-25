import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/nav.css';

class NavTab extends React.Component {
    render() {
        return (
            <div className="Nav Nav-tab">
                <ul>
                    <li>
                        <NavLink to="/main/mylist" activeClassName="is-active">My List</NavLink>
                    </li>
                    <li>
                        <NavLink to="/main/search-books" activeClassName="is-active">Search</NavLink>
                    </li>
                    <li>
                        <NavLink to="/main/report" activeClassName="is-active">Report</NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default NavTab;