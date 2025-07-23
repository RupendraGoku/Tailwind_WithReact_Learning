import React from 'react'
import image from "../images/image.jpg";
import images from "../images/images.jpg";

const Header = () => {
  

  return (
        <header className=' w-full'>
            <img 
              className='w-full hidden md:block max-h-[600px]' 
              src={image} alt="" />
            <img 
              className='w-full md:hidden max-h-[600px]' 
              src={images} alt="" />
        </header>
  )
}

export default Header