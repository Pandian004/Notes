import React from 'react'
import {Link} from 'react-router-dom';
// import Dropdown from'./input/DropDown.js';
import { BiExport } from "react-icons/bi";

const Navbar = ({isOpen}) => {
  return (
    <div className= {`p-3 border-b-2 bg-white sticky ${isOpen?"w-4/5":"w-full"} top-0 ml-auto flex justify-between items-center transition-all`}>
      <div className=''>
        <p className='text-3xl'>Notes</p>
      </div>
      <div className='flex space-x-10 justify-center items-center'>
        <div className='flex space-x-2 justify-center py-2 px-4 bg-slate-50 rounded-xl cursor-pointer hover:bg-black hover:text-white transition ease-in-out duration-300'>
          <p className='text-xl'><BiExport /></p>
          <button>Export as PDF</button>
        </div>
        <div className='space-x-4'>
          <Link to = '/login'><button className='p-2 px-3 rounded-3xl bg-slate-100'>Login</button></Link>
          <Link to = '/signup'><button className='p-2 rounded-3xl bg-black text-white'>Signup</button></Link>  
        </div>
        {/* <div className=''>
          <Dropdown />
        </div> */}
      </div>
    </div>
  )
}

export default Navbar