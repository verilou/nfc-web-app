import React, { useContext } from 'react';
import { Auth } from '../context/auth';

const Profile = () => {
    const { user } = useContext(Auth);
    return (
        <div>
            {Object.entries(user).map(([key, value]) => {
                if (value.id) {
                    return Object.entries(value).map(([key, value]) => {
                        return (
                            <p key={key}>
                                {key} : {value}
                            </p>
                        );
                    });
                }
                return (
                    <p key={key}>
                        {key} : {value}
                    </p>
                );
            })}
        </div>
    );
};

export default Profile;
