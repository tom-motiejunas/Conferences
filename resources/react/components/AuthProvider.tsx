import {AuthProvider} from 'react-admin';

const authProvider: AuthProvider = {
    login: ({username, password}) => {
        const request = new Request('http://localhost:3001/api/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: new Headers({'Content-Type': 'application/json'}),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(auth => {
                localStorage.setItem('auth', JSON.stringify(auth));
            })
            .catch(() => {
                return Promise.reject();
            });
    },
    logout: () => {
        localStorage.removeItem('auth');
        return Promise.resolve();
    },
    checkAuth: () =>
        localStorage.getItem('auth') ? Promise.resolve() : Promise.reject(),
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('auth');
            return Promise.reject();
        }

        return Promise.resolve();
    },
    getIdentity: () => {
        try {
            const {user} = JSON.parse(localStorage.getItem('auth') || '');
            const {id, username} = user;
            return Promise.resolve({id, username});
        } catch (error) {
            return Promise.reject(error);
        }
    },
    getPermissions: () => Promise.resolve(''),
};

export default authProvider;
