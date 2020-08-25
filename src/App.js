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
		</div>
	);
}

export default App;
