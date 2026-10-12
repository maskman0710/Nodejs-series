import React , {useState , useEffect} from 'react';
import Logo from '../assets/Icons/Logo.png'
import axios from "axios"
import { Link, useNavigate} from 'react-router-dom';

function Dashboard() {
        const [name , setname] = useState('')
        const navi = useNavigate()
        const display = async() => {
            try {
                const response = await axios.get("http://localhost:1721/user/me" , {
                  
            withCredentials: true,
                })
                setname(response.data.user.name)
            } catch (error) {
    console.log("Error message:", error.message)
    console.log("Status code:", error.response?.status)
    console.log("Backend response:", error.response?.data)
}
        }
        useEffect(()=>{
            display()
        },[])

        const submission = () => {
            navi('/login')
        }
    return (  
        <>
       
        <div className='min-h-screen bg-linear-to-r from-gray-700 to-gray-900'>
             <nav className=' h-10 flex justify-between bg-gray-500 '>
            <div className='w-10 h-10 ml-1'>
                <img src={Logo} alt='Logo' className='h-full w-full'></img>
            </div>
            <div>   
                 <h1 className="text-amber-200 mt-0.5 bold text-3xl">
                    {name ? `Welcome, ${name}!` : 'Dashboard'}
                </h1>
            </div>
            <div className='px-3 py-1'>
                <button className='h-7 w-20 backdrop-blur-2xl bg-amber-700 hover:bg-amber-900 rounded-lg text-white'
                onClick={submission}>
                    Logout
                </button>
            </div>
        </nav>
        
        </div>
        </>

    );
}

export default Dashboard;