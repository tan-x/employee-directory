import React from 'react';
import axios from 'axios';
import { render, fireEvent, waitFor, screen, queries, act, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App, { API, fetchData } from './App';
// jest.mock('axios');
const dummyList = [
  {
    name: { first: 'Zesty', last: 'Zester' },
    email: 'zesty@gmail.com',
    phone: '4441098',
    picture: {
      thumbnail: 'http://test.com',
    },
  },
  {
    name: { first: 'Testy', last: 'Tester' },
    email: 'testy@gmail.com',
    phone: '5551098',
    picture: {
      thumbnail: 'http://test.com',
    },
  },
];

afterEach(cleanup);

describe('Fetch data', () => {
  test('Fetches random user array successfully', async () => {
    const { data } = await fetchData(API);
    await expect(data.results.length).toBe(200);
  });
});

describe('Search form', () => {
  test('Input value changes when user types', async () => {
    // Arrange
    const { container, debug } = render(<App defFilter={dummyList} />);
    // debug();
    // Act
    act(() => {
      userEvent.type(container.querySelector('#search-input'), 'Hello World!');
    });
    // Assert
    expect(container.querySelector('#search-input')).toHaveValue('Hello World!');
  });

  test('Displayed search name changes on user typing', async () => {
    // Arrange
    const { container, debug, getByTitle } = render(<App defFilter={dummyList} />);
    // debug();
    // Act
    act(() => {
      userEvent.type(container.querySelector('#search-input'), 'Testy Tester');
    });
    // Assert
    expect(getByTitle('search-display')).toHaveTextContent('Searching for testy tester');
  });
});

describe('Rendering items', () => {
  test('Header rendered', () => {
    // Arrange
    const { container, debug } = render(<App defFilter={dummyList} />);
    // debug();
    // Act
    // Assert
    expect(container.querySelector('#header')).toBeTruthy();
  });

  test('Logo rendered', () => {
    // Arrange
    const { container, debug } = render(<App defFilter={dummyList} />);
    // debug();
    // Act
    // Assert
    expect(container.querySelector('#logo')).toBeTruthy();
  });
});

describe('Sorting items', () => {
  test('Items sorted by name', async () => {
    const { container, debug, getByTestId } = render(<App defFilter={dummyList} />);
    // debug();
    // user clicks sort for ascending
    act(() => {
      fireEvent.click(getByTestId('sort-name'));
    });
    expect(container.querySelector('#employee-scroll').firstChild).toHaveTextContent('Testy');
    expect(container.querySelector('#employee-scroll').lastChild).toHaveTextContent('Zesty');
	// user clicks sort again for descending
    act(() => {
      fireEvent.click(getByTestId('sort-name'));
    });
    expect(container.querySelector('#employee-scroll').firstChild).toHaveTextContent('Zesty');
    expect(container.querySelector('#employee-scroll').lastChild).toHaveTextContent('Testy');
  });

  test('Items sorted by phone', async () => {
    const { container, debug, getByTestId } = render(<App defFilter={dummyList} />);
    // debug();
    // user clicks sort for ascending
    act(() => {
      fireEvent.click(getByTestId('sort-phone'));
    });
    expect(container.querySelector('#employee-scroll').firstChild).toHaveTextContent('444');
    expect(container.querySelector('#employee-scroll').lastChild).toHaveTextContent('555');
	// user clicks sort again for descending
    act(() => {
      fireEvent.click(getByTestId('sort-phone'));
    });
    expect(container.querySelector('#employee-scroll').firstChild).toHaveTextContent('555');
    expect(container.querySelector('#employee-scroll').lastChild).toHaveTextContent('444');
  });
});
