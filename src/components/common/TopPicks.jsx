import React from 'react'
import HorizonatalNavSlider from './HorizonatalNavSlider'
import ImageSlider from './ImageSlider'

function TopPicks({content}) {
  return (
    <div>
      <div>
        {content.map((item,key)=>{
            return (
                <div key={key} className='bg-[#0D0E10] w-full h-full text-white p-5'>
                <h1 className='text-lg sm:text-xl md:text-2xl pb-5 font-semibold'>{item.title}</h1>
                <div className="spotlightimg  w-full flex gap-3 text-white ">
                   <ImageSlider content={item.image}/>
                </div>
                
              </div>
            )
        })}
     
    </div>
    </div>
  )
}

export default TopPicks
