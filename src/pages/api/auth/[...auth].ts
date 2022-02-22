import { NextApiRequest, NextApiResponse } from 'next'
import { __API_ENDPOINT } from '../../../constants'
import { setCookie } from '../../../utils/cookies'

const handler = async (req: NextApiRequest, res: NextApiResponse) =>
	await new Promise(async () => {
		const { auth, action = auth[0] } = req.query

		switch (req.method) {
			case 'POST':
				switch (action) {
					case 'login':
						const request = await fetch(
							`${__API_ENDPOINT}/v1/auth/authenticate`,
							{
								method: 'POST',
								headers: {
									'Content-Type': 'application/json'
								},
								body: JSON.stringify(req.body)
							}
						)

						const cookie = request.headers.get('Set-Cookie')

						const data = cookie?.split('; ')[0]
						const jwt_refresh = data?.split('=')[1]

						setCookie(res, 'jwt_ref', jwt_refresh)
						res.status(200).send(await request.json())
						break
				}
				break
		}
	})

export default handler
