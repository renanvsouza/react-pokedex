import './styles.css'

export default function SearchField({ handleInputChange }) {
    return (
        <>
            <input className='search' type="text" onChange={handleInputChange} name="search" placeholder="Search"></input>
        </>
    )
}