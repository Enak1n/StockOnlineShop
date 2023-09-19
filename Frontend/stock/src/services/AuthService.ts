import { AxiosResponse } from 'axios'
import $api from '../store/axios/auth-api'

export default class AuthService{
	static async test(): Promise<AxiosResponse<any>>{
		return $api.get('/Test/Test')
	}
}