import { AxiosResponse } from 'axios'
import $api from '../store/axios/auth-api'

export default class AuthService {
	static async register(
		firstName: string,
		lastName: string,
		emailAddress: string,
		password: string
	): Promise<AxiosResponse<any>> {
		return $api.post('/Auth/Register', {
			firstName,
			lastName,
			emailAddress,
			password,
		})
	}
}
