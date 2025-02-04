import React from 'react'
import { Link } from 'react-router-dom'

function TopFooter() {
  return (
    <div className='w-full'>
        <div className=" bg-[#17181A]  lg:flex md:justify-between px-5 py-10 text-white">
            <div className="leftcontent gap-10 border-b-2 lg:border-0  border-b-zinc-500 pb-5 flex lg:gap-5">
                <div className=''>
                    <p className='md:text-2xl mb-5'>JioCinema</p>
                    <div className='flex flex-col gap-2'>
                    <Link to="#"><span>For You</span></Link>
                    <Link to="#"><span>Sports</span></Link>
                    <Link to="#"><span>Movies</span></Link>
                    <Link to="#"><span>Tv shows</span></Link>
                    </div>

                </div>
                <div className=''>
                    <p className='md:text-2xl mb-5'>Support</p>
                    <div className='flex flex-col gap-2'>
                    <Link to="#"><span>Help Center</span></Link>
                    <Link to="#"><span>Terms Of Use</span></Link>
                    <Link to="#"><span>Privacy Policy</span></Link>
                    <Link to="#"><span>Content Complaints</span></Link>
                    </div>
                </div>

            </div>

            <div className="rightcontent flex  md:items-center md:justify-around md:py-5 gap-5">
                <div>
                    <p className='md:text-2xl mb-5 font-semibold'>Connect with us</p>
                    <div className="socialmediaicons flex gap-2">
                        <Link className='p-1 md:p-2.5 bg-light-theme rounded-full' to="#"><span><img className='' src="/facebook.svg" alt="" /></span></Link>
                        <Link className='p-1 md:p-2.5 bg-light-theme rounded-full' to="#"><span><img className='' src="/instagram.svg" alt="" /></span></Link>
                        <Link className='p-1 md:p-2.5 bg-light-theme rounded-full' to="#"><span><img className='' src="/x.svg" alt="" /></span></Link>
                        <Link className='p-1 md:p-2.5 bg-light-theme rounded-full' to="#"><span><img className='' src="/youtube.svg" alt="" /></span></Link>
                    </div>
                </div>
                <div>
                    <p className='md:text-2xl mb-5 font-semibold'>Download The App</p>
                    <div className='flex'>
                    <Link to="#"><span><img src="/googlePlay.svg" alt="" /></span></Link>
                    <Link to="#"><span><img src="/appleStore.svg" alt="" /></span></Link>

                    </div>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default TopFooter
