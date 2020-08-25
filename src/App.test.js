import React, { useState } from 'react';
import { render, fireEvent, waitFor, screen, queries } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import App from './App';

// test('renders learn react link', () => {
// 	const { getByText } = render(<App />);
// 	const linkElement = getByText(/learn react/i);
// 	expect(linkElement).toBeInTheDocument();
// });

test('Input value changes when user types', async () => {
	// Arrange
	const { container, debug, getByPlaceholderText } = render(<App />);
	// debug();
	// Act
	await userEvent.type(getByPlaceholderText('First name'), 'Hello World!');
	// Assert
	expect(getByPlaceholderText('First name')).toHaveValue('Hello World!');
});

test('Displayed search name changes on user typing', async () => {
	// Arrange
	const { container, debug, getByPlaceholderText, getByTitle } = render(<App />);
	// debug();
	// Act
	await userEvent.type(getByPlaceholderText('First name'), 'Testy');
	await userEvent.type(getByPlaceholderText('Last name'), 'Tester');
	// Assert
	expect(getByTitle('search-display')).toHaveTextContent('Searching for Testy Tester');
});
