import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Header from './components/Header';
import List from './components/List';
import Logo from './components/Logo';
import Fetch from './components/Fetch';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

export const API = 'https://randomuser.me/api/?results=200&nat=us';
export const fetchData = async (url) => {
  return await axios.get(url);
};

const useFilter = (employees, setFilter, search) => {
  useEffect(() => {
    if (employees.length !== 0) {
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
};

const useSort = (order, filter, setFilter) => {
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
  useEffect(() => {
    if (order.field !== '') {
      const newFilter = filter.sort(compare);
      setFilter([...newFilter]);
    }
  }, [order]);
};

function App(props) {
  const [search, setSearch] = useState('');
  const [employees, setEmployees] = useState([]);
  const [filter, setFilter] = useState(props.defFilter);
  const [order, setOrder] = useState({ ascending: false, field: '' });
  useFilter(employees, setFilter, search);
  useSort(order, filter, setFilter);

  const sort = (e) => {
    if (e.target.id === 'sort-name') {
      setOrder({ ...order, ascending: !order.ascending, field: 'name' });
    } else if (e.target.id === 'sort-email') {
      setOrder({ ...order, ascending: !order.ascending, field: 'email' });
    } else if (e.target.id === 'sort-phone') {
      setOrder({ ...order, ascending: !order.ascending, field: 'phone' });
    }
  };

  return (
    <div className='App'>
      <Header />
      {filter.length === 0 ? <Fetch url={API} employees={employees} setEmployees={setEmployees} setFilter={setFilter} /> : ( <>
      <Search search={search} setsearch={setSearch} />
      <p title='search-display'>{search && `Searching for ${search}`}</p>
      <List employees={filter} sort={sort} order={order} /> </>)}
      <Logo />
    </div>
  );
}

export default App;
