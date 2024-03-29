import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const VisitorMessage = () => {
  const { register, reset, handleSubmit } = useForm();
  const onSubmit = data => {

    fetch(`https://yarn-warehouse-server.onrender.com/message`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        reset();
        toast('message send successful');
      })

  };

  return (
    <div class="hero py-10 bg-purple-100">
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        <div class="hero-content flex-col max-w-sm lg:flex-row-reverse">
          <div class="text-center w-full p-5 lg:text-left">
            <h1 class="text-4xl font-bold">Send your <span className='text-success'>message</span></h1>
            <p class="py-6">Please feel free to send your message for inproving our service and others lake. We are soo happy to visit our website and send you to endless thanks.</p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input {...register("email", { required: true })} type="email" placeholder="email" class="input input-bordered" />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Message</span>
                  </label>
                  <textarea {...register("message", { required: true })} type="text" placeholder="message" class="input input-bordered h-28" />
                </div>
                <div class="form-control mt-6">
                  <button type='submit' class="btn btn-success hover:bg-green-100">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorMessage;