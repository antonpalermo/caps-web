// @ts-check

import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'

import { Headline } from './extensions/headline'
import { Description } from './extensions/description'
import { MainDoc } from './extensions/main-doc'

export const editorInstance: Partial<import('@tiptap/react').EditorOptions> = {
	extensions: [
		MainDoc,
		Headline,
		Description,
		StarterKit.configure({
			document: false
		}),
		Placeholder.configure({
			showOnlyCurrent: false,
			placeholder: ({ node }) => {
				if (node.type.name === 'headline') {
					return 'Untitled Document'
				}

				if (node.type.name === 'description') {
					return 'Description (optional)'
				}

				return 'Write something...'
			}
		})
	]
}
