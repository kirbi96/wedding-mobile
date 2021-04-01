import axios from 'axios';

class AuthAPI {
    signIn = (data: any) => {
        return axios.post('auth/login', data);
    };

    reg = (data: any) => {
        return axios.post('auth/register', data);
    };
}

const authAPI = new AuthAPI();
export default authAPI;
