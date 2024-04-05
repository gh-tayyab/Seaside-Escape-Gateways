'use client'
import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

const ImageSlider = () => {
    const slides = [
        {
            url: 'https://images.pexels.com/photos/858508/pexels-photo-858508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Sushi'
        },
        {
            url: 'https://images.pexels.com/photos/14693675/pexels-photo-14693675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Lobster'
        },
        
        {
            url: 'https://images.pexels.com/photos/7029909/pexels-photo-7029909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Pasta'
        },
        {
            url: 'https://images.pexels.com/photos/2072867/pexels-photo-2072867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Salmon'
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0) 

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1
        setCurrentIndex(newIndex)
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length -1
        const newIndex = isLastSlide ? 0 : currentIndex +1
        setCurrentIndex(newIndex)
    };

    const goToSlide = (slideIndex:any) => {
        setCurrentIndex(slideIndex)
    }

  return (
    <div className='max-w-[1400px] h-[600px] w-full m-auto py-16 px-4 relative'>
        
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500' 
        style={{backgroundImage: slides && slides[currentIndex] ? `url(${slides[currentIndex].url})` : ''}}>
        </div>

        {/* left arrow */}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30}/>
        </div>

        {/* right arrow */}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30}/>
        </div>

        <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex)=> (
                <div className='text-2xl cursor-pointer' key={slideIndex} onClick={()=> goToSlide}>
                    <RxDotFilled />
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default ImageSlider