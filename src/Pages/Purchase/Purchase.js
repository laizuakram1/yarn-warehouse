import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Footer from '../Shared/Footer';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Purchase = () => {
    const { id } = useParams();
    const [err, setError] = useState('')
    const [product, setProduct] = useState([]);
    const [user, loading, error] = useAuthState(auth);
   

   
    
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, []);

    const { register, reset, handleSubmit } = useForm();
   
    const onSubmit = Data => {
        const url = ('http://localhost:5000/purchase')
        fetch(url, {
            method:'POST',
            headers:{
                'content-type': "application/json"
            },
            body:JSON.stringify(Data)
        })
        .then(res=>res.json())
        .then(data =>{
            if(data.insertedId){
                toast('Purchase successful')
                reset();
            }
            else{
                toast('sorry! something wrong')
            }
        })
        
    }

    return (
        <div className='max-h-screen' >
            <h2 className='text-3xl font-bold py-10'><span className='text-success'>Purchase</span> Now</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-1'>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className='grid  gap-5 px-24 w-full'>
                        <input type="text" {...register('name', {required:true})}
                          placeholder={user?.displayName || 'Your Name'}
                            class="input input-bordered input-success w-full max-w-xs" />

                        <input type="email" {...register('email', {required:true})}   placeholder={user?.email}
                            class="input input-bordered input-success w-full max-w-xs" />

                        <input type="text" {...register('productName', {required:true})}  placeholder={product.name}
                            class="input input-bordered input-success w-full max-w-xs" />

                        <input type="number" {...register('quantity', {required:true})} placeholder='quantity'
                            class="input input-bordered input-success w-full max-w-xs" />

                        <input type="number" {...register('phone', {required:true})} placeholder="Phone"
                            class="input input-bordered input-success w-full max-w-xs" />

                        <input type="text" {...register('address', {required:true})} placeholder="Address"
                            class="input input-bordered input-success w-full max-w-xs" />
                        <p>{err.message}</p>

                        <div className='justify-center'>
                           <input className='btn btn-success' type='submit' value='Submit'/>
                        </div>
                    </form>
                </div>
                <div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={product.img} alt="product" /></figure>
                        <div class="card-body text-left">
                            <h2 class="card-title">Name:{product.name}</h2>
                            <p className='font-bold'>Price:${product.price}</p>
                            <p>available quantity: {product.quantity}/Role</p>
                            <p>Description:{product.description}</p>

                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Purchase;