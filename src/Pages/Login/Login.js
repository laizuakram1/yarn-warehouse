import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";
import { signInWithEmailAndPassword, isLoading } from "firebase/auth";
import auth from '../../firebase.init';
import backgrondImg from '../../Images/Slider/loginBg.jpg';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import useToken from '../../Hooks/useToken';


const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [user, loading, error] = useAuthState(auth);
    const [token] = useToken(user || gUser)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";
    let signInError;


    useEffect( () =>{
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if(error || gError){
        signInError= <p className='text-red-500'><small>{error?.message || gError?.message }</small></p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(auth, data.email, data.password);
    }


    return (
        <div style={{ backgroundImage: `url(${backgrondImg})` }} className='py-16 max-h-screen bg-cover'>
            <form onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col w-80 h-96 mx-auto gap-5 p-10 pt-24 shadow-xl rounded relative bg-base-100'>

                <input type="email" placeholder="E-mail" class="input input-bordered input-sm w-full max-w-xs" {...register("email", { required: true })} />
                <input type="password" placeholder="Password" class="input input-bordered input-sm w-full max-w-xs" {...register("password", { required: true })} />

                <div className='flex justify-between items-center'>
                    <input className='btn w-20' type="submit" value='Submit' />

                    <Link className='text-blue-600 hover:link-hover' to='/'>Forgot password?</Link>
                </div>
                <p>New to laizu yarn? <Link className='text-primary hover:link-hover' to='/signup'>Signup</Link></p>

                <div className='social-login w-64 h-20 bg-blue-400 p-3 rounded-md absolute -mt-28'>
                    <div>
                        {signInError}
                        <div>
                            <h2 className='text-center text-2xl font-bold'>Login</h2>
                        </div>
                        <div className='flex flex-col-3 justify-evenly py-3 text-white'>
                            <FaGoogle onClick={()=>signInWithGoogle()} className='hover:text-orange-500 cursor-pointer' />
                            <FaFacebook className='hover:text-orange-500 cursor-pointer' />
                            <FaLinkedin className='hover:text-orange-500 cursor-pointer' />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;