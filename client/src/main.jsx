import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserStore from './store/UserStore';

export const Context = createContext(null);

const userStore = new UserStore();
userStore.checkAuth(); // Проверяем токен при загрузке

ReactDOM.createRoot(document.getElementById('root')).render(
    <Context.Provider value={{ user: userStore }}>
        <App />
    </Context.Provider>
);