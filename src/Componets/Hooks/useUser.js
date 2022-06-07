import React, { useState, useEffect } from 'react';

const useUser = user => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const email = user?.user?.email;
        const curentUser = { email: email };

        if (email) {
            const url = `https://warm-citadel-67270.herokuapp.com/user/${email}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(curentUser)
            })
                .then(res => res.json())
                .then(result => {
                    const acccessToken = result.token;
                    localStorage.setItem('accessToken', acccessToken);
                    setToken(acccessToken);
                })

        }



    }, [user])

    return [token];

}
export default useUser;