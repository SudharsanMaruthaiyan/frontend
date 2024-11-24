import React, { useState } from 'react'

const Login = () => {
  const [state, setState] = useState('Sign Up');
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [name,setName] = useState('')

  const onSubmitHandler = (e)=>{
   e.preventDefault();
  }
  
  return (
    <form className=' min-h-[80vh] flex items-center'>
      <div className=' flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
         <p className=' text-2xl font-semibold'>{state === 'Sign Up' ? "Creat Account" : "Login"}</p>
         <p >Please {state === 'Sign Up' ? "sign up" : "log in"} up to book appointment</p>
         {
            state === "Sign Up" &&  <div className=' w-full'>
            <p>Full Name</p>
            <input className=' border border-zinc-300 rounded-lg w-full p-2 mt-1' type="text" onChange={(e)=> setName(e.target.value)} value={name} required/>
         </div> 

         }
         
         <div className=' w-full'>
            <p>Email</p>
            <input className=' border border-zinc-300 rounded-lg w-full p-2 mt-1' type="email" onChange={(e)=> setEmail(e.target.value)} value={email} required/>
         </div>
         <div className=' w-full'>
            <p>Password</p>
            <input className=' border border-zinc-300 rounded-lg w-full p-2 mt-1' type="password" onChange={(e)=> setPassword(e.target.value)} value={password} required/>
         </div>
         <button className=' bg-primary w-full text-white py-2 rounded-md text-base'>{state === 'Sign Up' ? "Creat Account" : "Login"}</button>
         {
            state === "Sign Up" ?
            <p >Already have an account? <span onClick={()=>setState("Login")} className=' text-primary underline cursor-pointer'>Login here</span> </p> 
            :
            <p >Create an new account ? <span onClick={()=>setState("Sign Up")} className=' text-primary underline cursor-pointer'>click here</span></p>
         }
      </div>
    </form>
  )
}

export default Login