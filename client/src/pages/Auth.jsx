import React, { useState, useContext } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Context } from '../main';
import {
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    HOME_ROUTE,
} from '../utils/consts';

const Auth = observer(() => {
    const { user } = useContext(Context);
    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        let success;
        if (isLogin) {
            success = await user.login(email, password);
        } else {
            success = await user.registration(email, password);
        }

        if (success) {
            navigate(HOME_ROUTE);
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-card">
                <h1 className="auth-title">
                    {isLogin ? 'ВХОД' : 'РЕГИСТРАЦИЯ'}
                </h1>

                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="form-group">
                        <label className="form-label">EMAIL</label>
                        <input
                            type="email"
                            className="form-input"
                            placeholder="user@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">ПАРОЛЬ</label>
                        <input
                            type="password"
                            className="form-input"
                            placeholder="Минимум 6 символов"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            minLength={6}
                        />
                    </div>

                    {user.error && (
                        <div className="form-error">
                            ! {user.error}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="btn btn-primary btn-full"
                        disabled={user.isLoading}
                    >
                        {user.isLoading
                            ? 'ЗАГРУЗКА...'
                            : isLogin
                            ? 'ВОЙТИ'
                            : 'ЗАРЕГИСТРИРОВАТЬСЯ'}
                    </button>
                </form>

                <div className="auth-switch">
                    {isLogin ? (
                        <>
                            Нет аккаунта?{' '}
                            <NavLink to={REGISTRATION_ROUTE} className="auth-link">
                                Зарегистрироваться
                            </NavLink>
                        </>
                    ) : (
                        <>
                            Есть аккаунт?{' '}
                            <NavLink to={LOGIN_ROUTE} className="auth-link">
                                Войти
                            </NavLink>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
});

export default Auth;