import React from 'react'
import { BiMoviePlay } from "react-icons/bi";
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className='bg-slate-600 h-12 flex justify-start'>
          <div className='py-3 mx-4 text-2xl'>
          <BiMoviePlay  />
          </div>
           <Link to='/' className='p-2 font-bold mx-4 text-2xl text-blue-500 '>Movies </Link>
           <Link to='/watchlist' className='p-2 font-bold mx-4 text-2xl text-blue-500' >Watchlist</Link>
      </nav>
    </>
  )
}

export default Navbar
