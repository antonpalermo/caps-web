import { GetServerSideProps } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import { Article } from '..'
import Articles from '../components/Articles'
import { __API_ENDPOINT } from '../constants'

type HomeProps = {
	articles: Article[]
}

export const getServerSideProps: GetServerSideProps = async () => {
	const request = await fetch(`${__API_ENDPOINT}/v1/doc`, {
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
	const { data: session } = useSession({
		required: true,
		onUnauthenticated: () => {
			signIn('google')
		}
	})

	const compose = () => {
		router.push({
			pathname: '/compose',
			// TODO: change this to some user id when authenticated.
			query: { id: 'some-user-id' }
		})
	}

	return (
		<div>
			{session ? (
				<>
					<button onClick={() => signOut()}>Sign Out</button>
					<h1>Sample App</h1>
					<button onClick={compose}>Compose</button>
					<Articles articles={articles} />
				</>
			) : (
				<>
					<h1>Unauthenticated User</h1>
					<button onClick={() => signIn()}>Sign In</button>
				</>
			)}
		</div>
	)
}

export default Home
