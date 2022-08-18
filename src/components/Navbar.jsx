import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <ul>
                <li><a>About Me</a></li>
                <li><a>Education</a></li>
                <li><a>Experiences</a></li>
                <li><a>Projects</a></li>
                <li><a>Skills</a></li>
            </ul>
        </div>
    )
}

export default Navbar