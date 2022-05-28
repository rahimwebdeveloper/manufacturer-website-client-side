import React from 'react';
import { toast } from 'react-toastify';

const ManageOrderRaw = ({ order, refetch }) => {
    const { name, price, userName, phone, email, position, _id, adders } = order;

    const Update = id => {
        fetch(`http://localhost:5000/purchase/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                toast.success('Update Successfully');

            })
    }




    const Delete = id => {
        if ('add') {
            fetch(`http://localhost:5000/purchase/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    toast('Your ')
                    refetch();
                })
        }

    }

    return (
        <tr>
            <td>{userName}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{adders}</td>
            <td>${price}</td>
            <td>{position === 'deliver'
                ?
                <button className='btn' onClick={() => Delete(_id)} > X </button>
                :
                <button onClick={() => Update(_id)} className='btn btn-sm btn-secondary '>Update</button>}</td>

        </tr>
    );
};


export default ManageOrderRaw;