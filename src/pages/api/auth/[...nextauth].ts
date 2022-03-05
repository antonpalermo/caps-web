import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

import { Provider } from 'next-auth/providers'
import { NextApiRequest, NextApiResponse } from 'next'
import { TypeORMLegacyAdapter } from '@next-auth/typeorm-legacy-adapter'
import {
	AccountEntity,
	SessionEntity,
	UserEntity,
	VerificationTokenEntity
} from '@next-auth/typeorm-legacy-adapter/dist/entities'
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const providers: Provider[] = [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID || '',
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
		})
	]

	return await NextAuth(req, res, {
		providers,
		adapter: TypeORMLegacyAdapter(process.env.DATABASE_CONNECTION || '')
	})
}

export default handler
