import React from 'react'
import { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import '../styles/main.css'

const App = ({ Component, pageProps: { session, ...rest } }: AppProps) => (
	<SessionProvider session={session}>
		<Component {...rest} />
	</SessionProvider>
)

export default App
