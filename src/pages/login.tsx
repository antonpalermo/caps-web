import React from 'react'
import { Form, Formik } from 'formik'
import { useSession } from '../providers/session'
import { __API_ENDPOINT, __PUBLIC_API_ENDPOINT } from '../constants'

const SignIn = () => {
	const { setAccessToken } = useSession()

	return (
		<>
			<h1>Sign In</h1>
			<Formik
				initialValues={{ identity: '', password: '' }}
				onSubmit={async value => {
					const request = await fetch(
						`${__PUBLIC_API_ENDPOINT}/v1/auth/authenticate`,
						{
							method: 'POST',
							headers: {
								'Content-Type': 'application/json'
							},
							credentials: 'include',
							body: JSON.stringify(value)
						}
					)

					const data = await request.json()
					setAccessToken(data.accessToken)
				}}
			>
				{({ handleSubmit, handleChange, handleBlur, values, isSubmitting }) => (
					<Form onSubmit={handleSubmit}>
						<input
							type={'text'}
							name={'identity'}
							placeholder={'Username or Email address'}
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.identity}
						/>
						<br />
						<input
							type={'password'}
							name={'password'}
							placeholder={'Password'}
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password}
						/>
						<button type={'submit'} disabled={isSubmitting}>
							Sign In
						</button>
					</Form>
				)}
			</Formik>
		</>
	)
}

export default SignIn
