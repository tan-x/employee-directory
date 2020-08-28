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
    const { container } = render(<App defFilter={dummyList} />);
    act(() => {
      userEvent.type(container.querySelector('#search-input'), 'Hello World!');
    });
    expect(container.querySelector('#search-input')).toHaveValue('Hello World!');
  });

  test('Displayed search name changes on user typing', async () => {
    const { container, getByTitle } = render(<App defFilter={dummyList} />);
    act(() => {
      userEvent.type(container.querySelector('#search-input'), 'Testy Tester');
    });
    expect(getByTitle('search-display')).toHaveTextContent('Searching for testy tester');
  });

  test('Items filtered by search', async () => {
    const { container, getByTestId } = render(<App defFilter={dummyList} />);
    // user clicks sort for ascending
    act(() => {
      userEvent.type(container.querySelector('#search-input'), '555');
    });
    expect(container.querySelector('#employee-scroll').firstChild).toHaveTextContent('555');
	// user clicks sort again for descending
    act(() => {
		userEvent.type(container.querySelector('#search-input'), 'Tester');
    });
    expect(container.querySelector('#employee-scroll').firstChild).toHaveTextContent('Tester');
  });
});

describe('Rendering items', () => {
  test('Header rendered', () => {
    const { container } = render(<App defFilter={dummyList} />);
    expect(container.querySelector('#header')).toBeTruthy();
  });

  test('Logo rendered', () => {
    const { container } = render(<App defFilter={dummyList} />);
    expect(container.querySelector('#logo')).toBeTruthy();
  });
});

describe('Sorting list items', () => {
  test('Items sorted by name', async () => {
    const { container, getByTestId } = render(<App defFilter={dummyList} />);
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
    const { container, getByTestId } = render(<App defFilter={dummyList} />);
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

describe('Sorting list items', () => {
  test('Items sorted by name', async () => {
    const { container, getByTestId } = render(<App defFilter={dummyList} />);
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
    const { container, getByTestId } = render(<App defFilter={dummyList} />);
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
