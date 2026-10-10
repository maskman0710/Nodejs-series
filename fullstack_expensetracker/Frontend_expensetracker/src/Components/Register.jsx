import React , {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import signup from "../assets/Icons/signup.png"
import axios from 'axios'
function Register() {
    const [name , setname] = useState('')
    const [email , setemail] = useState('')
    const [pass , setPass] = useState('')
    const nav = useNavigate()

    const submit = async(e) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:1721/user/signup" , {
                name : name,
                email : email,
                password : pass
            });
            setname('')
            setemail('')
            setPass('')

            nav('/login')
            
            

        } catch (error) {
            alert("All fields are required")
            console.log(error)
        }
        
    }

    return ( 
        <>
            <div className='min-h-screen bg-linear-to-r from-gray-700 to-gray-900'>
                <div className='flex justify-center py-3 items-center'>
                    <div className='color py-3 px-3'>
                       <h1 className="text-3xl font-bold bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            REGISTER YOURSELF
                        </h1>
                    </div>
                </div>
                <div className=" border border-amber-100 bg-linear-to-r from-gray-700 to-purple-100 backdrop-opacity-20 h-96 mx-auto rounded-2xl w-90 px-3 shadow-2xl">
                    <div className='flex justify-center mt-5'>
                        <div className='h-full w-15 '>
                    <img src={signup} alt='signup'></img>
                </div>
                    </div>
                
                <div className=' h-2/3 w-full flex justify-center mt-7'>
                
                <form onSubmit={submit}>
                    <input 
                    type='text'
                    placeholder='Enter your name*'
                    value={name}
                    onChange={(e)=>setname(e.target.value)}
                    className=' border-white border-2 rounded-xl py-1 text-center w-full bg-linear-to-r from-cyan-200 to-purple-100'
                    >
                    </input>
                    <input 
                    type='email'
                    placeholder='Enter your email*'
                    value={email}
                    onChange={(e)=>setemail(e.target.value)}
                    className=' border-white border-2 rounded-xl py-1 text-center mt-2 w-full bg-linear-to-r from-cyan-200 to-purple-200'
                    
                    >
                    </input>
                    <input 
                    type='password'
                    placeholder='Enter your password*'
                    value={pass}
                    onChange={(e)=>setPass(e.target.value)}
                    className=' border-white border-2 rounded-xl py-1 text-center mt-2 w-full bg-linear-to-r from-cyan-200 to-purple-200'
                    
                    >
                    </input>
                    <button
                    className=' border-white border-2 rounded-xl py-1 text-center mt-4 w-full bg-linear-to-r from-cyan-400 to-purple-500 text-white font-bold'
                    >Register</button>
                    <label>
                        <h6 className='mt-3'>If you are already registered Please <Link to={'/login'} className='text-orange-500 hover:text-amber-300'> Login </Link></h6> 
                    </label>
                </form>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Register;