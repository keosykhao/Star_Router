import React from 'react';
import {Link} from 'react-router-dom'

function Nav(props) {
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        margin: "10px"
    }


    return (
        <div>
            <nav>
             <Link to="/">  
            <h1>Logo</h1>
            </Link> 
            <ul style={navStyle}>
                <Link to="/movies">
                <li>Movies</li>
                </Link>

                <Link to="Actors">
                <li>Actors</li>
                </Link>

                <Link to="tv">
                <li>Tv</li>
                </Link>

            </ul>


            </nav>
        </div>
    );
}

export default Nav;