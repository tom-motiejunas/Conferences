import * as React from 'react';
import {ForwardedRef, forwardRef} from 'react';
import {useLogout, useRedirect} from 'react-admin';
import MenuItem from '@mui/material/MenuItem';
import LoginIcon from '@mui/icons-material/PowerSettingsNew';
import LogoutIcon from '@mui/icons-material/ExitToApp';
import checkAuth from "../../util/checkAuth";

const MyLogoutButton = forwardRef((props, ref: ForwardedRef<any>) => {
    const redirect = useRedirect();
    const logout = useLogout();

    const handleLogin = () => redirect('/login');
    const handleLogout = () => logout();

    function renderLoginAndLogout() {
        return checkAuth() ? (
            <MenuItem ref={ref} onClick={handleLogout}>
                <LogoutIcon/>
                Logout
            </MenuItem>
        ) : (
            <MenuItem ref={ref} onClick={handleLogin}>
                <LoginIcon/>
                Login
            </MenuItem>
        );
    }

    return (
        <>
            {renderLoginAndLogout()}
        </>
    );
});

export default MyLogoutButton;
