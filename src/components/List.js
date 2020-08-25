import React from 'react';
import ListItem from './ListItem';

export default function List(props) {
	return (
		<div id='employee-list'>
			{props.employees.map((employee, i) => {
				console.log(employee, i);
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
	);
}
