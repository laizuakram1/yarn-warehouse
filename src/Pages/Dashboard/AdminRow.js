import React from 'react';
import { toast } from 'react-toastify';

const AdminRow = ({ user, index, refetch }) => {
    const { email, role } = user;

    const MakeAdmin = ()=>{
        fetch(`https://yarn-warehouse-server.onrender.com/${email}`,{
            method:'PUT',
        })
        .then(res =>res.json())
        .then(data =>{
            if(data.modifiedCount > 0){
                refetch();
               return  toast.success('Admin create successful')
            }
            toast.error('sorry! something went wrong')
        })
    }

    return (
        <tr>
        <th>{index + 1}</th>
        <td>{email}</td>
        <td>{
        role !== 'admin'? <button onClick={MakeAdmin} className='btn btn-xs'>Make Admin</button>
        : <button className='btn btn-xs bg-success border-none'>Admin</button>}</td>
        <td><button className='btn btn-xs bg-red-500 border-none'>Delete</button></td>
        
    </tr>
    );
};

export default AdminRow;