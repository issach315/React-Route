import React from 'react'
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div>
        <nav>
            <Link>Home</Link>
            <Link>Contact</Link>
            <Link>About</Link>
        </nav>
    </div>
  )
}

export default Navbar