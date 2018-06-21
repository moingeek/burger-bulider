import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-guide-4c32e.firebaseio.com/'
});

export default instance;