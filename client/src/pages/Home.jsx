import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Context } from '../main';
import { LOGIN_ROUTE, PROFILE_ROUTE } from '../utils/consts';

const Home = observer(() => {
    const { user } = useContext(Context);
    const navigate = useNavigate();

    return (
        <div className="page">
            <div className="hero">
                <h1 className="hero-title">JWT AUTHENTICATION</h1>
                <p className="hero-subtitle">
                    Простое приложение с авторизацией по JWT-токенам
                </p>

                {user.isAuth ? (
                    <div className="hero-actions">
                        <button
                            className="btn btn-primary btn-lg"
                            onClick={() => navigate(PROFILE_ROUTE)}
                        >
                            Перейти в профиль
                        </button>
                    </div>
                ) : (
                    <div className="hero-actions">
                        <button
                            className="btn btn-primary btn-lg"
                            onClick={() => navigate(LOGIN_ROUTE)}
                        >
                            Войти в систему
                        </button>
                    </div>
                )}
            </div>

            <div className="features">
                <div className="feature-card">
                    <div className="feature-icon"></div>
                    <h3>Безопасность</h3>
                    <p>JWT-токены с хешированием паролей через bcrypt</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon"></div>
                    <h3>Скорость</h3>
                    <p>React + Vite + MobX для быстрой работы</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon"></div>
                    <h3>Дизайн</h3>
                    <p>Минималистичный стиль Neo-Brutalism</p>
                </div>
            </div>
        </div>
    );
});

export default Home;