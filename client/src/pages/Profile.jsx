import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../main';

const Profile = observer(() => {
    const { user } = useContext(Context);

    return (
        <div className="page">
            <div className="profile-card">
                <div className="profile-avatar">
                    {user.user.email?.[0]?.toUpperCase() || '?'}
                </div>

                <h1 className="profile-title">ЛИЧНЫЙ КАБИНЕТ</h1>

                <div className="profile-info">
                    <div className="profile-row">
                        <span className="profile-label">EMAIL:</span>
                        <span className="profile-value">{user.user.email}</span>
                    </div>
                    <div className="profile-row">
                        <span className="profile-label">ID:</span>
                        <span className="profile-value">{user.user.id}</span>
                    </div>
                    <div className="profile-row">
                        <span className="profile-label">СТАТУС:</span>
                        <span className="profile-value"> Авторизован</span>
                    </div>
                </div>

                <button
                    className="btn btn-primary btn-full"
                    onClick={() => user.logout()}
                >
                    ВЫЙТИ ИЗ АККАУНТА
                </button>
            </div>
        </div>
    );
});

export default Profile;