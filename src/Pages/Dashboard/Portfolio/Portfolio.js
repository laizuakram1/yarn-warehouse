import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaBookOpen, FaFacebook, FaLinkedin, FaUserGraduate, FaYoutube } from 'react-icons/fa';
import auth from '../../../firebase.init';


const Portfolio = () => {
    const [user] = useAuthState(auth);

    return (
        <div class="card w-96 bg-base-100 shadow-xl mx-auto mt-10">
            <figure class="px-10 pt-10">
                <div class="avatar online">
                    <div class="w-24 rounded-full">
                        <img src={user?.photoURL} alt='user' />
                    </div>
                </div>
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{user?.displayName}</h2>
                <p>{user?.email}</p>
                <p><FaUserGraduate className='inline mr-2'></FaUserGraduate>Dimplopa in Medical Technologist</p>
                <p><FaBookOpen className='inline mr-2'></FaBookOpen>K.H Memorial health technology Institute</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
            <div class="border-opacity-50">
                <div class="divider">Connect with me</div>
                <div class="grid grid-cols-3 h-20 card bg-base-300 rounded-box place-items-center justify-evenly text-xl ">
                    <FaFacebook className='hover:text-orange-500'></FaFacebook>
                    <FaLinkedin className='hover:text-orange-500'></FaLinkedin>
                     <FaYoutube className='hover:text-orange-500'></FaYoutube>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;