import { NextApiRequest, NextApiResponse } from 'next'
import { __API_ENDPOINT } from '../../../constants'

const createDoc = async (req: NextApiRequest, res: NextApiResponse) => {
	const body = req.body

	const request = await fetch(`${__API_ENDPOINT}/v1/doc/publish`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	})

	return res.status(200).send(await request.json())
}

const handler = async (req: NextApiRequest, res: NextApiResponse) =>
	new Promise(async () => {
		const { doc, action = doc[0] } = req.query
		const method = req.method

		switch (method) {
			case 'POST':
				switch (action) {
					case 'create':
						await createDoc(req, res)
						break
				}
				break
			case 'GET':
				switch (action) {
					case 'create':
						res.send({ message: 'ok' })
						break
				}
				break
		}
	})

export default handler
