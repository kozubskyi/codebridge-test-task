import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardMedia, Box, CardContent, Typography } from '@mui/material'
import './ArticleItem.scss'
import CalendarIcon from '../CalendarIcon/CalendarIcon'
import ArrowRightIcon from '../ArrowRightIcon/ArrowRightIcon'

interface IArticleProps {
	id: number
	imageUrl: string
	publishedAt: Date
	title: string
	summary: string
}

const Article: FC<IArticleProps> = props => {
	const { id, imageUrl, title, publishedAt, summary } = props

	const IMAGE_HEIGHT = 217
	const typographyCommonStyles = { fontFamily: 'inherit', marginBottom: '20px' }

	return (
		<Card variant="outlined" sx={{ maxWidth: 400, height: '100%', boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)' }}>
			<CardMedia sx={{ height: IMAGE_HEIGHT }} image={imageUrl} title={title} />
			<CardContent
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					height: `calc(100% - ${IMAGE_HEIGHT}px)`,
					padding: '25px'
				}}
			>
				<Box>
					<Typography
						variant="body2"
						color="text.secondary"
						sx={{ ...typographyCommonStyles, display: 'flex', alignItems: 'center' }}
					>
						<CalendarIcon />
						{publishedAt.toLocaleString().split('T')[0]}
					</Typography>
					<Typography variant="h5" sx={typographyCommonStyles}>
						{title}
					</Typography>
					<Typography variant="body1" sx={typographyCommonStyles}>
						{summary}
					</Typography>
				</Box>
				{/* <Box> */}
				<Link to={`articles/${id}`} className="read-more-button">
					Read more
					<ArrowRightIcon />
				</Link>
				{/* </Box> */}
			</CardContent>
		</Card>
	)
}

export default Article
