import { Link } from "react-router-dom";
import logo from "../images/logo.png"
import logowhite from "../images/logowhite.png"

const Navbar = () => {

  const navLinks=[
    {name:'Home',path:"/"},
    {name:'About Us',path:"/about"},
    {name:'Contact Us',path:"/contact"},
  ];


  return (
    <>
    <nav className='w-full h-14 bg-blue-200 dark:bg-gray-800 flex justify-between px-4 items-center md:px-4 sticky z-50 top-0'>
        <div className='text-2xl font-bold text-indigo-700'>
          <Link to="/">
            <img className='h-12 dark:hidden'
             src={logo} alt="" />
            <img className='h-12 hidden dark:block'
             src={logowhite} alt="" />
            </Link>
        </div>
        
            <ul className='md:flex font-semibold hidden dark:text-white'>
                {navLinks.map((link,index) => (
                  <li key={index} className='mx-[10px] cursor-pointer  hover:text-blue-600'>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}      
            </ul>

                <Link className='md:block hidden bg-indigo-700 dark:bg-yellow-400 px-2 py-2 rounded text-white cursor-pointer'
                 to="/login">Login/Signup</Link>
      
        <div className='md:hidden cursor-pointer'>
          <a className="text-4xl" href="#">&#8801;</a>
        </div>
    
    </nav>
    </>
  )
}

export default Navbar