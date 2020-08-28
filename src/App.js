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
    let items = [];
    order.field === 'name'
      ? (items = [a[order.field].first, b[order.field].first])
      : (items = [a[order.field], b[order.field]]);
    let comparison = 0;
    if (items[0] > items[1]) {
      order.ascending ? (comparison = 1) : (comparison = -1);
    } else if (items[0] < items[1]) {
      order.ascending ? (comparison = -1) : (comparison = 1);
    }
    return comparison;
  }
  useEffect(() => {
    if (order.field !== '') {
      setFilter([...filter.sort(compare)]);
    }
  }, [order]);
};

function App(props) {
  const [search, setSearch] = useState('');
  const [employees, setEmployees] = useState(props.defFilter);
  const [filter, setFilter] = useState([]);
  const [order, setOrder] = useState({ ascending: false, field: '' });
  useFilter(employees, setFilter, search);
  useSort(order, filter, setFilter);

  const sort = (e) => {
    setOrder({ ...order, ascending: !order.ascending, field: e.target.id.split('-')[1] })
  };

  return (
    <div className='App'>
      <Header />
      {employees.length === 0 ? (
        <Fetch url={API} employees={employees} setEmployees={setEmployees} setFilter={setFilter} />
      ) : (
        <>
          <Search search={search} setsearch={setSearch} />
          <p title='search-display'>{search && `Searching for ${search}`}</p>
          <List employees={filter} sort={sort} order={order} />{' '}
        </>
      )}
      <Logo />
    </div>
  );
}

export default App;
