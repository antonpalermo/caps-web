import { Node, mergeAttributes } from '@tiptap/react'

const EXTENSION_NAME = 'headline'

export const Headline = Node.create({
	name: EXTENSION_NAME,
	content: 'inline*',
	parseHTML: () => [{ tag: 'h1' }],
	renderHTML: ({ HTMLAttributes }) => [
		'h1',
		mergeAttributes({ class: 'headline' }, HTMLAttributes),
		0
	]
})
