interface ILaunch {
	id: string
	provider: string
}

export default interface IArticle {
	id: number
	title: string
	url: string
	imageUrl: string
	newsSite: string
	summary: string
	publishedAt: Date
	updatedAt: Date
	featured: boolean
	launches: ILaunch[]
	events: any[]
}
