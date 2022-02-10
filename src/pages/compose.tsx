import React from 'react'
import { useRouter } from 'next/router'

import { useEditor } from '@tiptap/react'

import { editorInstance } from '../libs/editor-instance'
import Tiptap from '../components/Tiptap'

const Compose = () => {
	const router = useRouter()
	const editor = useEditor({
		...editorInstance
	})

	const publish = async () => {
		const request = await fetch('http://localhost:3000/v1/article/publish', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				doc: editor?.getJSON()
			})
		})

		const data = await request.json()

		// TODO: add a toast that will show everythime new article is created!

		if (data) {
			if (editor) {
				editor.destroy()
			}
			router.push('/')
		}
	}

	return (
		<div>
			<h1>Compose Component</h1>
			<button onClick={publish}>Publish</button>
			<Tiptap editor={editor} />
		</div>
	)
}

export default Compose
