import React from 'react';
import { render, fireEvent, waitFor, screen, queries } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import List from '../List';

describe('Search', () => {
	// test list has list items
	test('List rendered with list items', async () => {
		// Arrange
		const dummyList = [
			{ name: 'Testy Tester', email: 'testy@gmail.com', number: '5551098' },
			{ name: 'Testy Tester', email: 'testy@gmail.com', number: '5551098' },
		];
		const { container, debug, getByTestId } = render(<List employees={dummyList} />);
		// debug();
		// Act
		// Assert
		expect(container.querySelector('#employee-list')).toBeTruthy();
		expect(container.querySelector('#employee-list').childElementCount).toBe(dummyList.length);
	});

	// test if search narrows using name

	// test if search narrows using email address

	// test if search narrows using phone number
});
