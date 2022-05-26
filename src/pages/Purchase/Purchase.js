import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { purchaseId } = useParams();
    const [tool, setTool] = useState({})
    const user = {
        name: "abdur rahim",
        email: "rahim@gamil.com"
    };

    useEffect(() => {
        fetch(`http://localhost:5000/tools/${purchaseId}`)
        .then(res => res.json())
        .then(data => {
            setTool(data)
        })
    },[])


    const { name, available_quantity, price } = tool;

    // use rect from hook
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };


    return (
        <div className="hero min-h-screen ">
            <div className="hero-content w-full">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-3xl text-center  font-bold"> Purchase Tool</h1>
                        <form  onSubmit={handleSubmit(onSubmit)}>

                            <div class="form-control mb-3">
                                <input type="text"
                                    value={user?.name}
                                    disabled
                                    className="input input-bordered w-full"
                                    {...register("userName")} />
                            </div>

                            <div class="form-control mb-3">
                                <input type="email"
                                    value={user?.email}
                                    disabled
                                    className="input input-bordered"
                                    {...register("email")} />
                            </div>
                            <div class="form-control">
                                <input type="text"
                                    value={name}
                                    disabled
                                    className="input input-bordered w-full "
                                    {...register("name")} />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Available Quantity: {available_quantity}</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Minimum Order Quantity  100"
                                    className="input input-bordered w-full "
                                    {...register("quantity", {
                                        required: {
                                            value: true,
                                            message: "Quantity is Required"
                                        },
                                        min: {
                                            value: 100,
                                            message: 'Minimum Order Quantity  100'
                                        },
                                        max: {
                                            value: `${available_quantity}` ,
                                            message: 'This Quantity is Not available'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                                    {errors.quantity?.type === 'min' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                                    {errors.quantity?.type === 'max' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                                </label>
                            </div>

                            <div className="form-control ">
                                <input
                                    type="text"
                                    placeholder="Adders"
                                    className="input input-bordered w-full"
                                    {...register("adders", {
                                        required: {
                                            value: true,
                                            message: "Adders is Required"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.adders?.type === 'required' && <span className="label-text-alt text-red-500">{errors.adders.message}</span>}
                                </label>
                            </div>
                            <div className="form-control">
                                <input
                                    type="number"
                                    placeholder="Phone Number"
                                    className="input input-bordered w-full"
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: "Phone Number is Required"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                                </label>
                            </div>

                            <input className='btn btn-primary  mt-2 p-0 w-full' type="submit" value="Purchase Naw" />
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Purchase;