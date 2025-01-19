import React from 'react';
import { TbLayoutSidebarLeftExpandFilled, TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { FaPlus } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";


const Sidebar = ({isOpen, handleClick}) => {
  return (
    <div className='absolute'>
      <div className={`p-4 fixed ${isOpen? 'left-0':'-left-96'} top-0 w-1/5 h-svh overflow-auto scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-100 bg-white border-2 transition-all`}>
      <div className='w-full flex items-center justify-end mb-4'>
        <p className='text-3xl cursor-pointer' onClick = {handleClick}><TbLayoutSidebarLeftCollapseFilled /></p>
      </div>
        <div className='mb-4'>
          <div className='p-2 bg-black text-white w-full flex items-center justify-center rounded-xl space-x-2 cursor-pointer'>
            <button> New notes</button>
            <p><FaPlus /></p>
          </div>
        </div>
        <div className='py-4 border-y-2 border-slate-300'>
          <p className='text-xl text-center cursor-default'>Your notes</p>
        </div>
        <div className=' w-full '>
          <div className='flex justify-between items-center my-2'>
            <p className='truncate'>Some random notes</p>
            <p className='cursor-pointer'><FaTrashCan /></p>
          </div>
          <div className='flex justify-between items-center my-2'>
            <p className='truncate'>Some random notes</p>
            <p className='cursor-pointer'><FaTrashCan /></p>
          </div>
          <div className='flex justify-between items-center my-2'>
            <p className='truncate'>Some random notes</p>
            <p className='cursor-pointer'><FaTrashCan /></p>
          </div>
          <div className='flex justify-between items-center my-2'>
            <p className='truncate'>Some random notes</p>
            <p className='cursor-pointer'><FaTrashCan /></p>
          </div>
          <div className='flex justify-between items-center my-2'>
            <p className='truncate'>Some random notes</p>
            <p className='cursor-pointer'><FaTrashCan /></p>
          </div>
          <div className='flex justify-between items-center my-2'>
            <p className='truncate'>Some random notes</p>
            <p className='cursor-pointer'><FaTrashCan /></p>
          </div>
          <div className='flex justify-between items-center my-2'>
            <p className='truncate'>Some random notes</p>
            <p className='cursor-pointer'><FaTrashCan /></p>
          </div>
          <div className='flex justify-between items-center my-2'>
            <p className='truncate'>Some random notes</p>
            <p className='cursor-pointer'><FaTrashCan /></p>
          </div>
          <div className='flex justify-between items-center my-2'>
            <p className='truncate'>Some random notes</p>
            <p className='cursor-pointer'><FaTrashCan /></p>
          </div>
          <div className='flex justify-between items-center my-2'>
            <p className='truncate'>Some random notes</p>
            <p className='cursor-pointer'><FaTrashCan /></p>
          </div>
          <div className='flex justify-between items-center my-2'>
            <p className='truncate'>Some random notes</p>
            <p className='cursor-pointer'><FaTrashCan /></p>
          </div>
          <div className='flex justify-between items-center my-2'>
            <p className='truncate'>Some random notes</p>
            <p className='cursor-pointer'><FaTrashCan /></p>
          </div>
          <div className='flex justify-between items-center my-2'>
            <p className='truncate'>Some random notes</p>
            <p className='cursor-pointer'><FaTrashCan /></p>
          </div>
          <div className='flex justify-between items-center my-2'>
            <p className='truncate'>Some random notes</p>
            <p className='cursor-pointer'><FaTrashCan /></p>
          </div>
          <div className='flex justify-between items-center my-2'>
            <p className='truncate'>Some random notes</p>
            <p className='cursor-pointer'><FaTrashCan /></p>
          </div>
          <div className='flex justify-between items-center my-2'>
            <p className='truncate'>Some random notes</p>
            <p className='cursor-pointer'><FaTrashCan /></p>
          </div>
          <div className='flex justify-between items-center my-2'>
            <p className='truncate'>Some random notes</p>
            <p className='cursor-pointer'><FaTrashCan /></p>
          </div>
          <div className='flex justify-between items-center my-2'>
            <p className='truncate'>Some random notes</p>
            <p className='cursor-pointer'><FaTrashCan /></p>
          </div>
          <div className='flex justify-between items-center my-2'>
            <p className='truncate'>Some random notes</p>
            <p className='cursor-pointer'><FaTrashCan /></p>
          </div>
          <div className='flex justify-between items-center my-2'>
            <p className='truncate'>Some random notes</p>
            <p className='cursor-pointer'><FaTrashCan /></p>
          </div>
          
          
          
        </div>

      </div>
      <div onClick = {handleClick} className={`relative top-4 p-2 bg-slate-100 rounded-r-xl shadow ${isOpen? 'hidden':'visible'} cursor-pointer`}>
        <p className='text-3xl'><TbLayoutSidebarLeftExpandFilled /></p>
      </div>
    </div>
  )
}

export default Sidebar