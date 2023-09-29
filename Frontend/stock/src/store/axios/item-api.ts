import axios from 'axios'

export const ITEM_URL = 'https://localhost:7066'

const $itemApi = axios.create({
	withCredentials: true,
	baseURL: ITEM_URL,
})

export default $itemApi