import {Layout, UserMenu, AppBar, CoreLayoutProps} from "react-admin";
import * as React from "react";
import LoginLogoutButton from "./LoginLogoutButton";

const MyUserMenu = () => <UserMenu><LoginLogoutButton/></UserMenu>;

const UserAppBar = () => <AppBar userMenu={<MyUserMenu/>}/>;

const UserLayout = (props: CoreLayoutProps) => <Layout {...props} appBar={UserAppBar}/>;

export default UserLayout;
