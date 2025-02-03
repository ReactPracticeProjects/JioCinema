import React, { useState } from "react";
import jiocinemalogo from "../../public/jc_logo_v2.svg";
import mdjiocinemalogo from "../../public/jio_logo.svg";
import crown from "../../public/crown.svg";
import { Link, Links } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";

function Navbar() {
  const [seartchterm, setsearchterm] = useState("");

  const handlesearch = (e) => {
    e.preventDefault();
    console.log(seartchterm);
  };

  return (
    <>
      <div className="navbarcontainer sticky top-0 left-0 bg-black-theme px-15 py-5">
        <div className="navbar flex justify-between ">
          <div className="navleft flex gap-6 ">
            <div className="logos flex gap-3 items-center">

             <Link to="/">
             
             <img src={jiocinemalogo} className="hidden lg:block" alt="" />
              <img src={mdjiocinemalogo} className="lg:hidden w-7 sm:" alt="" />
             </Link> 

               <Link to="/subscription/plans">
               <span className="flex border rounded-full py-1.5 px-2 border-2 hover:shadow-2xl shadow-primium-border border-primium-border items-center text-white">
                <img src={crown} alt="Crown" className="w-4 h-4 mr-2" />
                <span className="text-[10px] text-primium-border sm:text-sm font-semibold">
                  Go Premium
                </span>
              </span>
               </Link>
            
            </div>
            <div className="navcenter text-[#F5F5F5]  items-center gap-5 hidden md:flex">
              <Link to="/">Home</Link>
              <Link to="#">Sports</Link>
              <Link to="#">Movies</Link>
              <Link to="#">Tv Shows</Link>
              <Link to="#">More</Link>
            </div>
          </div>

          <div className="navright flex gap-3 items-center">
            <form className="relative" onSubmit={handlesearch}>
              <button
                type="submit"
                className="absolute left-1 top-1/2 transform -translate-y-1/2 text-white hidden lg:block"
              >
                <IoIosSearch className="text-xl rounded-full  hover:bg-zinc-700" />
              </button>
              <input
                onChange={(e) => setsearchterm(e.target.value)}
                value={seartchterm}
                className="bg-light-theme text-zinc-300 focus:outline-none pl-10 px-5 p-2 pr-10 rounded-2xl hidden lg:block"
                type="text"
                placeholder="Movies, Shows and more"
              />

              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white hidden lg:block"
              >
                <FaMicrophone className="text-lg rounded-full  hover:bg-zinc-700" />
              </button>
            </form>

            <button
              type="button"
              className="text-white text-sm sm:text-lg border p-2 rounded-full bg-light-theme"
            >
              <FaRegUser />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
