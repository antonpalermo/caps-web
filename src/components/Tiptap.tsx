import React from 'react'

import { EditorContent, EditorContentProps } from '@tiptap/react'

type TiptapProps = EditorContentProps & {}

const Tiptap = ({ editor }: TiptapProps) => {
	return <EditorContent editor={editor} />
}

export default Tiptap
