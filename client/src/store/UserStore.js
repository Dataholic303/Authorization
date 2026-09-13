import { makeAutoObservable } from 'mobx';
import * as authApi from '../api/authApi';

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._user = {};
        this._isLoading = false;
        this._error = null;
        makeAutoObservable(this);
    }

    setIsAuth(bool) { this._isAuth = bool; }
    setUser(user) { this._user = user; }
    setIsLoading(bool) { this._isLoading = bool; }
    setError(error) { this._error = error; }

    async registration(email, password) {
        this.setIsLoading(true);
        this.setError(null);
        try {
            const data = await authApi.register(email, password);
            localStorage.setItem('token', data.token);
            this.setUser(data.user);
            this.setIsAuth(true);
            return true;
        } catch (e) {
            this.setError(e.response?.data?.message || 'Ошибка регистрации');
            return false;
        } finally {
            this.setIsLoading(false);
        }
    }

    async login(email, password) {
        this.setIsLoading(true);
        this.setError(null);
        try {
            const data = await authApi.login(email, password);
            localStorage.setItem('token', data.token);
            this.setUser(data.user);
            this.setIsAuth(true);
            return true;
        } catch (e) {
            this.setError(e.response?.data?.message || 'Ошибка входа');
            return false;
        } finally {
            this.setIsLoading(false);
        }
    }

    async checkAuth() {
        this.setIsLoading(true);
        try {
            const data = await authApi.checkAuth();
            this.setUser(data.user);
            this.setIsAuth(true);
        } catch (e) {
            localStorage.removeItem('token');
            this.setIsAuth(false);
            this.setUser({});
        } finally {
            this.setIsLoading(false);
        }
    }

    logout() {
        localStorage.removeItem('token');
        this.setIsAuth(false);
        this.setUser({});
        this.setError(null);
    }

    get isAuth() { return this._isAuth; }
    get user() { return this._user; }
    get isLoading() { return this._isLoading; }
    get error() { return this._error; }
}