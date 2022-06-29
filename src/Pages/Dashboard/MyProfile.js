import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";






const MyProfile = () => {
    const [user] = useAuthState(auth);
    const email = user.email;

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
       
        fetch(`https://protected-journey-61299.herokuapp.com/profile/${email}`,{
            method:'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify({data})
        })
        .then(res => res.json())
        .then(Resdata => console.log(Resdata))
    
    };

    return (

        <div class="hero min-h-screen bg-base-200">
            
            <div class="hero-content flex-col lg:flex-row-reverse">
                
                <form onSubmit={handleSubmit(onSubmit)} >
                <h2 className='text-2xl font-bold text-center py-3'>Update <span className='text-success'>Profile</span></h2>
               <div className='grid grid-cols-1 gap-2'>
               <input 
                {...register("image", {required:true})} type="text" placeholder="Image Url" class="input input-bordered input-md w-full max-w-xs" />
               <input 
                {...register("name", {required:true})} type="text" placeholder="Name" class="input input-bordered input-md w-full max-w-xs" />
                <input 
                {...register("email", {required:true})} type="email" placeholder="E-mail" class="input input-bordered input-md w-full max-w-xs" />
                <input 
                {...register("education", {required:true})} type="text" placeholder="Education" class="input input-bordered input-md w-full max-w-xs" />
                <input 
                {...register("location", {required:true})} type="text" placeholder="Location" class="input input-bordered input-md w-full max-w-xs" />
                <input 
                {...register("phone", {required:true})} type="number" placeholder="Phone Number" class="input input-bordered input-md w-full max-w-xs" />

                    <input type="submit" className='btn btn-success' />
               </div>
                </form>


                <div>
                    <div class="card w-80 bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={user?.photoURL} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">{user?.displayName}</h2>
                            <p>{user?.email}</p>
                            <p>Education:</p>
                            <p>Location:</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default MyProfile;