import React from 'react'
import { AppProps } from 'next/app'

import '../styles/main.css'
import { SessionProvider } from '../providers/session'

const App = ({ Component, pageProps }: AppProps) => (
	<SessionProvider>
		<Component {...pageProps} />
	</SessionProvider>
)

export default App
