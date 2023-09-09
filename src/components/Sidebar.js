import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen= useSelector((store)=>store.app.isMenuOpen);
    if(!isMenuOpen) return null;
    
  return (
    <div className='p-5 shadow-lg w-60 h-auto'>
        <ul>
            <Link to="/"><li>Home</li></Link>
            <li>Subscription</li>
            <li>Shorts</li>
        </ul>
        <hr/>
        <ul>
            <li>Library</li>
            <li>History</li>
            <li>Liked Videos</li>
        </ul>
        <h1 className='font-bold pt-5'>Subscription</h1>
        <ul>
            <li>Akshay Saini</li>
            <li>ABNUX</li>
            <li>Andrew Huberman</li>
        </ul>
    </div>
  )
}

export default Sidebar