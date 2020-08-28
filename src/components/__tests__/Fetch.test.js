import React, { useState } from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import axios from 'axios';
import Fetch, { API, useAxios } from '../Fetch';

// jest.mock('axios');

afterEach(cleanup);

xtest('fetches and displays data', async () => {
  let employees = [];
  let filter = [];
  const setEmployees = jest.fn();
  const setFilter = jest.fn();

  // wrapper.instance().setEmployees = jest.fn();
  await expect(employees.length).toBe(200)
  // await expect(getByTestId('testing')).toBeTruthy();
  // await expect(employees.length).toBe(200);
});
