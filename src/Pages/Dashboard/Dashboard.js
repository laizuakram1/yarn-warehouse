import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user, loading, error] = useAuthState(auth);
    
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content text-left py-2">
                {/* <!-- Page content here --> */}
                <h2 className='text-3xl font-bold'>Your Dashboard</h2>
                <hr />
                <Outlet/>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard/orders'>My orders</Link></li>
                    <li><Link to='/dashboard/review'>Send Review</Link></li>
                    
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;