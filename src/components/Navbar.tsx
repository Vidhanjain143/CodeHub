import { authModalState } from '@/atoms/authModalAtom';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {useSetRecoilState} from 'recoil';

type NavbarProps = {
    
};

const Navbar:React.FC<NavbarProps> = () => {
    const setAuthModalState=useSetRecoilState(authModalState)
    const handleClick=()=>{
        setAuthModalState((prev)=>({...prev,isOpen:true}))
    }
    return (
    <div className="flex items-center justify-between sm:px-12 px-2 md:px-24">
        <Link href="/" className='flex items-center justify-centerh-20'>
        <Image src="/logo-full.png" alt="CodeHub" className='h-20' width={220} height={50}/>
        </Link>
        <div className="flex items-center">
            <button className="bg-brand-red h-[35px] text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium
            hover:text-brand-red hover:bg-white hover:border-2 hover:border-brand-red border-2 border-transparent
            transition duration-300 ease-in-out" onClick={handleClick}> Sign In</button>
        </div>
    </div> 
    )
}
export default Navbar;