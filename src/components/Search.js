import React from 'react';
import { Form } from 'semantic-ui-react';

export default function Search(props) {
	const handleFormChange = (e) => {
			props.setsearch(e.target.value.trim().toLowerCase());
	}
	return (
		<Form id='search'>
			<Form.Group widths='equal'>
				<Form.Input
					fluid
					id='search-input'
					label='Search'
					placeholder='Search by Name, Email, or Phone'
					onChange={handleFormChange}
				/>
			</Form.Group>
		</Form>
	);
}
