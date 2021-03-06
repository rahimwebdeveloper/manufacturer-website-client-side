import React from 'react';

const Contact = () => {
    return (
        <div className='bg-base-300 my-20 sm:p-3 lg:p-10'>
            <h2 className="text-3xl mb-3 text-white font-bold text-center">Contact Me</h2>
            <form >
                <input type="text" placeholder="Email" className=" mb-3 input input-bordered input-primary block mx-auto w-full max-w-xs" />
                <input type="text" placeholder="Subject" className=" mb-3 input input-bordered input-primary block mx-auto w-full max-w-xs" />
                <textarea type="text" placeholder="Your Message" className=" mb-3 input block mx-auto input-bordered input-primary w-full max-w-xs h-20" />
                <input type="submit" value="Send" className=" mb-3 input block mx-auto btn btn-primary  input-primary w-full max-w-xs" />

            </form>
        </div>
    );
};

export default Contact;