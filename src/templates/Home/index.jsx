import './styles.css';
import { useEffect, useState } from 'react';
import Posts from '../../components/Posts';
import Button from '../../components/Button';
import SearchField from '../../components/SearchField';
import fetchPokemonData from '../../utils/fetchPokemonData';

export default function Home() {

	const [allPosts, setAllPosts] = useState()
	const [page, setPage] = useState(0)
	const [postsPerPage] = useState(9)
	const [disableButton, setDisabeButton] = useState(false)
	const [showingSearch, setShowingSearch] = useState(false)
	const [postsShowing, setPostsShowing] = useState([])

	//Load posts when component mounts
	useEffect(() => {
		fetchPokemonData().then((data) => {
			setAllPosts(data)
			setPostsShowing(data.slice(0, 9))
		})
	}, [])

	function loadMorePosts() {
		const nextPage = page + postsPerPage
		const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)

		postsShowing.push(...nextPosts)

		if (postsShowing.length === allPosts.length) {
			setDisabeButton(true)
		}

		setPostsShowing(postsShowing)
		setPage(nextPage)
	}

	function handleInputChange(e) {
		let query = e.target.value.toLowerCase()

		if (query === '') {
			setPostsShowing(allPosts.slice(0, 9))
			setShowingSearch(false)
		} else {
			let posts = allPosts.filter(post => post.name.toLowerCase().includes(query))

			setShowingSearch(true)
			setPostsShowing(posts)
		}
	}

	return (
		<div className='container'>
			<div className='search-container'>
				<SearchField onChange={handleInputChange} />
			</div>
			{
				(postsShowing.length > 0 &&
					<Posts posts={postsShowing}
					/>) || (<p>No results found.</p>)
			}
			{
				!showingSearch && <Button
					text={'Load more'}
					onClick={loadMorePosts}
					disabled={disableButton}
				/>
			}
		</div>
	)

}
