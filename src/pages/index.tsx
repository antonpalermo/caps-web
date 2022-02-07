import { GetServerSideProps } from 'next'
import React, { useEffect, useState } from 'react'

import { Article } from '..'
import Articles from '../components/Articles'

type HomeProps = {
	articles: Article[]
}

export const getServerSideProps: GetServerSideProps = async () => {
	const request = await fetch('http://localhost:3000/v1/article', {
		method: 'GET'
	})
	const articles = await request.json()

	return {
		props: {
			articles
		}
	}
}

const Home = ({ articles }: HomeProps) => {
	return (
		<div>
			<h1>Sample App</h1>
			<Articles articles={articles} />
		</div>
	)
}

export default Home
