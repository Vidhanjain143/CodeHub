import { authModalState } from '@/atoms/authModalAtom';
import { auth, firestore } from '@/firebase/firebase';
import React, { useState,useEffect } from 'react';
import {useSetRecoilState} from 'recoil'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { doc, setDoc } from 'firebase/firestore';

type SignupProps = {
    
};

const Signup:React.FC<SignupProps> = () => {
    const setAuthModalState=useSetRecoilState(authModalState)
    const handleClick=(clickType:'register'|'forgotPassword'|'login')=>{
       setAuthModalState((prev)=>({...prev,type:clickType}))
    }
    const [inputs,setInputs]=useState({email:'',displayName:'',password:''})
    const [createUserWithEmailAndPassword,user,loading,error] = useCreateUserWithEmailAndPassword(auth);
    const router=useRouter();
    const handleChangeInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setInputs((prev)=>({...prev,[e.target.name]:e.target.value}))
    }
    const handleRegister=async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log(inputs);
        if(!inputs.email || !inputs.displayName || !inputs.password) return alert("Please fill all fields");
        try{
         toast.loading("Creating your account",{position:"top-center",toastId:"loadingToast"})
         const newUser=await createUserWithEmailAndPassword(inputs.email,inputs.password); 
         if(!newUser) return;
         const userData={
            uid:newUser.user.uid,
            email:newUser.user.email,
            displayName:inputs.displayName,
            createdAt:Date.now(),
            updatedAt:Date.now(),
            likedProblems:[],
            dislikedProblems:[],
            solvedProblems:[],
            starredProblems:[]
         }
         await setDoc(doc(firestore,"users",newUser.user.uid),userData)
         router.push('/') 
        }catch(error:any)
        {
            toast.error(error.message,{position:'top-center',autoClose:3000,theme:'dark'})
        } finally{
            toast.dismiss("loadingToast")
        }  
    }
    useEffect(() => {
        toast.error(error?.message,{position:'top-center',autoClose:3000,theme:'dark'})
    }, [error])
    
    return (
        <form className="space-y-6 px-6 py-2" onSubmit={handleRegister}>
        <h3 className="text-xl font-medium text-white"> Register to CodeHub</h3>
        <div>
            <label htmlFor="email" className='text-sm font-medium block mb-2 text-white'>Email</label>
            <input onChange={handleChangeInput} type="email" name='email' id='email' className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 
            focus:border-blue-500 bg-gray-600 border-gray-500 placeholder-white text-white w-full h-10 p-2' placeholder='name@gmail.com'/>
        </div>
        <div>
            <label htmlFor="displayName" className='text-sm font-medium block mb-2 text-white'> Display Name</label>
            <input onChange={handleChangeInput} type="displayName" name='displayName' id='displayName' className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 
            focus:border-blue-500  bg-gray-600 border-gray-500 placeholder-white text-white w-full h-10 p-2' placeholder='Vidhan Jain'/>
        </div>
        <div>
            <label htmlFor="email" className='text-sm font-medium block mb-2 text-white'>Password</label>
            <input onChange={handleChangeInput} type="password" name='password' id='password' className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 
            focus:border-blue-500 bg-gray-600 border-gray-500 placeholder-white text-white w-full h-10 p-2' placeholder='*********'/>
        </div>
        <button type='submit' className="w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-red-600
        hover:bg-red-500 hover:text-white">{loading?"Registering":"Register"}</button>
        <div className="text-sm font-medium text-gray-800">
            Already have an account? 
                <a href="#" className='text-blue-700 hover:underline'  onClick={()=>handleClick('login')}> Log In</a>
        </div>
        </form>
    )
}
export default Signup;