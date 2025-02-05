import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function ImageSlider({ content }) {
  const scrollContainerRef = useRef(null);

  // Handle scroll buttons
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Adjust this value as needed
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex items-center gap-3 w-full">
      {/* Left Scroll Button */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:block p-2 bg-gray-700 text-white rounded-full hover:bg-gray-800"
      >
        <FaChevronLeft />
      </button>

      {/* Scrollable Image Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth items-center w-full"
        style={{ scrollBehavior: "smooth", overflowX: "auto", whiteSpace: "nowrap" }}
      >
        {content.map((item, index) => ( 
          <img
            key={index}
            src={item}
            className="rounded-md hover:cursor-pointer  w-[250px]  h-[170px]  md:w-[275px] lg:w-[200px] lg:h-[270px] object-fit md:h-[210px]"
            alt={`Slide ${index}`}
          />
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={() => scroll("right")}
        className="hidden md:block p-2 bg-gray-700 text-white rounded-full hover:bg-gray-800"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}

export default ImageSlider;
