import React from 'react';
import axios from 'axios';
import { render, fireEvent, waitFor, screen, queries, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App, { API, fetchData } from './App';
// jest.mock('axios');
const dummyList = [
	{
		name: 'Testy Tester',
		email: 'testy@gmail.com',
		number: '5551098',
		picture: {
			thumbnail: 'http://test.com',
		}
	},
	{
		name: 'Testy Tester',
		email: 'testy@gmail.com',
		number: '5551098',
		picture: {
			thumbnail: 'http://test.com',
		}
	},
];

describe('Fetch data', () => {
	test('Fetches random user array successfully', async () => {
		const { data } = await fetchData(API);
		await expect(data.results.length).toBe(200);
	});
});

describe('Search form', () => {
	test('Input value changes when user types', async () => {
		// Arrange
		const { container, debug } = render(<App defFilter={dummyList}/>);
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
		const { container, debug, getByTitle } = render(<App defFilter={dummyList}/>)
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
	test('Header rendered', async () => {
		// Arrange
		const { container, debug } = render(<App defFilter={dummyList}/>);
		// debug();
		// Act
		// Assert
		expect(container.querySelector('#header')).toBeTruthy();
	});
});
