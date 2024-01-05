import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-evenly", backgroundColor: "orange", color: "white",margin:"20px 20px",borderRadius:"10px",padding:"20px"}}>
            <Link to={"/"}>
                <h1>Content</h1>
            </Link>
            <Link to={"/cart"}>
                <h1>Cart</h1>
            </Link>

        </div>
    )
}

export default Navbar