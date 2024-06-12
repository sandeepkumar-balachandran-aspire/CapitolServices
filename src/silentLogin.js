// SilentLogin.js
import React, { useEffect, useState } from 'react';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from './authConfig';
import { InteractionRequiredAuthError } from '@azure/msal-browser';
import DefaultLayout from './layout/DefaultLayout';

const SilentLogin = () => {
    const { instance, accounts } = useMsal();
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const performSSOSilent = async () => {
            try {
                const response = await instance.ssoSilent({
                    ...loginRequest,
                    loginHint: accounts[0]?.username || ""
                });
                const userProfile = await fetch('https://graph.microsoft.com/v1.0/me', {
                    headers: {
                        'Authorization': `Bearer ${response.accessToken}`
                    }
                }).then(response => response.json());
                setUser(userProfile);
            } catch (e) {
                if (e instanceof InteractionRequiredAuthError) {
                    setError('Interaction required');
                } else {
                    setError('Silent login failed');
                }
            }
        };

        if (accounts.length > 0) {
            performSSOSilent();
        }
    }, [accounts, instance]);

    return (
        <div>
            {error && <div>Error: {error}</div>}
            {user ? (
                <DefaultLayout/>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default SilentLogin;
