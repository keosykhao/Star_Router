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

            </ul>


            </nav>
        </div>
    );
}

export default Nav;