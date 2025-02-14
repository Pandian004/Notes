import React, {useState} from 'react';
import Password from '../Components/input/Password.js';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { Toaster, toast } from 'sonner';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('')
  const navigate = useNavigate();

  function handleLogin(e){
    e.preventDefault();
    axios.post('http://localhost:5000/login', {email, password}, {withCredentials: true})
    .then(res => {console.log(res)
      if(res.status === 200){
        toast.success("Login Success")
        navigate('/home')
        setErr('')
      }
    })
    .catch(err => {console.log(err)
      setErr(err.response.data)
      toast.error("Login failed")
    });

  }

  return (
    <div className='h-screen flex justify-center items-center bg-slate-50'>
      <p className='text-left text-3xl absolute top-2 left-2'>Notes</p>
      <Toaster richColors pauseWhenPageIsHidden />
      <div className='flex flex-col w-1/4 border-2 shadow-xl p-4 rounded-xl bg-white'>
        <div className='text-center my-4'>
          <p className='text-2xl'>Welcome back!</p>
        </div>
        <form onSubmit={handleLogin}>
          <div className='my-4'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} className='border border-black p-2 rounded-full w-full focus:outline-none' autoComplete='off' required></input>
          </div>
          <Password value={password} onChange={(e) => setPassword(e.target.value)} />
          <p className='text-red-600'>{err}</p>
          <button type='submit' className='p-2 bg-black text-white w-full rounded-full my-4'>Login</button>
        </form>
        <p>Dosen't have an account? <Link to = '/signup'><span className='text-blue-700 cursor-pointer'>Signup</span></Link></p>
      </div>
    </div>
  )
}

export default Login