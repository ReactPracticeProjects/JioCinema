import React from 'react'
import { FaHome, FaTv } from "react-icons/fa";
import { MdSportsKabaddi } from "react-icons/md";
import { RiMovie2Line } from "react-icons/ri";
import { IoIosArrowDropup } from "react-icons/io";
import { Link } from 'react-router-dom';

function BottomNavbar() {
  return (
    <div className='md:hidden fixed bottom-0 left-0 w-full z-50 bg-black'>
      <div className="bottomnavbar flex justify-around items-center text-center p-3">
        <div className="flex flex-col items-center">
          <Link to="/">
          <FaHome className='text-zinc-500 text-xl'/>
          <span className='text-zinc-500 text-sm text-center'>Home</span>
          </Link>
          
        </div>
        <div className="flex flex-col items-center">
          <Link to="/sports">

          <MdSportsKabaddi className='text-zinc-500 text-xl'/>
          <span className='text-zinc-500 text-sm text-center'>Sports</span>
          </Link>
        </div>
        <div className="flex flex-col items-center">
        <Link to="#">
          
          <IoIosArrowDropup className='text-zinc-500 text-3xl'/>
          </Link>
        </div>
        <div className="flex flex-col items-center">
        <Link to="/movies">
        <RiMovie2Line className='text-zinc-500 text-xl'/>
        <span className='text-zinc-500 text-sm text-center'>Movies</span>
          </Link>
          
        </div>
        <div className="flex flex-col items-center">
        <Link to="/tvshows">
          
          <FaTv className='text-zinc-500 text-xl'/>
          <span className='text-zinc-500 text-sm text-center'>Tv Shows</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BottomNavbar