import React, { useContext } from 'react';
import { Auth } from '../context/auth';
import { Link } from 'react-router-dom';

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
            <Link to={'/card'}>Mes cartes</Link>
        </div>
    );
};

export default Profile;
