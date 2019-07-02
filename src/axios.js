import axios from 'axios';

const instance = axios.create({
    baseULR : 'http://localhost:8080/api'
});

export default instance;