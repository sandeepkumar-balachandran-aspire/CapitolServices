// UserProfile.js
import React, { useEffect, useState } from 'react';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from './authConfig';
import { InteractionRequiredAuthError } from '@azure/msal-browser';
import DefaultLayout from './layout/DefaultLayout';

const UserProfile = () => {
    const { instance, accounts } = useMsal();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            if (accounts.length > 0) {
                try {
                    const response = await instance.acquireTokenSilent({
                        ...loginRequest,
                        account: accounts[0]
                    });
                    const userProfile = await fetch('https://graph.microsoft.com/v1.0/me', {
                        headers: {
                            'Authorization': `Bearer ${response.accessToken}`
                        }
                    }).then(response => response.json());
                    setUser(userProfile);
                } catch (e) {
                    if (e instanceof InteractionRequiredAuthError) {
                        instance.acquireTokenRedirect(loginRequest);
                    }
                }
            }
        };

        fetchUser();
    }, [accounts, instance]);

    const handleLogin = () => {
        instance.loginRedirect(loginRequest);
    };

    return (
        <div>
            {user ? (
                <DefaultLayout/>
                // <div>
                //     <h1>Welcome, {user.displayName}</h1>
                //     <p>Email: {user.mail}</p>
                // </div>
            ) : (
                <button onClick={handleLogin}>Login</button>
            )}
        </div>
    );
};

export default UserProfile;
