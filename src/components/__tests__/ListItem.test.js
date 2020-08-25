import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ListItem from '../ListItem';

describe('Search', () => {
	// test list item props to render
	test('List item rendered with info from props', async () => {
		// Arrange
		const dummyInfo = { name: 'Testy Tester', email: 'testy@gmail.com', number: '5551098' };
		const { container, debug, getByTestId } = render(
			<ListItem name={dummyInfo.name} number={dummyInfo.number} email={dummyInfo.email} />
		);
		// debug();
		// Act
		// Assert
        expect(container).toHaveTextContent(dummyInfo.name, dummyInfo.number, dummyInfo.email);
	});
});
