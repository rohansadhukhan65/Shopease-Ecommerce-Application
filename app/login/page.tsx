import { CartIcon } from '@/components/Icons'
import Nav from '@/components/Nav'
import React from 'react'

const Login = () => {
  return (
    <>
<Nav/>    

    <div className='h-[80dvh] w-full flex justify-center items-center'>
      <div className=''>
        <p className='flex text-black font-bold items-center gap-2'> <span className='text-2xl'>Login</span>  <span className='bg-primary rounded-md -rotate-12'><CartIcon/></span> </p>

        <div className='flex flex-col gap-5 mt-5'>
            <input type="text" placeholder='Enter email ......' className='rounded-md py-1 px-3 outline-none border' />
            <input type="text" placeholder='Enter password ......' className='rounded-md py-1 px-3 outline-none border' />

            <button type='button' className='w-full bg-primary font-bold text-font-primary hover:bg-blue-700 rounded-md py-1 px-3'>Login</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login
