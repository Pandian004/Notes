import React, {useState, useEffect} from 'react';
import { TbLayoutSidebarLeftExpandFilled, TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { FaPlus } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import axios from 'axios';
import { Toaster, toast } from 'sonner';



const Sidebar = ({isOpen, handleClick, handleNew, onEdit}) => {

  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/notesDetails", {withCredentials: true})
    .then(res => {
      setDetails(res.data); 
      // console.log(details[0]);
    })
    .catch(err => console.log(err));
  });

  function handleDelete(id){
    axios.delete("http://localhost:5000/deleteNote", {data: {id}})
    .then(res => {
      console.log(res)
      toast.success("Successfully deleted")
    })
    .catch(err => console.log(err));
    console.log(id);
  }



  return (
    <div className='absolute'>
      <Toaster richColors />
      <div className={`p-4 fixed ${isOpen? 'left-0':'-left-96'} top-0 w-1/5 h-svh overflow-auto scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-100 bg-white border-2 transition-all`}>
      <div className='w-full flex items-center justify-end mb-4'>
        <p className='text-3xl cursor-pointer' onClick = {handleClick}><TbLayoutSidebarLeftCollapseFilled /></p>
      </div>
        <div className='mb-4'>
          <div onClick={() => handleNew()} className='p-2 bg-slate-50 hover:bg-black hover:text-white w-full flex items-center justify-center rounded-xl space-x-2 cursor-pointer'>
            <p><FaPlus /></p>
            <button> New notes</button>
          </div>
        </div>
        <div className='py-4 border-y-2 border-slate-300'>
          <p className='text-xl text-center cursor-default'>Your notes</p>
        </div>
        <div className=' w-full '>
          {details.map(note => {
            return  <div key ={note._id} id = {note.id}  className='flex justify-between items-center my-2'>
                      <div onClick={() => onEdit(note._id)} className="hover:bg-slate-100 rounded-xl p-2 w-full"><p className='truncate cursor-pointer text-xl'>{note.title}</p></div>
                      <p onClick={() => {handleDelete(note._id)}} className='cursor-pointer hover:text-red-700 '><FaTrashCan /></p>
                    </div>
          }) }
        </div>

      </div>
      <div onClick = {handleClick} className={`relative top-4 p-2 bg-slate-100 rounded-r-xl shadow ${isOpen? 'hidden':'visible'} cursor-pointer`}>
        <p className='text-3xl'><TbLayoutSidebarLeftExpandFilled /></p>
      </div>
    </div>
  )
}

export default Sidebar