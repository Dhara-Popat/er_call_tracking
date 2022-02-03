import Cookies from 'js-cookie';
import {handleToaster} from "../_helpers";

export default function setupAxios(axios, store) {
    axios.interceptors.request.use(
        config => {
            config.baseURL = process.env.API_URL;
            config.headers['Content-Type'] = 'application/json';
            if (Cookies.get('session_token')) {
                config.headers = {
                    'Authorization': Cookies.get('session_token')
                }
            }
            return config;
        },
        err => Promise.reject(err)
    );

    axios.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            return new Promise((resolve, reject) => {
                handleToaster('Something went wrong, Please try again later.');
                return reject(error);
            });
        }
    );
}
