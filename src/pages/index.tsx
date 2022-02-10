import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
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
	const router = useRouter()

	const compose = () => {
		router.push({
			pathname: '/compose',
			// TODO: change this to some user id when authenticated.
			query: { id: 'some-user-id' }
		})
	}

	return (
		<div>
			<h1>Sample App</h1>
			<button onClick={compose}>Compose</button>
			<Articles articles={articles} />
		</div>
	)
}

export default Home
