import { Node, mergeAttributes } from '@tiptap/react'

const EXTENSION_NAME = 'description'

export const Description = Node.create({
	name: EXTENSION_NAME,
	content: 'inline*',
	parseHTML: () => [{ tag: 'p' }],
	renderHTML: ({ HTMLAttributes }) => [
		'p',
		mergeAttributes({ class: 'description' }, HTMLAttributes),
		0
	]
})
