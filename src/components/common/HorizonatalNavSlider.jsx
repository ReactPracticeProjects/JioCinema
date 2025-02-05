import React, { useRef } from 'react'
import { FaChevronLeft ,FaChevronRight } from "react-icons/fa";

function HorizonatalNavSlider() {

    const scrollContainerRef = useRef(null);
    
    const navItems = [
        "For You", "Cricket", "Bigg Boss", "FREE Movies", "Reality", 
        "MTV Roadies XX", "News", "BBK", "Kids & Family", 
        "AUS vs IND", "FREE Anime", "Studios", "ISL", "FREE Shows", "Premium","Tata Ipl","Top 10","Coming Soon","live","Tv and Movies", "Tennis","Much More",
        
      ];

       // Handle scroll buttons
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200; // Adjust this value as needed
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };


  return (
    <>
    
    <div className='bg-light-theme sticky top-[71px] text-white p-3 w-full flex gap-3'>

        {/* Left Scroll Btn */}
        
        <button onClick={()=>scroll('left')} className="hidden md:block bg-gray-800/50 p-1 rounded-full hover:bg-gray-800">
        <FaChevronLeft />
        </button>



        {/* Navitems */}
        <div  ref={scrollContainerRef} className='flex gap-3 overflow-x-auto no-scrollbar scroll-smooth items-center'>
            {navItems.map((item,key)=>{
                return (
                    <button key={key} className='px-3 text-sm py-1 whitespace-nowrap rounded-full bg-zinc-500  text-white hover:bg-white hover:text-black transition-colors flex-shrink-0'>
                        {item}
                    </button>
                )
            })}
        </div>


        {/* right scroll btn */}
        <button   onClick={() => scroll('right')} className="hidden md:block bg-gray-800/50 p-1 rounded-full hover:bg-gray-800">
        <FaChevronRight />
        </button>
    </div>
      
    </>
  )
}

export default HorizonatalNavSlider
