import React from 'react';
import { FaReact, FaCloud, FaRoute, FaCss3Alt } from 'react-icons/fa'; // Updated icons

const Home = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center gap-3 ">
            <h1 className="text-4xl font-bold mb-6">Welcome to WebTree Global</h1>
            <p className="text-xl text-center mb-6">
                This app will fetch data and utilize some packages to provide dynamic content.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Technologies & Dependencies Used:</h2>
            <ul className="list-inside list-disc text-lg space-y-4">
                <li className="flex items-center space-x-3">
                    <FaCloud className="text-2xl" />
                    <span><strong>axios</strong> - A promise-based HTTP client for making requests to external APIs.</span>
                </li>
                <li className="flex items-center space-x-3">
                    <FaReact className="text-2xl" />
                    <span><strong>react</strong> - A JavaScript library for building user interfaces.</span>
                </li>
                <li className="flex items-center space-x-3">
                    <FaReact className="text-2xl" />
                    <span><strong>react-dom</strong> - Provides DOM-specific methods for React.</span>
                </li>
                <li className="flex items-center space-x-3">
                    <FaRoute className="text-2xl" />
                    <span><strong>react-router-dom</strong> - A routing library for handling navigation in React apps.</span>
                </li>
                <li className="flex items-center space-x-3">
                    <FaCss3Alt className="text-2xl" />
                    <span><strong>tailwindcss</strong> - A utility-first CSS framework for styling React components.</span>
                </li>
            </ul>


        </div>
    );
};

export default Home;
