import React, { memo } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaUser } from 'react-icons/fa';

const UserCard = (props) => {
    return (
        <>
            <div className="w-full md:w-2/3 h-auto bg-gray-200 p-6 rounded-lg shadow-lg flex items-center justify-between space-x-12">
                {/* Image Section */}
                <div className="flex-shrink-0 w-1/3">
                    <img
                        src={props.ime || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNSgGbqmow7OzxHkEu_F2x9Z91uA61XZaEHg&s"}
                        alt="User"
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>

                {/* User Info Section */}
                <div className="flex flex-col space-y-4 w-2/3">
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center space-x-2">
                        <FaUser className="text-blue-500" />
                        <span>{props.title} {props.name}</span>
                    </h2>

                    <p className="text-gray-600 flex items-center space-x-2">
                        <span>Gender:</span>
                        <span>{props.gender}</span>
                    </p>

                    <p className="text-gray-600 flex items-center space-x-2">
                        <FaEnvelope className="text-blue-500" />
                        <a href={`mailto:${props.email}`} className="text-blue-500 hover:underline">{props.email}</a>
                    </p>

                    <p className="text-gray-600 flex items-center space-x-2">
                        <FaPhoneAlt className="text-blue-500" />
                        <span>{props.phone}</span>
                    </p>

                    <p className="text-gray-600 flex items-center space-x-2">
                        <FaMapMarkerAlt className="text-blue-500" />
                        <span>{props.city}, {props.state}, {props.country}</span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default memo(UserCard);
