import { authModalState } from '@/atoms/authModalAtom';
import React, { useEffect } from 'react';
import {useSetRecoilState} from 'recoil';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import {useState} from 'react'
import { useRouter } from 'next/router';
type LoginProps = {
    
};

const Login:React.FC<LoginProps> = () => {
    const setAuthModalState=useSetRecoilState(authModalState)
    const handleClick=(clickType:'register'|'forgotPassword'|'login')=>{
       setAuthModalState((prev)=>({...prev,type:clickType}))
    }
    const [signInWithEmailAndPassword,user,loading,error,] = useSignInWithEmailAndPassword(auth);
    const [inputs,setInputs]=useState({email:'',password:''});
    const router=useRouter();
    const handleInputChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
     setInputs((prev)=>({...prev,[e.target.name]:e.target.value}));
    }
    
    const handleLogin=async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(!inputs.email || !inputs.password) return alert("Please fill all fields");
    try{
     const newUser= await signInWithEmailAndPassword(inputs.email,inputs.password);
     if(!newUser) return;
     console.log(newUser);
     router.push('/');
    }catch(error:any)
    {
        alert(error.message);
    }
    }
    useEffect(()=>{
        if(error) alert(error.message)
    },[error])
    return (
       <form action="" className="space-y-6 px-6 py-2" onSubmit={handleLogin}>
        <h3 className="text-xl font-medium text-white"> Sign in to CodeHub</h3>
        <div>
            <label htmlFor="email" className='text-sm font-medium block mb-2 text-white'> Your Email</label>
            <input onChange={handleInputChange} type="email" name='email' id='email' className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 
            focus:border-blue-500 bg-gray-600 border-gray-500 placeholder-white text-white w-full h-10 p-2' placeholder='name@gmail.com'/>
        </div>
        <div>
            <label htmlFor="email" className='text-sm font-medium block mb-2 text-white'> Your Password</label>
            <input onChange={handleInputChange} type="password" name='password' id='password' className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 
            focus:border-blue-500 bg-gray-600 border-gray-500 placeholder-white text-white w-full h-10 p-2' placeholder='*********'/>
        </div>
        <button type='submit' className="w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-red-600
        hover:bg-red-500 hover:text-white">{loading?"Logging in..":"Log In"}</button>
        <button className="flex w-full justify-end" onClick={()=>handleClick('forgotPassword')}>
            <a href="#" className="text-sm block text-gray-800 font-medium hover:underline w-full text-right" > Forgot Password?</a>
        </button>
        <div className="text-sm font-medium text-gray-800">
            Not Registered? 
                <a href="#" className='text-blue-700 hover:underline' onClick={()=>handleClick('register')}> Create account</a>
        </div>
       </form>
        )
}
export default Login;