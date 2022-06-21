import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div class="navbar bg-base-200">
            <div class="flex-1 w-100">
                <Link className='text-3xl font-bold' to='/'>
                   Laizu Yarn
                </Link>
            </div>
            <ul class="menu menu-vertical lg:menu-horizontal bg-base-100 rounded-box mr-2">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/about'>About</Link></li>
                
            </ul>
            <div class="flex-none gap-2">
                <div class="form-control">
                    <input type="text" placeholder="Search" class="input input-bordered" />
                </div>
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=33791" />
                        </div>
                    </label>
                    <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a class="justify-between">
                                Profile
                                <span class="badge">New</span>
                            </a>
                        </li>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;