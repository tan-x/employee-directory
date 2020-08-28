import React from 'react';
import { render, fireEvent, waitFor, screen, queries } from '@testing-library/react';
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
});
