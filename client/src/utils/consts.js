import Auth from '../pages/Auth';
import Home from '../pages/Home';
import Profile from '../pages/Profile';

// Константы маршрутов
export const HOME_ROUTE = '/';
export const LOGIN_ROUTE = '/login';
export const REGISTRATION_ROUTE = '/registration';
export const PROFILE_ROUTE = '/profile';

// Публичные маршруты (доступны всем)
export const publicRoutes = [
    { path: HOME_ROUTE, Component: Home },
    { path: LOGIN_ROUTE, Component: Auth },
    { path: REGISTRATION_ROUTE, Component: Auth },
];

// Приватные маршруты (только для авторизованных)
export const authRoutes = [
    { path: PROFILE_ROUTE, Component: Profile },
];