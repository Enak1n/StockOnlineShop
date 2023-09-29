import { AxiosResponse } from 'axios'
import { IItem } from '../types/IItem'
import $itemApi from '../store/axios/item-api'

export default class ItemService {
	static async getAll(): Promise<AxiosResponse<any>> {
		return $itemApi.get<IItem>('/Item/GetAll')
	}

	static async getTrendingSneakers(): Promise<AxiosResponse<any>> {
		return $itemApi.get<IItem>('/Item/GetTrendingSneakers')
	}
}
