import React, {useState} from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Password = () => {
    const[isToggle, setIsToggle] = useState(false);
    function passwordToggle() {
        setIsToggle(!isToggle);
    }
  return (
    <div className='my-4'>
        <label htmlFor='password'>Password</label>
        <div className='border border-black p-2 rounded-full w-full flex justify-between items-center'>
            <input type={isToggle?'text':'password'} id='password'placeholder='Enter your password' className='bg-transparent focus:outline-none w-full' required></input>
            <p className='cursor-pointer' onClick={passwordToggle}>{isToggle?<FaEyeSlash />:<FaEye />}</p>
        </div>
    </div>
  )
}

export default Password