import React , {useState} from 'react';
import {Link , useNavigate} from 'react-router-dom'

import login from "../assets/Icons/login.png"
import axios from "axios"
function Login() {
    const [email , setemail] = useState('')
    const [pass , setPass] = useState('')
    const nav = useNavigate()

    const submit = async(e) => {
        e.preventDefault()
        try {
           await axios.post("http://localhost:1721/user/login" , {
                email : email,
                password : pass
            } , {
                withCredentials: true,
            });
           setemail('')
           setPass('')

           nav('/dashboard')

        }catch (error) {
    console.log('Status:', error.response?.status)
    console.log('Response:', error.response?.data)
}
    }

    return ( 
        <>
            <div className='min-h-screen bg-linear-to-r from-gray-700 to-gray-900'>
                <div className='flex justify-center py-3'>
                    <div className='color py-3 px-3'>
                       <h1 className="text-3xl font-bold bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            LOGIN
                        </h1>
                    </div>
                </div>
                 <div className=" border border-amber-100 bg-linear-to-r from-gray-700 to-purple-100 backdrop-opacity-20 h-96 mx-auto rounded-2xl w-90 px-3 shadow-2xl">
                        <div className='flex justify-center mt-5'>
                            <div className='h-full w-15 '>
                                <img src={login} alt='login'></img>
                            </div>
                        </div>
                <div className=' h-2/3 w-full flex justify-center mt-7'>
                <form onSubmit={submit}>
                    <input 
                    type='email'
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e)=>setemail(e.target.value)}
                    className='border-white border-2 rounded-xl py-1 text-center w-full bg-linear-to-r from-cyan-200 to-purple-100'
                    
                    >
                    </input>
                    <input 
                    type='password'
                    placeholder='Enter your password'
                    value={pass}
                    onChange={(e)=>setPass(e.target.value)}
                    className='border-white border-2 rounded-xl py-1 text-center mt-2 w-full bg-linear-to-r from-cyan-200 to-purple-200'
                    
                    >
                    </input>
                    <button
                    className='border-white border-2 rounded-xl py-1 text-center mt-4 w-full bg-linear-to-r from-cyan-400 to-purple-500 text-white font-bold'
                    >Login</button>
                    <label className='flex justify-center'>
                        <h6 className='mt-3 bold'>If you are not registered... <Link to={'/'} className='text-orange-500 hover:text-amber-300'> Signup </Link></h6> 
                    </label>
                </form>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Login;