import React from 'react';
import ListItem from './ListItem';

export default function List(props) {
	return (
		<div id='employee-list'>
			{props.employees.map((employee, i) => (
                <ListItem 
                    name={employee.name} 
                    email={employee.email} 
                    number={employee.number} 
                    key={i} 
                />
			))}
		</div>
	);
}
