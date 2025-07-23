import React from 'react'

const Details = ({heading}) => {
  return (
        <div className='h-auto w-full flex flex-wrap flex-col items-center text-center p-10 '>
            <div className='w-full h-auto flex flex-wrap  flex-col items-center'>
              <p className='text-blue-950 font-bold text-3xl md:text-4xl text-center'>{heading}</p>
              <div className='w-36 h-1 border-b-4 border-amber-500 mt-2 rounded-2xl md:mt-4 mb-12'></div>
            </div>
        </div>
  )
}

export default Details