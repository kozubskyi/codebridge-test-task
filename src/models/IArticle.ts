interface ILaunch {
	id: string
	provider: string
}

export default interface IArticle {
	id: number
	title: string
	url: string
	image_url: string
	news_site: string
	summary: string
	published_at: Date
	updated_at: Date
	featured: boolean
	launches: ILaunch[]
	events: any[]
}
