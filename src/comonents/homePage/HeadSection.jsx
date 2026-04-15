import React from 'react';

const HeadSection = () => {
    return (
        <div className='text-center space-y-2 container p-4 mx-auto'>
            <h2 className='text-3xl font-bold'>Friends to keep close in your life</h2>
            <p className='text-lg text-gray-600'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <button className='bg-[#244D3F] hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
                + Add Friend
            </button>
        </div>
    );
};

export default HeadSection;