import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Sherad/Loading';
import UserRow from './UserRaw';


const ManageUsers = () => {
    
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: 'GET',
        headers:{
            authorization : `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    console.log(users)
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2>User All: {users?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UserRow
                            key={user._id}
                            user={user}
                            refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;