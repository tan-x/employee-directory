import React from 'react';
import { Form } from 'semantic-ui-react';

export default function Search(props) {
	return (
		<Form id="search">
			<Form.Group widths='equal'>
				<Form.Input fluid label='First name' placeholder='First name' />
				<Form.Input fluid label='Last name' placeholder='Last name' />
			</Form.Group>
		</Form>
	);
}
