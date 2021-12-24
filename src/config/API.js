// import axios here ...
import axios from 'axios';

// Create base URL API
export const API = axios.create({
	baseURL: 'https://tasklogin.herokuapp.com/api/',
});
