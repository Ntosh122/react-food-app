import React from 'react'
import sunOut from '../data/images/14.jpg'
import addDaily from '../data/images/13.jpg'
import cta from '../data/images/cta-img.jpg'
const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* cards */}
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-green-500 bg-green-500 text-white mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img src={sunOut} alt="/" className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'/>
        </div>

        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>New Restuarants</p>
                <p className='px-2'>Add Daily</p>
                <button className='border-green-500 bg-green-500 text-white mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img src={addDaily} alt="/" className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'/>
        </div>

        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Prepared from top resturants</p>
                <p className='px-2'>Suburb & Locally</p>
                <button className='border-green-500 bg-green-500 text-white mx-2 absolute bottom-4'>Check Now</button>
            </div>
            <img src={cta} alt="/" className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'/>
        </div>
        
    </div>
  )
}

export default HeadlineCards