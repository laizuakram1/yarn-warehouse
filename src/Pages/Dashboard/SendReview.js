
import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const SendReview = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        fetch(`http://localhost:5000/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('send review');
            })
    }; 

    return (
        <div class="mockup-phone mt-5">
            <div class="camera"></div>
            <div class="display">
                <div class="artboard artboard-demo phone-1">

                    {/* review section */}
                    <div class="hero min-h-screen bg-base-200">
                        <div class="hero-content flex-col lg:flex-row-reverse">

                            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <form onSubmit={handleSubmit(onSubmit)} class="card-body">
                                    <div class="form-control">
                                        <textarea {...register("comment", { required: true, maxLength: 200 })} type="text" placeholder="Your opinion"
                                            class="input input-bordered h-20" />
                                    </div>
                                    <div class="form-control">
                                        <label>
                                            <p className='font-bold py-2'>Raings</p>
                                        </label>
                                    <input {...register("rating", { required: true,})} type='number' placeholder="rating in 5" class="input input-bordered w-full max-w-xs" />
                                    </div>
                                    <div class="form-control mt-6">
                                        <button type='submit' class="btn btn-success hover:bg-green-200">Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SendReview;