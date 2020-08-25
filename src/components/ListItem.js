import React from 'react';
import { Grid } from 'semantic-ui-react';

export default function ListItem(props) {
	return (
		<Grid.Row id='list-item'>
			<img src={props.img} />
			<Grid.Column>
				<p id='fonts'>{props.name}</p>
			</Grid.Column>
			<Grid.Column>
				<p id='fonts'>{props.email}</p>
			</Grid.Column>
			<Grid.Column>
				<p>{props.number}</p>
			</Grid.Column>
		</Grid.Row>
	);
}
