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
	const [filter, setFilter] = useState([]);

	useEffect(() => {
		if (employees.length === 0) {
			axios.get('https://randomuser.me/api/?results=200&nat=us').then((res) => {
				setEmployees(res.data.results);
				setFilter(res.data.results);
			});
		} else {
			setFilter(
				employees.filter(
					(item) =>
            item.name.first.toLowerCase().includes(search) ||
            item.name.last.toLowerCase().includes(search) ||
						item.email.includes(search) ||
						item.phone.includes(search)
				)
			);
		}
	}, [search]);

	return (
		<div className='App'>
			<Header />
			<Search search={search} setsearch={setSearch} />
			{search && (
				<Fade top>
					<h3 title='search-display'>Searching for {search}</h3>
				</Fade>
			)}
			<List employees={filter} />
		</div>
	);
}

export default App;
