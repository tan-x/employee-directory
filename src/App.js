import React, { useState } from 'react';
import logo from './logo.svg';
import Search from './components/Search';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

function App() {
	const [search, setSearch] = useState({ firstname: '', lastname: '' });

	return (
		<div className='App'>
			<Search search={search} setsearch={setSearch} />
			{(search.firstname || search.lastname) && (
				<h3 title='search-display'>
					Searching for {search.firstname} {search.lastname}
				</h3>
			)}
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
