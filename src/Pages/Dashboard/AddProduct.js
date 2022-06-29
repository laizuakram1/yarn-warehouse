import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        fetch(`https://protected-journey-61299.herokuapp.com/product`,{
            method:`POST`,
            headers:{
                'content-type':'application/json',
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log('send data successful')
        })
    };
    return (
        <div className='mx-auto w-96'>

            <form onSubmit={handleSubmit(onSubmit)} >
                <h2 className='text-2xl font-bold text-center py-3'>Add new <span className='text-success'>Product</span></h2>
                <div className='grid grid-cols-1 gap-3'>
                    <input
                        {...register("img", { required: true })} type="text" placeholder="Image Url" class="input input-bordered input-md w-full max-w-xs" />
                    <input
                        {...register("name", { required: true })} type="text" placeholder="Product Name" class="input input-bordered input-md w-full max-w-xs" />
                    <input
                        {...register("price", { required: true })} type="number" placeholder="price" class="input input-bordered input-md w-full max-w-xs" />
                    <input
                        {...register("quantity", { required: true })} type="number" placeholder="available quantity" class="input input-bordered input-md w-full max-w-xs" />
                    <input
                        {...register("minOrder", { required: true })} type="number" placeholder="min order" class="input input-bordered input-md w-full max-w-xs" />
                    <input
                        {...register("description", { required: true })} type="text" placeholder="Description" class="input input-bordered input-md w-full max-w-xs" />


                    <input type="submit" value='Add' className='btn btn-success w-80' />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;