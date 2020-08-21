import React from 'react';
import { render, fireEvent, waitFor, screen, queries } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event'
import Search from '../Search';

describe('Search', () => {
	test('Search form rendered', async () => {
		// Arrange
		const { container, debug } = render(<Search />);
		// debug();
		// Act
		// Assert
		expect(container.querySelector('#search')).toBeTruthy();
    });
    
    // test('Input value changes when user types', async () => {
	// 	// Arrange
	// 	const { debug, getByPlaceholderText } = render(<Search />);
	// 	// debug();
    //     // Act
    //     await userEvent.type(getByPlaceholderText('First name'), 'Hello World!');
	// 	// Assert
	// 	expect(getByPlaceholderText('First name')).toHaveValue('Hello World!');
	// });
});
