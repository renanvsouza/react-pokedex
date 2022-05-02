import './styles.css'
import { Component } from 'react'

import fetchPosts from '../../utils/fetchPosts'
import Posts from '../../components/Posts'
import Button from '../../components/Button'
import SearchField from '../../components/SearchField'

class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      postsShowing: [],
      allPosts: [],
      page: 0,
      postsPerPage: 9,
      disableButton: false,
      showingSearch: false
    }
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
          <SearchField handleInputChange={this.handleInputChange} />
        </div>
        {
          (postsShowing.length > 0 &&
            <Posts posts={postsShowing}
            />) || (<p>No results found.</p>)
        }
        {
          !showingSearch && <Button
            text={'Load more'}
            loadMorePosts={this.loadMorePosts}
            disabled={this.state.disableButton}
          />
        }
      </div>
    )
  }
}

// function App() {
//   return (
//     <>
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             {'Meudeusdocéuquequeéisso'}
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     </>
//   );
// }

export default Home
