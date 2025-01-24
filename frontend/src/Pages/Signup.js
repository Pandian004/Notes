import React, {useState} from 'react';
import Password from '../Components/input/Password.js';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);
  const navigate = useNavigate();
  function handleSignup(e){
    e.preventDefault();
    axios.post('http://localhost:5000/signup', {name, email, password})
    .then(res => {console.log(res)
      navigate('/')
    })
    .catch(err => {console.log(err)
      setIsDuplicate(true);
      console.log(isDuplicate)
    });
  }
  return (
    <div className='h-screen flex justify-center items-center bg-slate-50'>
      <p className='text-left text-3xl absolute top-2 left-2'>Notes</p>
      <div className='flex flex-col w-1/4 border-2 shadow-xl p-4 rounded-xl bg-white'>
        <div className='text-center my-4'>
          <p className='text-2xl'>Create your account</p>
        </div>
        <form onSubmit={handleSignup}>
          <div className='my-4'>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} className='border border-black p-2 rounded-full w-full focus:outline-none' autoComplete='off' required></input>
          </div>
          <div className='my-4'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} className='border border-black p-2 rounded-full w-full focus:outline-none' autoComplete='off' required></input>
          </div>
          <Password value={password} onChange={(e) => setPassword(e.target.value)} />
          {isDuplicate && <p className='text-red-700'>This email is already registered</p>}
          <button type='submit' className='p-2 bg-black text-white w-full rounded-full my-4'>Signup</button>
        </form>
        <p>Already have an account? <Link to = '/'><span className='text-blue-700 cursor-pointer'>Login</span></Link></p>
      </div>
    </div>
  )
}

export default Signup