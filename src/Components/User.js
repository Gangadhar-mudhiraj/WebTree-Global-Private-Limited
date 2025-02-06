import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './Loading';
import UserCard from './UserCard';

const User = () => {

    const [user, setUser] = useState(null);

    const REACT_APP_RANDOM_USER_API = "https://randomuser.me/api/?page=1&results=1&seed=abc";

    useEffect(() => {

        (async () => {
            try {
                const res = await axios.get(REACT_APP_RANDOM_USER_API);


                setUser(res.data.results[0]);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        })();
    }, []);

    return (
        <>
            <div className="w-screen h-screen flex flex-column justify-center items-center bg-gray-900">
                {user ? (

                    <UserCard
                        image={user.picture.large}
                        title={user.name.title}
                        name={`${user.name.first} ${user.name.last}`}
                        gender={user.gender}
                        email={user.email}
                        phone={user.phone}
                        city={user.location.city}
                        state={user.location.state}
                        country={user.location.country}
                    />
                ) : (
                    <Loading />
                )}
            </div>
        </>
    );
};

export default User;
