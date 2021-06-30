import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER
} from './types';

const USER_SERVER = 'http://localhost:8080/user/';

export function registerUser(dataToSubmit) {
    const request = axios.post(`${USER_SERVER}/`, dataToSubmit)
        .then(response => response.data).
        catch(err => {
            console.log(err);
        });

    return {
        type: REGISTER_USER,
        payload: request
    }
}

export function loginUser(dataToSubmit) {
    const request = axios.get(`${USER_SERVER}/`, dataToSubmit)
        .then(response => response.data).catch(err => {
            console.log(err);
        });

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function auth() {
    const request = axios.get(`${USER_SERVER}/auth`)
        .then(response => response.data);

    return {
        type: AUTH_USER,
        payload: request
    }
}

export function logoutUser() {
    const request = axios.get(`${USER_SERVER}/logout`)
        .then(response => response.data);

    return {
        type: LOGOUT_USER,
        payload: request
    }
}
