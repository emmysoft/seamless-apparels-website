import React, { useState } from 'react'
import H2 from '../../components/tags/h2';
import P from '../../components/tags/p';
import IconButton from '../../components/buttons/IconButton';
import TextInput from '../../components/inputs/TextInput';
import Checkbox from '../../components/inputs/Checkbox';
import Button from '../../components/buttons/Button';

const Auth = () => {

    const [isSignUp, setIsSignUp] = useState(false);

  return (
    <main className='flex h-[100vh]'>
        <section className='flex-1 flex-col'>
            <div className="flex items-center gap-2">
                <img src="/icons/logo.png" alt="" className="" />
                <h2 className='font-bold text-[22px]'>SEAMLESS APPARREL</h2>
            </div>

            <div className="flex flex-col justify-center items-center mx-auto mt-4 gap-4">
                <H2 className='text-4xl font-[500]' text={`${isSignUp ? 'Create your account' : 'Login your account'}`}/>
                <P className='text-Black font-[400]' text={`${isSignUp ? 'Let’s get started' : 'Welcome back!'}`}/>

                { isSignUp &&
                    <IconButton/>
                }

                <form action="" className="flex flex-col mt-5 gap-3 p-4">
                    { isSignUp &&
                        <TextInput label='Name' type='text' placeholder='First Name and Last Name' img='/auth/username.svg'/>
                    }
                    <TextInput label='Email' type='email' placeholder='Email Address' img='/auth/username.svg'/>
                    <TextInput label='Password' type='password' placeholder='Password' img='/auth/password.svg'/>

                    <div className="flex flex-col items-center justify-center mt-4 gap-3">
                        {isSignUp &&
                            <Checkbox/>
                        }
                        <Button className='w-full' text={`${isSignUp ? 'Sign Up': 'Sign In'}`}/>
                        <div className="flex items-center gap-2">
                            <p className=''>{isSignUp ? 'Already have an account?': "Don't have an account?"}</p>
                            <span className="cursor-pointer text-[#2856ED]" onClick={() => setIsSignUp(!isSignUp)}>{isSignUp ? 'Sign In': 'Create an account'}</span>
                        </div>
                    </div>
                </form>
            </div>
        </section>

        <section className='hidden md:flex flex-1 relative w-full h-full'>
            <div className="flex items-center justify-between w-full absolute px-6 py-2">
                <span className="font-[600] text-White text-[48px]">FASHION</span>
                <span className="font-[600] text-White text-[48px]">WEARS</span>
            </div>
             <img src="/img/cover-pic.png" alt="" className="h-fit w-full" />
        </section>
    </main>
  )
}

export default Auth;
