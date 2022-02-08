import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Article } from '../..'

export const getStaticPaths: GetStaticPaths = async () => {
	const request = await fetch('http://localhost:3000/v1/article', {
		method: 'GET'
	})

	const articles = await request.json()

	const paths = articles.map((article: Article) => ({
		params: { id: article.id.toString() }
	}))

	return {
		paths,
		fallback: false
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	let id

	if (params) {
		id = params.id
	}

	const request = await fetch(`http://localhost:3000/v1/article/get?id=${id}`, {
		method: 'GET'
	})

	const article = await request.json()

	return {
		props: {
			article
		}
	}
}

type ViewProps = {
	article: Article
}

const View = ({ article }: ViewProps) => {
	return <div>{JSON.stringify(article)}</div>
}

export default View
