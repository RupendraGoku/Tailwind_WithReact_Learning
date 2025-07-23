import React from 'react'
import '../style.css'
import card from "../images/card.jpg"

const Card = () => {
  return (
    <>
<div className='bg-slate-900 grid items-center justify-center h-screen'>
      <h1 className="text-white text-4xl m-6 text-center" >Lorem</h1>
      

       <div className="card-main " >
            <div className="card p-4 max-w-sm mx-auto bg-white rounded-xl  space-x-1">
              <div className="image">
                <img className='h-36 w-36' src={card} alt="" />
              </div>
              <div className=" ">
                <div className="detail text-2xl font-medium text-orange-400  ">Anime Card
                  <p className='para text-slate-500 text-base '>fusion</p>
                </div>
              </div>
            </div>
                <button className='bg-blue-400 p-2 px-11 mt-2 ml-34 text-white text-xl rounded-xl hover:bg-white hover:text-black '>Download</button>
       </div>
       <div className="text-center my-4 text-white" >Resposive
        <p className='text-green-500  md:text-blue-400 sm:text-white'>Mobile First Approch</p>
       </div>

      <div className='mt-1'>
        <div className="max-w-sm mx-auto bg-white rounded md:h-full md:w-48-xl overflow-auto md:max-w-2xl">
          <div className='md:flex'>
            <div>
              <img className='h-48 w-full object-contain  md:h-full md:w-48' src={card} alt="anime card" />
            </div>
          <div className="p-8">
            <div className='text-sm text-indigo-400'>
              This is made with tailwind css
            </div>
            <a className='mt-1 text-lg hover:text-blue-500' href="#"> This card is made with 
              <span className='bg-amber-400 p-[2px] px-[14px] rounded hover:text-red-500'>
              Tailwind css</span>
            </a>
            <p className='mt-2 text-slate-400'>Lorem ipsum dolor sit </p>
          </div>
          </div>
        </div>
      </div>

        </div>
       </>
  )
}

export default Card;