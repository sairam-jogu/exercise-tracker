import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="container ">
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
        <Link to='/' className='navbar-brand p-3'>ExerciseTracker</Link>
        <button className="navbar-toggler px-3 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
            <ul className="navbar-nav ml-auto d-flex p-3">
                <li className="nav-item ">
                    <Link to="/" className='nav-link'>Exercises</Link>
                </li>
                <li className="nav-item">
                    <Link to="/create" className='nav-link'>Create Exercise Log</Link>
                </li>
                <li className="nav-item">
                    <Link to="/user" className='nav-link'>Users</Link>
                </li>

            </ul>
        </div>
    </nav>
    </div>
  )
}

export default Header
