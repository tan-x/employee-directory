import React from 'react';
import { Form } from 'semantic-ui-react';

export default function Search(props) {
	return (
		<Form id="search">
			<Form.Group widths='equal'>
				<Form.Input fluid id='firstname' label='First name' placeholder='First name' onChange={(e) => props.setsearch({...props.search, firstname: e.target.value.trim()})}/>
				<Form.Input fluid id='lastname' label='Last name' placeholder='Last name' onChange={(e) => props.setsearch({...props.search, lastname: e.target.value.trim()})}/>
			</Form.Group>
		</Form>
	);
}
