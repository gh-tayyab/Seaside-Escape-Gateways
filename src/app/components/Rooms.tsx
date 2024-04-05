import React from 'react'

const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
        <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
            <h3 data-aos ="fade-up" className='text-2xl font-bold'>Find Interior Rooms</h3>
            <p data-aos ="fade-up" className='pt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate assumenda laudantium sit! Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='grid grid-cols-2 col-span-2 gap-2'>
            <img data-aos ="fade-up" className="object-cover w-full h-full" src="https://images.pexels.com/photos/12715501/pexels-photo-12715501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

            <img data-aos ="fade-up" className="row-span-2 object-cover w-full h-full" src="https://images.pexels.com/photos/7601116/pexels-photo-7601116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

            <img data-aos ="fade-up" className="object-cover w-full h-full" src="https://images.pexels.com/photos/6510311/pexels-photo-6510311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
    </div>
  )
}

export default Rooms