export type Doc = {
	type: string
	content: any[]
}

export type Article = {
	id: string
	title?: string
	description?: string
	doc?: Doc
	date_created: Date
	date_updated: Date
}
