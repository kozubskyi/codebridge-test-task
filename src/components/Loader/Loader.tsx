import { FC, useEffect, useState } from 'react'

const Loader: FC = () => {
	const [value, setValue] = useState('Loading...')

	useEffect(() => {
		const intervalId = setInterval(() => {
			// setValue(prevValue => (prevValue === 'Loading...' ? 'Loading' : prevValue + '.'))
			setValue(prevValue => prevValue.replace('...', '   ').replace(' ', '.'))
		}, 500)

		return () => clearInterval(intervalId)
	}, [])

	return <span>{value}</span>
}

export default Loader
