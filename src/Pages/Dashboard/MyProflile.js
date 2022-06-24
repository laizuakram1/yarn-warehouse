import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { AiFillEdit } from "react-icons/ai";




const MyProflile = () => {
    const [user] = useAuthState(auth);
    console.log(user);


    return (
        <div>
            <h2 className='text-xl py-5 text-center font-bold'>My Profile</h2>
            <div class="card w-96 bg-base-100 shadow-xl mx-auto">
                <figure class="px-10 pt-10">
                    <img src={user?.photoURL} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{user?.displayName}</h2>
                    <p>{user?.email}</p>
                    <p>Education:</p>
                    <p>Location:</p>
                    <div class="card-actions">
                    <button class="btn btn-outline btn-success">Update Profile <AiFillEdit className='ps-2 text-xl'></AiFillEdit></button>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProflile;