import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Sherad/Loading';
import OrderRow from './OrderRow';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const { data: orders, isLoading, refetch } = useQuery(['orders', user], () => fetch(`https://tranquil-tundra-16871.herokuapp.com/purchase/${user.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken')
            navigate('/')
        }

        return res.json()
    }))

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h1>My order: {orders.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Position</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderRow
                                key={order._id}
                                order={order}
                                refetch={refetch}
                            ></OrderRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;