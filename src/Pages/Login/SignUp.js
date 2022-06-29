import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import backgrondImg from '../../Images/Slider/loginBg.jpg';
import useToken from '../../Hooks/useToken';




const SignUp = () => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    let signInError;
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user || gUser);


    if (loading || gLoading || updating) {
        return <loading></loading>
    }
    if (error || gError || updateError) {
        signInError = (<p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>)
    }

    if (token) {
        navigate('/')
    }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(auth, data.email, data.password);
        await updateProfile({ displayName: data.name });
    }

    return (
        <div style={{ backgroundImage: `url(${backgrondImg})` }} className='py-16 max-h-screen bg-cover'>
            <form onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col w-80 h-96 mx-auto gap-1 p-10 pt-24 shadow-xl rounded relative bg-base-100'>

                <div>
                    <input type="text" placeholder="Name" class="input input-bordered input-sm w-full max-w-xs" {...register("name", {
                        required: {
                            value: true,
                            message: 'Name is Required'
                        }
                    })} />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

               <div>
               <input type="email" placeholder="E-mail" class="input input-bordered input-sm w-full max-w-xs" {...register("email", {
                    required: {
                        value: true,
                        message: 'email is Required'
                    },
                    pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: 'Provide a valid Email'
                    }

                })}
                />
                <label className="label">
                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                </label>
               </div>
                
                <div>
                <input type="password" placeholder="Password" class="input input-bordered input-sm w-full max-w-xs" {...register("password", {
                    required: {
                        value: true,
                        message: 'Name is Required'
                    },
                    minLength: {
                        value: 6,
                        message: 'Must be 6 characters or longer'
                    }
                })} />
                <label className="label">
                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                </label>
                </div>

               

                {signInError}

                <div className='flex justify-between items-center'>
                    <input className='btn w-20' type="submit" value='Submit' />
                    <Link className='text-blue-600 hover:link-hover' to='/'>Forgot password?</Link>
                </div>
                <p>Already have an account? <Link to='/login' className='text-primary hover:link-hover' >Login</Link></p>

                <div className='social-login w-64 h-20  bg-blue-400 p-3 rounded-md absolute -mt-28'>
                    <div>
                        <div>
                            <h2 className='text-center text-2xl font-bold'>SignUp</h2>
                        </div>
                        <div className='flex flex-col-3 justify-evenly py-3 text-white'>
                            <FaGoogle onClick={() => signInWithGoogle()} className='hover:text-orange-500 cursor-pointer' />
                            <FaFacebook className='hover:text-orange-500 cursor-pointer' />
                            <FaLinkedin className='hover:text-orange-500 cursor-pointer' />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;