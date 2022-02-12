import React, { useMemo } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Article } from '../..'
import { generateHTML, useEditor } from '@tiptap/react'
import { editorExtensions as extensions } from '../../libs/editor-extensions'
import Tiptap from '../../components/Tiptap'
import { editorInstance } from '../../libs/editor-instance'
import { __API_ENDPOINT } from '../../constants'

export const getStaticPaths: GetStaticPaths = async () => {
	const request = await fetch(`${__API_ENDPOINT}/v1/doc`, {
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

	const request = await fetch(`${__API_ENDPOINT}/v1/doc/get?id=${id}`, {
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
	const content = useMemo(() => {
		if (typeof window !== 'undefined') {
			return generateHTML(article.doc!, extensions)
		}
	}, [article])

	const editor = useEditor(
		{
			editable: false,
			content,
			...editorInstance
		},
		[content]
	)

	return (
		<div>
			<Tiptap editor={editor} />
		</div>
	)
}

export default View
