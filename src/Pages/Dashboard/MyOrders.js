import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
   
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [purchases, setPurchases] = useState([]);
    console.log(purchases);
    

    useEffect(() => {
        if(user){
            fetch(`http://localhost:5000/purchase?email=${user?.email}`,{
                method:'GET',
               
            })
            .then(res => res.json())
            .then(data => setPurchases(data))
        }
       
    }, [user])



    return (
        <div>
            <h2>My orders: {purchases.length}</h2>
            <div class="overflow-x-auto">
  <table class="table table-zebra w-full">
    {/* <!-- head --> */}
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
      {/* <!-- row 1 --> */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      {/* <!-- row 2 --> */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* <!-- row 3 --> */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;