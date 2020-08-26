import React from 'react';
import axios from 'axios';
import { render, fireEvent, waitFor, screen, queries } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App, { API, fetchData } from './App';
import { act } from 'react-dom/test-utils';

// test('renders learn react link', () => {
// 	const { getByText } = render(<App />);
// 	const linkElement = getByText(/learn react/i);
// 	expect(linkElement).toBeInTheDocument();
// });
// jest.mock('axios');

describe('Rendering items', () => {
	test('Header rendered', async () => {
		// Arrange
		const { container, debug } = render(<App />);
		// debug();
		// Act
		// Assert
		expect(container.querySelector('#header')).toBeTruthy();
	});
});

describe('fetch data', () => {
	test('fetches data successfully', async () => {
		const { data } = await fetchData(API);
		await expect(data.results.length).toBe(200);
	});
});

describe('Search form', () => {
	test('Input value changes when user types', async () => {
		// Arrange
		const { container, debug, getByPlaceholderText } = render(<App />);
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
		const { container, debug, getByPlaceholderText, getByTitle } = render(<App />);
		// debug();
		// Act
		act(() => {
			userEvent.type(container.querySelector('#search-input'), 'Testy Tester');
		});
		// Assert
		expect(getByTitle('search-display')).toHaveTextContent('Searching for testy tester');
	});
});
