import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const VisitorMessage = () => {
    const { register,reset,  handleSubmit } = useForm();
  const onSubmit = data => {

    fetch(`http://localhost:5000/message`,{
        method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data =>{
        reset();
        toast('message send successful');
    })
   
  };

    return (
        <div class="hero min-h-screen bg-purple-100">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Send your message</h1>
            <p class="py-6">Please feel free to send your message for inproving our service and others lake. We are soo happy to visit our website and send you to endless thanks.</p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input {...register("email", { required: true})} type="email"  placeholder="email" class="input input-bordered" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Message</span>
                </label>
                <textarea {...register("message", { required: true})} type="text" placeholder="message" class="input input-bordered h-28" />
              </div>
              <div class="form-control mt-6">
                <button type='submit' class="btn btn-success">Submit</button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default VisitorMessage;