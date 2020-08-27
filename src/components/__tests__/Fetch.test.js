import React, { useState } from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import axios from 'axios';
import Fetch from '../Fetch';

jest.mock('axios');

afterEach(cleanup);

xtest('fetches and displays data', async () => {
  const url = 'greeting';
  const [employees, setEmployees] = useState([]);
  const [filter, setFilter] = useState([]);
  const { getByTestId } = render(
    <Fetch url={url} employees={employees} setEmployees={setEmployees} setFilter={setFilter} />
  );

  expect(getByTestId('testing')).toBeTruthy();
});
