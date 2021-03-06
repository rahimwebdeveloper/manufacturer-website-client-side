import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';

const Navbar = () => {

    const [user, loading,] = useAuthState(auth);

    if (loading) {
        return <Loading></Loading>
    }
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }

    const manuItems = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/myPortfolio'>My Portfolio</Link></li>
        {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }
        {user ? <button onClick={logout} >Sign Out</button> : <li><Link to='/login'>Login</Link></li>}
    </>
    return (
        <div className='mx-12'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {manuItems}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl"> HOME REPAIR TOOLS</Link>
                </div>
                <div className="navbar-end ">
                    <div className='hidden lg:flex'>
                        <ul className="menu menu-horizontal p-0">
                            {manuItems}
                        </ul>
                    </div>
                    <div className='ml-16'>
                        <label tabIndex="1" htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;