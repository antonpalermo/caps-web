import Placeholder from '@tiptap/extension-placeholder'
import StarterKit from '@tiptap/starter-kit'

import { MainDoc } from './extensions/main-doc'
import { Headline } from './extensions/headline'
import { Description } from './extensions/description'

export const editorExtensions: import('@tiptap/react').Extensions = [
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
