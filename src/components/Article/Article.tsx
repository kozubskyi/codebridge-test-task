import { FC, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Card, CardContent, Typography } from '@mui/material'
import './Article.scss'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { fetchArticle } from '../../services/spaceflight-news-api'
import { articleActions } from '../../store/slices/article-slice'
import Container from '../Container/Container'
import ArrowLeftIcon from '../icons/ArrowLeftIcon/ArrowLeftIcon'
import Loader from '../Loader/Loader'

const Article: FC = () => {
	const { article, isLoading, error } = useAppSelector(state => state)
	const dispatch = useAppDispatch()
	const location = useLocation()

	useEffect(() => {
		const articleId = location.pathname.split('/').slice(-1)[0]

		dispatch(fetchArticle(articleId))
	}, [dispatch, location.pathname])

	if (isLoading || !article) {
		return (
			<div className="loader-backdrop">
				<div className="loader-wrapper">
					<Loader />
				</div>
			</div>
		)
	}

	if (error) {
		return (
			<div className="loader-backdrop">
				<span>Error: {error}</span>
			</div>
		)
	}

	const { imageUrl, title, summary } = article

	return (
		<div className="Article">
			<div className="image-wrapper">
				<div className="image-content">
					<img src={imageUrl} alt={title} />
				</div>
			</div>
			<Container>
				<div className="content-wrapper">
					<div className="article-content">
						<Card
							variant="outlined"
							sx={{
								width: '100%',
								boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)'
							}}
						>
							<CardContent
								sx={{
									// padding: '50px 75px',
									'&:last-child': {
										padding: '50px 75px' //! bug in MaterialUI
									}
								}}
							>
								<Typography variant="h5" sx={{ fontFamily: 'inherit', textAlign: 'center', marginBottom: '50px' }}>
									{title}
								</Typography>
								<Typography variant="body1" sx={{ fontFamily: 'inherit' }}>
									{summary}
									<br />
									<br />
									The Spaceflight News API article model does not have a large description field (only summary), so to
									create a large article text, I add 200 Lorem ipsum words.
									<br />
									<br />
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ea molestias hic possimus quae sequi
									sit laboriosam nemo in tempore harum obcaecati ex qui ab quia nesciunt dolorum inventore? Illo dolore
									sequi mollitia suscipit harum quasi assumenda praesentium repellendus illum pariatur iste, deserunt
									accusamus blanditiis odit ab! Dignissimos voluptates pariatur quas cum, eos similique, praesentium
									iste, ex voluptas veniam cupiditate quae. Quam, similique dolorum!
									<br />
									<br />
									Nihil aspernatur, nisi excepturi nesciunt aperiam iste fuga laudantium odio earum, numquam itaque
									eligendi eius dolor voluptate. Iusto ratione dignissimos, accusantium harum beatae dicta praesentium
									quo rerum itaque cum repellat doloribus illum ut vel quidem ipsam sunt odit. Provident dolorum vitae
									repellendus nostrum officiis, doloremque totam ipsum velit consequatur ipsa, cumque doloribus ea
									officia recusandae eos sequi architecto illo ad ducimus, labore dolor obcaecati neque consequuntur
									fuga.
									<br />
									<br />
									Veniam sequi hic sit minus mollitia dolores, tempore eum magni architecto suscipit laudantium
									voluptatum commodi, qui eos et doloribus consectetur harum incidunt? Molestiae praesentium quisquam
									voluptatibus ipsa facere iusto nobis! Quos, ex rerum vel dicta, dignissimos veritatis quasi
									repellendus voluptatem tenetur alias illo, debitis fuga modi! Soluta possimus, dolorem perferendis
									optio quibusdam modi nemo, similique sequi, nisi ut velit! Totam nisi temporibus cupiditate dolorum
									error blanditiis nam porro obcaecati.
								</Typography>
							</CardContent>
						</Card>
						<button type="button" onClick={() => dispatch(articleActions.clear())} className="back-to-homepage-button">
							<Link to="/" className="link-button">
								<ArrowLeftIcon />
								Back to homepage
							</Link>
						</button>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default Article
