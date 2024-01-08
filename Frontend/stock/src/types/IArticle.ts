import { Guid } from 'guid-typescript'

export interface IArticle {
	id: Guid,
    userId: Guid,
	title: string,
	information: string,
    photos: string[],
    dateOfCreation: Date
}
