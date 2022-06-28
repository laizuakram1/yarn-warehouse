
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const MyOrders = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/purchase`)
        .then(res => res.json())
        .then(data => setOrders(data));
}, [])

const deleteOrder = (id)=>{
    const proced = window.confirm('sure! cancel your order?');
    
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

      <div class="overflow-x-auto">
  <table class="table table-zebra w-full justify-around">
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