import React from 'react';
import { FaBookOpen, FaFacebook, FaLinkedin, FaTwitterSquare, FaUserGraduate, FaYoutube, } from 'react-icons/fa';
import { HiMail } from "react-icons/hi";
import userImg from '../../../Images/Slider/main.jpg'



const Portfolio = () => {


    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-10">
            <figure className="px-10 pt-10">
                <div className="avatar online">
                    <div className="w-24 rounded-full">
                        <img src={userImg} alt='user' />
                    </div>
                </div>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Laizu Akram</h2>
                <p><HiMail className='inline mr-2 text-orange-500'></HiMail>laizuakram98@gmail.com</p>
                <p><FaUserGraduate className='inline mr-2 text-orange-500'></FaUserGraduate>Dimploma in Medical Technologist</p>
                <p><FaBookOpen className='inline mr-2 text-orange-500'></FaBookOpen>K.H Memorial health technology Institute</p>
               
            </div>
            <div className="border-opacity-50">
                <div className="divider text-primary">Connect with me</div>
                <div className='flex justify-center items-center h-12  text-xl'>
                   
                  <a href="https://www.facebook.com/profile.php?id=100010547709729" target='blank'> <FaFacebook className='mr-5 hover:text-orange-500'></FaFacebook></a>
                   
                    <FaLinkedin className=' mr-5 hover:text-orange-500'></FaLinkedin>
                    <FaTwitterSquare className='mr-5 hover:text-orange-500'></FaTwitterSquare>
                    <a href="https://www.youtube.com/channel/UCxziMEGWaHSfghDeCPMkIzw" target='blank' > <FaYoutube className='mr-5 hover:text-orange-500'></FaYoutube></a>
                   
                </div>
            </div>
        </div>
    );
};

export default Portfolio;