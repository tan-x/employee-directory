import React, {useEffect} from 'react';
import axios from 'axios';

export const API = 'https://randomuser.me/api/?results=200&nat=us';
export const fetchData = async (url) => {
  return await axios.get(url);
};

const useAxios = (employees, setEmployees, setFilter, url) => {
  useEffect(() => {
    if (employees.length === 0) {
      fetchData(url).then((res) => {
        setEmployees(res.data.results);
        setFilter(res.data.results);
      });
    }
  }, []);
};

export default function Fetch({ url, employees, setEmployees, setFilter }) {
  useAxios(employees, setEmployees, setFilter, url);
  return <span data-testid="loading">Loading...</span>
}
