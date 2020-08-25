import React, { useState } from 'react';
import Search from './components/Search';
import Header from './components/Header';
import List from './components/List';
// import Slide from 'react-reveal/Slide';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

function App() {
  const [search, setSearch] = useState('');
  
  const employees = [
    { name: 'Testy Tester', email: 'testy@gmail.com', number: '5551098' },
    { name: 'Testy Tester', email: 'testy@gmail.com', number: '5551098' },
  ]

	return (
		<div className='App'>
      <Header />
			<Search search={search} setsearch={setSearch} />
			{search && (
				// <Slide top>
					<h3 title='search-display'>
						Searching for {search}
					</h3>
				// </Slide>
			)}
      <List employees={employees}/>
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
