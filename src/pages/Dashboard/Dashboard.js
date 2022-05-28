import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {

    // const [user] = useAuthState(auth);
    const user = true ;
    // const [admin] = useAdmin(user);
    const admin = true ;

    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content lg:mt-6 lg:ml-6">
                <Outlet />

                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Profile</Link></li>
                    {
                        user && 
                        <>
                        <li><Link to="/dashboard/myOrder">My Order</Link></li>
                        <li><Link to="/dashboard/review">Add Review</Link></li>
                        </>
                    }
                    {
                        user && 
                        <>
                        <li><Link to="/dashboard/addProduct">Add Product</Link></li>
                        <li><Link to="/dashboard/manageProduct">Manage Product</Link></li>
                        <li><Link to="/dashboard/manageOrder">Manage Order</Link></li>
                        <li><Link to="/dashboard/addProduct">Make Admin</Link></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;