import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const { user } = useAuthState(auth)
    const { admin } = useAdmin(user)

    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content text-left py-2">
                {/* <!-- Page content here --> */}
                <h2 className='text-3xl font-bold py-5'>Your Dashboard</h2>
                <hr />
                <Outlet />
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 mr-3 overflow-y-auto w-64 bg-green-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li className='hover:link-hover'><Link to='/dashboard/orders'>My orders</Link></li>
                            <li className='hover:link-hover'><Link to='/dashboard/review'>Send Review</Link></li>
                    <li className='hover:link-hover'><Link to='/dashboard/profile'>My Profile</Link></li>

                    {
                        admin && <>
                            <li className='hover:link-hover'><Link to='/dashboard/admin'>Make Admin</Link></li>
                            <li className='hover:link-hover'><Link to='/dashboard/addProduct'>Add new Product</Link></li>
                            <li className='hover:link-hover'><Link to='/dashboard/manageOrders'>Manage all orders</Link></li>

                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;