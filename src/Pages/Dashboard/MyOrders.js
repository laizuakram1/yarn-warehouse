
import React, { useEffect, useState } from 'react';

const MyOrders = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/purchase`)
        .then(res => res.json())
        .then(data => setOrders(data));
}, [])
  
  return (
    <div>
      <h2>my orders:{orders.length}</h2>

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
            <td>{order.status}</td>
            <td><button className='btn btn-xs bg-red-400 border-none'>Delete</button></td>
          </tr>)
        }
      
    </tbody>
  </table>
</div>
    </div>
  );
};

export default MyOrders;