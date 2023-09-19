import axios from 'axios'

export const AUTH_URL = 'https://localhost:7011'

const $api = axios.create({
	withCredentials: true,
	baseURL: AUTH_URL,
})

export default $api