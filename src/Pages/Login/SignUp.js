import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../../firebase.init';
import backgrondImg from '../../Images/Slider/loginBg.jpg';



const SignUp = () => {
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const email = data.email;
        const password = data.password;

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                console.log(user);
                navigate('/')
                // ...
            })
            .catch((error) => {
                const err = error.message;
                console.log(err);
                // ..
            });

    }

    return (
        <div style={{ backgroundImage: `url(${backgrondImg})` }} className='py-16 max-h-screen bg-cover'>
            <form onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col w-80 h-96 mx-auto gap-5 p-10 pt-24 shadow-xl rounded relative bg-base-100'>

                <input type="text" placeholder="Name" class="input input-bordered input-sm w-full max-w-xs" {...register("Name", { required: true })} />
                <input type="email" placeholder="E-mail" class="input input-bordered input-sm w-full max-w-xs" {...register("email", { required: true })} />
                <input type="password" placeholder="Password" class="input input-bordered input-sm w-full max-w-xs" {...register("password", { required: true })} />

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
                                <FaGoogle className='hover:text-orange-500 cursor-pointer' />
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