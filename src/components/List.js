import React from 'react';
import ListItem from './ListItem';
import { Grid } from 'semantic-ui-react';

export default function List(props) {
  return (
    <div id='employee-list'>
      <Grid.Row id='sort'>
        <Grid.Column>
          <p>Sort</p>
        </Grid.Column>
        <Grid.Column>
          <p id='sort-name' onClick={props.sort}>Name</p>
        </Grid.Column>
        <Grid.Column>
          <p id='sort-email' onClick={props.sort}>Email</p>
        </Grid.Column>
        <Grid.Column id='number'>
          <p id='sort-phone' onClick={props.sort}>Phone</p>
        </Grid.Column>
      </Grid.Row>
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
  );
}
