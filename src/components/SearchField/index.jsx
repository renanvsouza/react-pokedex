import './styles.css';

export default function SearchField({ onChange }) {
	return (
		<>
			<input className='search' type="search" onChange={onChange} name="search" placeholder="Search"></input>
		</>
	);
};
