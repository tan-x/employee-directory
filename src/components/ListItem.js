import React from 'react';
import { Grid } from 'semantic-ui-react';

export default function ListItem(props) {
	return (
		<Grid.Row id='list-item'>
			<img src={props.img} />
			<Grid.Column>
				<h5 id='fonts'>{props.name}</h5>
			</Grid.Column>
			<Grid.Column>
				<h5 id='fonts'>{props.email}</h5>
			</Grid.Column>
			<Grid.Column>
				<h5>{props.number}</h5>
			</Grid.Column>
		</Grid.Row>
	);
}
