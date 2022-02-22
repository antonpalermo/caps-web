import { serialize, CookieSerializeOptions } from 'cookie'
import { NextApiResponse } from 'next'

export const setCookie = (
	res: NextApiResponse,
	name: string,
	value: unknown,
	options: CookieSerializeOptions = {
		httpOnly: true,
		path: '/'
	}
) => {
	const stringValue =
		typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value)

	res.setHeader('Set-Cookie', serialize(name, stringValue, options))
}