import React from 'react';
import Password from '../Components/input/Password.js';
import {Link} from 'react-router-dom';

const Signup = () => {
  return (
    <div className='h-screen flex justify-center items-center bg-slate-50'>
      <div className='flex flex-col w-1/4 border-2 shadow-xl p-4 rounded-xl bg-white'>
        <div className='text-center my-4'>
          <p className='text-2xl'>Create your account</p>
        </div>
        <form>
          <div className='my-4'>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' placeholder='Enter your name' className='border border-black p-2 rounded-full w-full focus:outline-none' required></input>
          </div>
          <div className='my-4'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' placeholder='Enter your email' className='border border-black p-2 rounded-full w-full focus:outline-none' required></input>
          </div>
          <Password />
          <button type='submit' className='p-2 bg-black text-white w-full rounded-full my-4'>Login</button>
        </form>
        <p>Already have an account? <Link to = '/login'><span className='text-blue-700 cursor-pointer'>Login</span></Link></p>
      </div>
    </div>
  )
}

export default Signup