import React, { useState } from 'react';
// import logo from './logo.svg';
import Search from './components/Search';
// import Slide from 'react-reveal/Slide';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

function App() {
	const [search, setSearch] = useState('');

	return (
		<div className='App'>
			<Search search={search} setsearch={setSearch} />
			{search && (
				// <Slide top>
					<h3 title='search-display'>
						Searching for {search}
					</h3>
				// </Slide>
			)}
			{/* <header className='App-header'>
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
			</header> */}
		</div>
	);
}

export default App;
