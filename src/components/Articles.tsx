import React, { useState } from 'react'
import { Article } from '..'

import Link from 'next/link'

type ArticlesProps = {
	articles: Article[]
}

const Articles = ({ articles }: ArticlesProps) => {
	return (
		<>
			<h1>Posts</h1>
			{articles.map(article => (
				<div key={article.id}>
					<Link href={`/view/${article.id}`} passHref>
						<h1>{article.title}</h1>
					</Link>
				</div>
			))}
		</>
	)
}

export default Articles
