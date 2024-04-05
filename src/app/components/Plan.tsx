import React from 'react'

const Plan = () => {
    return (
        <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
            {/* left side */}
            <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
                <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/358223/pexels-photo-358223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/1591375/pexels-photo-1591375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/1172518/pexels-photo-1172518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            {/* right side */}
            <div className='flex flex-col h-full justify-center'>
                <h1 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h1>
                <p className='text-2xl py-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, officia.</p>
                <p className='pb-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aliquam assumenda omnis inventore quod quis quo fugit labore atque aspernatur?</p>
                <div>
                    <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
                    <button className='bg-black text-white border-black hover:shadow-xl'>Book Your Trip</button>
                </div>
            </div>
        </div>
    )
}

export default Plan