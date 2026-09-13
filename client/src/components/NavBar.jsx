import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Context } from '../main';
import {
    HOME_ROUTE,
    LOGIN_ROUTE,
    PROFILE_ROUTE,
} from '../utils/consts';

const NavBar = observer(() => {
    const { user } = useContext(Context);
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <NavLink to={HOME_ROUTE} className="navbar-logo">
                     APP
                </NavLink>

                <div className="navbar-links">
                    {user.isAuth ? (
                        <>
                            <span className="navbar-user">
                                {user.user.email}
                            </span>
                            <button
                                className="btn btn-outline"
                                onClick={() => navigate(PROFILE_ROUTE)}
                            >
                                Профиль
                            </button>
                            <button
                                className="btn btn-primary"
                                onClick={() => user.logout()}
                            >
                                Выйти
                            </button>
                        </>
                    ) : (
                        <button
                            className="btn btn-primary"
                            onClick={() => navigate(LOGIN_ROUTE)}
                        >
                            Войти
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
});

export default NavBar;