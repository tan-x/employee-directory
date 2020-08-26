import React from 'react';
import ListItem from './ListItem';
import { Grid } from 'semantic-ui-react';
import { TiArrowSortedDown, TiArrowSortedUp, TiArrowUnsorted } from 'react-icons/ti';

export default function List(props) {
	return (
		<div id='employee-list'>
			<Grid.Row id='sort'>
				<Grid.Column>
					<p>Sort</p>
				</Grid.Column>
				<Grid.Column>
					<p id='sort-name' className='clickable' onClick={props.sort}>
						Name{' '}
						{props.order.field === 'name' ? (
							props.order.ascending ? (
								<TiArrowSortedUp />
							) : (
								<TiArrowSortedDown />
							)
						) : (
							<TiArrowUnsorted />
						)}
					</p>
				</Grid.Column>
				<Grid.Column>
					<p id='sort-email' className='clickable' onClick={props.sort}>
						Email{' '}
						{props.order.field === 'email' ? (
							props.order.ascending ? (
								<TiArrowSortedUp />
							) : (
								<TiArrowSortedDown />
							)
						) : (
							<TiArrowUnsorted />
						)}
					</p>
				</Grid.Column>
				<Grid.Column id='number'>
					<p id='sort-phone' className='clickable' onClick={props.sort}>
						Phone{' '}
						{props.order.field === 'phone' ? (
							props.order.ascending ? (
								<TiArrowSortedUp />
							) : (
								<TiArrowSortedDown />
							)
						) : (
							<TiArrowUnsorted />
						)}
					</p>
				</Grid.Column>
			</Grid.Row>
			<div id='employee-scroll'>
				{props.employees.map((employee, i) => {
					return (
						<ListItem
							img={employee.picture.thumbnail}
							name={employee.name.first + ' ' + employee.name.last}
							email={employee.email}
							number={employee.phone}
							key={i}
						/>
					);
				})}
			</div>
		</div>
	);
}
