import React, { createContext, ReactNode, useContext, useState } from 'react'

export type Session = {
	accessToken: string
	setAccessToken: (token: string) => void
}

export const SessionContext = createContext<Session>({
	accessToken: '',
	setAccessToken: () => ''
})

export const useSession = () => useContext(SessionContext)

type SessionProviderProps = {
	children: ReactNode
}

export const SessionProvider = ({ children }: SessionProviderProps) => {
	const [token, setToken] = useState<string>('')

	const setAccessToken = (token: string) => setToken(token)

	return (
		<SessionContext.Provider value={{ accessToken: token, setAccessToken }}>
			{children}
		</SessionContext.Provider>
	)
}
