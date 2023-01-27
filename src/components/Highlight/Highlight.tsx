import { FC } from 'react'
import './Highlight.scss'

interface IProps {
	filter: string
	text: string
}

const Highlight: FC<IProps> = props => {
	const { filter, text } = props

	if (!filter) return <>{text}</>

	const regexp = new RegExp(filter, 'ig')
	const matchValue = text.match(regexp)

	if (matchValue) {
		return (
			<>
				{text.split(regexp).map((str, i, arr) => {
					if (i < arr.length - 1) {
						const value = matchValue.shift()
						return (
							<>
								{str}
								<span className="highlight">{value}</span>
							</>
						)
					}
					return <>{str}</>
				})}
			</>
		)
	}

	return <>{text}</>
}

export default Highlight
