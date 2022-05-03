/* eslint-disable react/react-in-jsx-scope */
import './styles.css';
import { Component } from 'react';
import fetchPosts from '../../utils/fetchPosts';
import Posts from '../../components/Posts';
import Button from '../../components/Button';
import SearchField from '../../components/SearchField';

export default class Home extends Component {
	constructor() {
		super();
		this.state = {
			postsShowing: [],
			allPosts: [],
			page: 0,
			postsPerPage: 9,
			disableButton: false,
			showingSearch: false
		};
	}

	componentDidMount() {
		this.loadPosts()
	}

	loadPosts = async () => {
		const { page, postsPerPage } = this.state
		const allPosts = await fetchPosts()
		this.setState({
			postsShowing: allPosts.slice(page, postsPerPage),
			allPosts,
			showingSearch: false
		})
	}

	loadMorePosts = () => {
		const {
			postsShowing,
			allPosts,
			page,
			postsPerPage
		} = this.state

		const nextPage = page + postsPerPage
		const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
		postsShowing.push(...nextPosts)

		if (postsShowing.length === allPosts.length) {
			this.setState({
				disableButton: true
			})
		}

		this.setState({
			postsShowing,
			page: nextPage
		})
	}

	handleInputChange = (e) => {
		let query = e.target.value.toLowerCase()

		if (query === '') {
			this.loadPosts()
		} else {
			let posts = this.state.allPosts.filter(post => post.title.toLowerCase().includes(query))
			this.setState({
				showingSearch: true,
				postsShowing: posts
			})
		}
	}

	render() {
		const { postsShowing, showingSearch } = this.state
		return (
			<div className='container'>
				<div className='search-container'>
					<SearchField onChange={this.handleInputChange} />
				</div>
				{
					(postsShowing.length > 0 &&
						<Posts posts={postsShowing}
						/>) || (<p>No results found.</p>)
				}
				{
					!showingSearch && <Button
						text={'Load more'}
						onClick={this.loadMorePosts}
						disabled={this.state.disableButton}
					/>
				}
			</div>
		)
	}
}
