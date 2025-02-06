import React from 'react';
import { FaSpinner } from 'react-icons/fa'; // Importing a spinning icon from react-icons

const Loading = () => {
    return (
        <div className="">
            <h1 className='text-white text-4xl w-auto m-auto text-bold'>Fetching api</h1>
            <div className="flex items-center space-x-6">
                <FaSpinner className="text-white text-6xl animate-spin" />
            </div>
        </div>
    );
};

export default Loading;
