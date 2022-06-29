import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import Footer from '../Shared/Footer';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Purchase = () => {
    const { id } = useParams();
    // const [err, setError] = useState('')
    const [product, setProduct] = useState([]);
    const [user, loading, error] = useAuthState(auth);


    useEffect(() => {
        fetch(`https://protected-journey-61299.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, [id]);

    if(loading){
        return <loading></loading>
    }

    const handleSubmit = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        if (quantity < product.minOrder || quantity > product.quantity) {
            return   toast.error('enter a valid quantity');
        }

        const order = {
            product: product.name,
            quantity,

            price: product.price * quantity,
            client: user?.email,
            clientName: user?.displayName,
            phone: event.target.phone.value,
            status: "pending",
        }

        

        fetch(`https://protected-journey-61299.herokuapp.com/purchase`, {
            method: 'POST',
            headers: {
                 'content-type': 'application/json'
                 },
            body: JSON.stringify(order)
            
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
               
                if (data.result.insertedId) {
                    toast.success("Order Placed Successfully")
                } else {
                    toast.error('Sorry,cannot process the order')
                }
            });

    }

    return (
        <div className='max-h-screen' >
            <h2 className='text-3xl font-bold py-10'><span className='text-success'>Purchase</span> Now</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-1'>
                <div>
                    <form onSubmit={handleSubmit} className='grid  gap-5 px-24 w-full'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name='name' value={user?.displayName} className="input input-bordered" readOnly />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">E-mail</span>
                            </label>
                            <input type="email" name='email' value={user?.email} className="input input-bordered" readOnly />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text" name='porductName' value={product?.name} className="input input-bordered" readOnly />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Order Quantity</span>
                            </label>
                            <input type="number" name='quantity' className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="number" name='phone' placeholder='phone number' className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text" name='address' className="input input-bordered" />
                        </div>


                        {/* <p>{err.message}</p> */}
                             <input className='btn btn-success' type='submit' value='Submit' />
                        
                        
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