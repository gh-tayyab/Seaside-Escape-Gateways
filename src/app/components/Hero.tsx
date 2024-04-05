import React from 'react'

const Hero = () => {
    return (
        <div  className='w-full h-screen'>
            <img className='top-0 left-0 w-full h-screen object-cover' src="https://images.pexels.com/photos/2141003/pexels-photo-2141003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="bgimage" />
            <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
                <div className='md:left-[10%] max-w-[1100px m-auto absolute] px-4'>
                    <p data-aos ="fade-up">All Inclusive</p>
                    <h1 data-aos ="fade-up" className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private Beaches & Gateways</h1>
                    <p data-aos ="fade-up" className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aspernatur dolorum ex perspiciatis ut et odit pariatur illo accusantium assumenda.</p>
                    <button data-aos ="fade-up" className='bg-white text-black hover:shadow-2xl'>Reserve Now!</button>
                </div>
            </div>
        </div>
    )
}

export default Hero