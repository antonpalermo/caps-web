import React, { useState } from 'react'
import { Article } from '..'

type ArticlesProps = {
	articles: Article[]
}

const Articles = ({ articles }: ArticlesProps) => {
	return (
		<>
			<h1>Posts</h1>
			{articles.map(article => (
				<div key={article.id}>
					<h1>{article.title}</h1>
				</div>
			))}
		</>
	)
}

export default Articles
