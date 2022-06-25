import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaBookOpen, FaFacebook, FaLinkedin, FaTwitterSquare, FaUserGraduate, FaYoutube, } from 'react-icons/fa';
import { HiMail } from "react-icons/hi";
import userImg from '../../../Images/Slider/main.jpg'
import auth from '../../../firebase.init';


const Portfolio = () => {


    return (
        <div class="card w-96 bg-base-100 shadow-xl mx-auto mt-10">
            <figure class="px-10 pt-10">
                <div class="avatar online">
                    <div class="w-24 rounded-full">
                        <img src={userImg} alt='user' />
                    </div>
                </div>
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">Laizu Akram</h2>
                <p><HiMail className='inline mr-2'></HiMail>laizuakram98@gmail.com</p>
                <p><FaUserGraduate className='inline mr-2'></FaUserGraduate>Dimplopa in Medical Technologist</p>
                <p><FaBookOpen className='inline mr-2'></FaBookOpen>K.H Memorial health technology Institute</p>
               
            </div>
            <div class="border-opacity-50">
                <div class="divider text-primary">Connect with me</div>
                <div className='flex justify-center h-10 items-center text-xl'>
                   
                    <FaFacebook className='mr-5 hover:text-orange-500'></FaFacebook>
                    <FaLinkedin className=' mr-5 hover:text-orange-500'></FaLinkedin>
                    <FaTwitterSquare className='mr-5 hover:text-orange-500'></FaTwitterSquare>
                    <FaYoutube className='mr-5 hover:text-orange-500'></FaYoutube>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;