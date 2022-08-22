
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const MyOrders = () => {
  const {user} = useAuthState(auth)
  const [orders, setOrders] = useState([])
  console.log(orders)

  const email = user?.email;

  useEffect(()=>{
    fetch(`http://localhost:5000/purchase/${email}`,{
      method:'GET',

    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
    })
  },[email])


const deleteOrder = (id)=>{
    const proced = window.confirm('are you sure! cancel your order?');
    
    if(proced){
      fetch(`http://localhost:5000/purchase/${id}`,{
        method:'DELETE',

      })
      .then(res =>res.json())
      .then(data =>{
        if(data.deletedCount > 0){
          
          const remainingOrders = orders.filter(order =>order._id !== id)
          setOrders(remainingOrders);
          toast.warn('Order deleted');
        }
      
      })
    }
 }


  
  return (
    <div>

      <div className="overflow-x-auto">
  <table className="table table-zebra w-full justify-around">
    <thead>
      <tr>
        <th></th>
        <th>Product</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
          orders.map((order,index) => 
          <tr>
            <th>{index + 1}</th>
            <td>{order.product}</td>
            <td>{order.quantity}</td>
            <td>{order.price}</td>
            <td><Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs bg-success border-none'>Pay</button></Link></td>
            <td><button onClick={deleteOrder} className='btn btn-xs bg-red-400 border-none'>Cancel</button></td>
          </tr>)
        }
      
    </tbody>
  </table>
</div>
    </div>
  );
};

export default MyOrders;