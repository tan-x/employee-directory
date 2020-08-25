import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Header from './components/Header';
import List from './components/List';
import Fade from 'react-reveal/Fade';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

function App() {
	const [search, setSearch] = useState('');
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		axios.get('https://randomuser.me/api/?results=200&nat=us').then((res) => {
			// console.log(res.data.results);
			const short = [];
			for (let i = 0; i < 5; i++) {
				short.push(res.data.results[i]);
			}
			console.log(short);
			setEmployees(res.data.results);
		});
	}, []);

	// const employees = [
	//   { name: 'Testy Tester', email: 'testy@gmail.com', number: '5551098' },
	//   { name: 'Testy Tester', email: 'testy@gmail.com', number: '5551098' },
	// ]

	return (
		<div className='App'>
			<Header />
			<Search search={search} setsearch={setSearch} />
			{search && (
				<Fade top>
						<h3 title='search-display'>Searching for {search}</h3>
				</Fade>
			)}
			<List employees={employees} />
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
