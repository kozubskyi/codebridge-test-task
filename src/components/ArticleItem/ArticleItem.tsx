import { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardMedia, Box, CardContent, Typography } from '@mui/material'
import { useAppSelector } from '../../store/hooks'
import IArticle from '../../models/IArticle'
import Highlight from '../Highlight/Highlight'
import CalendarIcon from '../icons/CalendarIcon/CalendarIcon'
import ArrowRightIcon from '../icons/ArrowRightIcon/ArrowRightIcon'

const ArticleItem = (props: IArticle) => {
	const { id, imageUrl, title, publishedAt, summary } = props

	const filter = useAppSelector(state => state.filter)
	const highlight = useCallback((text: string) => <Highlight filter={filter} text={text} />, [filter])

	const IMAGE_HEIGHT = 217
	const typographyCommonStyles = { fontFamily: 'inherit', marginBottom: '20px' }

	return (
		<>
			<Link to={`articles/${id}`}>
				<Card
					variant="outlined"
					sx={{
						maxWidth: 400,
						height: '100%',
						boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
						'&:hover': {
							transform: 'scale(1.02)'
						},
						transition: 'transform 0.2s'
					}}
				>
					<CardMedia sx={{ height: IMAGE_HEIGHT }} image={imageUrl} title={title} />
					<CardContent
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
							height: `calc(100% - ${IMAGE_HEIGHT}px)`,
							// padding: '25px',
							'&:last-child': {
								padding: '25px' //! bug in MaterialUI
							}
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
								{highlight(title)}
							</Typography>
							<Typography variant="body1" sx={typographyCommonStyles}>
								{highlight(summary)}
							</Typography>
						</Box>
						{/* <Link to={`articles/${id}`} className="link-button">
						Read more
						<ArrowRightIcon />
					</Link> */}
						<span className="link-button">
							Read more
							<ArrowRightIcon />
						</span>
					</CardContent>
				</Card>
			</Link>
		</>
	)
}

export default ArticleItem
