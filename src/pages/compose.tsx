import { useEditor } from '@tiptap/react'
import React from 'react'
import Tiptap from '../components/Tiptap'
import { editorInstance } from '../libs/editor-instance'

const Compose = () => {
	const editor = useEditor({
		...editorInstance
	})

	return (
		<div>
			<h1>Compose Component</h1>
			<Tiptap editor={editor} />
		</div>
	)
}

export default Compose
