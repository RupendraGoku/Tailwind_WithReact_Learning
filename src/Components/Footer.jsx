import React from 'react'
import seo from "../images/seo.png";
import iso from "../images/iso.png"
import logo from "../images/logo.png"
import logowhite from "../images/logowhite.png"


const footerData = [
  {
    id: 1,
    title: "Nature Visit",
    links: ["About Us", "FAQs", "Privacy Policy"]
  },
  {
    id: 2,
    title: "Products",
    links: ["Guided Tours", "Eco Camps", "Adventure Packages", "Custom Plans"]
  },
  {
    id: 3,
    title: "Support",
    links: ["Help Center", "Terms of Service", "Refund Policy"]
  }
];


const Footer = () => {
  return (
    <div className='w-full bg-blue-900  dark:bg-gray-700 px-4 text-white pt-8 flex flex-col md:flex-row flex-wrap justify-between md:px-4 items-center text-center md:text-start '> 
        <div className='w-full md:w-1/4 mb-6 md:mb-0 flex flex-col items-center'>
            <img className='h-16 ml-3 '
             src={logowhite} alt="logo" />
            <p className='m-4 '>Email Us : contact@visit.com</p>
            <img className='w-32 h-32 mb-2 ml-2'
             src={iso} alt="iso logo" />
        </div>

        {footerData.map((section) => (
          <div key={section.id} className=' mb-4 flex flex-col items-center'>
            <h2 className='font-bold text-xl mt-4 '>{section.title}</h2>
            <div className='w-32 h-1  bg-yellow-400 rounded-2xl my-2'></div>
            <div>
              <ul className=''>
                {section.links.map((link,idx) => (
                  <li className='cursor-pointer hover:text-blue-500 ' key={idx}>{link}</li>
                ))} 
              </ul>              
            </div>
        </div>
        ))}
    </div>
  )
}

export default Footer