import React  from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <div className="navbar navbar-inverse">
            <div className="container">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">Dashboard</Link>
                </div>
                <ul className="nav navbar-nav navbar-right">
                    <li> <Link to="/">HOME</Link> </li>
                    <li> <Link to="/input">INPUT</Link> </li>
                    <li> <Link to="/tampil">TAMPIL</Link> </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;