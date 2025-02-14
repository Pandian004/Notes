import React from 'react';
import Dropdown from'./input/DropDown.js';
import { BiExport } from "react-icons/bi";
import { LiaSave } from "react-icons/lia";
// import axios from 'axios';
// import { toast } from 'sonner';


const Navbar = ({isOpen, onSave, onPrint}) => {

  // function handleSubmit(){
  //   console.log(data);
  //   axios.post("http://localhost:5000/upload", {title, data, id})
  //   .then(res =>{ 
  //     console.log(res)
  //     toast.success('Successfully saved')
  //   })
  //   .catch(err => console.log(err));
  // }
  return (
    <div className= {`p-3 border-b-2 bg-white sticky ${isOpen?"w-4/5":"w-full"} top-0 ml-auto flex justify-between items-center transition-all`}>
      <div className=''>
        <p className='text-3xl'>Notes</p>
      </div>
      <div className='flex space-x-4 justify-center items-center'>
        <div onClick={onSave} className='flex space-x-2 justify-center py-2 px-4 bg-slate-50 rounded-xl cursor-pointer hover:bg-black hover:text-white transition ease-in-out duration-300'>
          <p className='text-xl'><LiaSave /></p>
          <button>save</button>
        </div>
        <div onClick={onPrint} className='flex space-x-2 justify-center py-2 px-4 bg-slate-50 rounded-xl cursor-pointer hover:bg-black hover:text-white transition ease-in-out duration-300'>
          <p className='text-xl'><BiExport /></p>
          <button>Export as PDF</button>
        </div>
        <div className=''>
          <Dropdown />
        </div>
      </div>
    </div>
  )
}

export default Navbar