import { Guid } from 'guid-typescript'

export interface IItem {
	id: Guid,
	name: string,
	photoPath: string,
	description: string,
	price: number,
	lastPrice: number,
	ownerId: Guid,
	sold: number
}
