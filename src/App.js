import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Header from './components/Header';
import List from './components/List';
import Logo from './components/Logo';
import Fade from 'react-reveal/Fade';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [employees, setEmployees] = useState([]);
  const [filter, setFilter] = useState([]);
  const [order, setOrder] = useState({ ascending: false, field: '' });

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

  function compare(a, b) {
    let itemA, itemB;
    if (order.field === 'name') {
      itemA = a.name.first.toLowerCase();
      itemB = b.name.first.toLowerCase();
    } else if (order.field === 'email') {
      itemA = a.email.toLowerCase();
      itemB = b.email.toLowerCase();
    } else if (order.field === 'phone') {
      itemA = a.phone;
      itemB = b.phone;
    }

    let comparison = 0;
    if (order.ascending) {
      if (itemA > itemB) {
        comparison = 1;
      } else if (itemA < itemB) {
        comparison = -1;
      }
    } else {
      if (itemA > itemB) {
        comparison = -1;
      } else if (itemA < itemB) {
        comparison = 1;
      }
    }
    return comparison;
  }

  const sort = (e) => {
    if (e.target.id === 'sort-name') {
      setOrder({ ...order, ascending: !order.ascending, field: 'name' });
    } else if (e.target.id === 'sort-email') {
      setOrder({ ...order, ascending: !order.ascending, field: 'email' });
    } else if (e.target.id === 'sort-phone') {
      setOrder({ ...order, ascending: !order.ascending, field: 'phone' });
    }
  };

  useEffect(() => {
    if (order.field !== '') {
      const newFilter = filter.sort(compare);
      setFilter([...newFilter]);
    }
  }, [order]);

  return (
    <div className='App'>
      <Header />
      <Search search={search} setsearch={setSearch} />
      <Fade collapse top when={search}>
        <h3 title='search-display'>Searching for {search}</h3>
      </Fade>
      <List employees={filter} sort={sort} />
      <Logo />
    </div>
  );
}

export default App;
