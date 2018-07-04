import axios from 'axios';

const instance = axios.create(
    {baseURL: 'https://burger-guide-c710e.firebaseio.com/'
});

export default instance;