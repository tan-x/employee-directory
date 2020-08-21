import React from 'react';
import { render, fireEvent, waitFor, screen, queries } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Search from '../Search';

describe('Search', () => {
	test('Search form rendered', async () => {
		// Arrange
		const { container, debug } = render(<Search />);
		debug();
		// Act
		// Assert
		expect(container).toContainHTML(`<div>`);
	});
});