import { useEffect, useState } from 'react'

const Loader = () => {
	const [value, setValue] = useState('Loading')

	useEffect(() => {
		const intervalId = setInterval(
			() => setValue(prevValue => (prevValue === 'Loading...' ? 'Loading' : prevValue + '.')),
			500
		)

		return () => clearInterval(intervalId)
	}, [])

	return <p>{value}</p>
}

export default Loader
