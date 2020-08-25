import React from 'react';
import { Grid } from 'semantic-ui-react';

export default function ListItem(props) {
	return (
		<Grid.Row id='list-item'>
			<img src={props.img} alt={`${props.name.first} thumbnail`}/>
			<Grid.Column>
				<p id='fonts'>{props.name}</p>
			</Grid.Column>
			<Grid.Column>
				<p id='fonts'>{props.email}</p>
			</Grid.Column>
			<Grid.Column id="number">
				<p>{props.number}</p>
			</Grid.Column>
		</Grid.Row>
	);
}
