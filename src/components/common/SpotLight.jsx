import React from 'react'

function SpotLight({imgsrc}) {
  return (
    <div>
      <div className='bg-[#0D0E10] w-full h-full text-white p-5'>
        <h1 className='text-lg sm:text-xl md:text-2xl pb-5 font-semibold'>In The Spotlight</h1>
        <div className="spotlightimg">
            <img src={imgsrc} className='rounded-lg h-auto md:h-full' alt="" />
        </div>

      </div>
    </div>
  )
}

export default SpotLight
