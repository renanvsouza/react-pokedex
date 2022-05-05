import './styles.css';
import { useEffect, useMemo, useState } from 'react';
import Cards from '../../components/Cards';
import Button from '../../components/Button';
import SearchField from '../../components/SearchField';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import fetchPokemonData from '../../utils/fetchPokemonData';

export default function Home() {

	const [allCards, setAllCards] = useState()
	const [page, setPage] = useState(0)
	const [cardsPerPage] = useState(9)
	const [disableButton, setDisabeButton] = useState(false)
	const [showingSearch, setShowingSearch] = useState(false)
	const [cardsShowing, setCardsShowing] = useState([])

	//Load cards when component mounts
	useEffect(() => {
		fetchPokemonData().then((data) => {
			setAllCards(data)
			setCardsShowing(data.slice(0, 9))
		})
	}, [])

	function loadMoreCards() {
		const nextPage = page + cardsPerPage
		const nextCards = allCards.slice(nextPage, nextPage + cardsPerPage)

		cardsShowing.push(...nextCards)

		if (cardsShowing.length === allCards.length) {
			setDisabeButton(true)
		}

		setCardsShowing(cardsShowing)
		setPage(nextPage)
	}

	function handleInputChange(e) {
		let query = e.target.value.toLowerCase()

		if (query === '') {
			setCardsShowing(allCards.slice(0, 9))
			setShowingSearch(false)
		} else {
			let cards = allCards.filter(card => card.name.toLowerCase().includes(query))

			setShowingSearch(true)
			setCardsShowing(cards)
		}
	}

	return (
		<>
			{useMemo(() => <Navbar />, [])}
			<div className='container'>
				<div className='search-container'>
					<SearchField onChange={handleInputChange} />
				</div>
				{cardsShowing.length > 0 ? 
					<Cards cards={cardsShowing} />
                    :
                    <div className='loading'>
                        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                    </div>
                }
				{
					!showingSearch && <Button
						text={'Load more'}
						onClick={loadMoreCards}
						disabled={disableButton}
					/>
				}
			</div>
			{useMemo(() => <Footer />, [])}
		</>
	)

}
