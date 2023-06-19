import axios from 'axios';

export const BaseURL="http://localhost:8082";

export const myAxios=axios.create(
    {
        baseURL:BaseURL,
    }
)