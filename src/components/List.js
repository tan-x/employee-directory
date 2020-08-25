import React from 'react';
import ListItem from './ListItem';
import { Grid } from 'semantic-ui-react';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';

export default function List(props) {
  return (
    <div id='employee-list'>
      <Grid.Row id='sort'>
        <Grid.Column>
          <p>Sort</p>
        </Grid.Column>
        <Grid.Column>
          {props.order.field === 'name' ? (
            props.order.ascending ? (
              <p id='sort-name' onClick={props.sort}>
                Name <TiArrowSortedUp />
              </p>
            ) : (
              <p id='sort-name' onClick={props.sort}>
                Name <TiArrowSortedDown />
              </p>
            )
          ) : (
            <p id='sort-name' onClick={props.sort}>
              Name
            </p>
          )}
        </Grid.Column>
        <Grid.Column>
          {props.order.field === 'email' ? (
            props.order.ascending ? (
              <p id='sort-email' onClick={props.sort}>
                Email <TiArrowSortedUp />
              </p>
            ) : (
              <p id='sort-email' onClick={props.sort}>
                Email <TiArrowSortedDown />
              </p>
            )
          ) : (
            <p id='sort-email' onClick={props.sort}>
              Email
            </p>
          )}
        </Grid.Column>
        <Grid.Column id='number'>
          {props.order.field === 'phone' ? (
            props.order.ascending ? (
              <p id='sort-phone' onClick={props.sort}>
                Phone <TiArrowSortedUp />
              </p>
            ) : (
              <p id='sort-phone' onClick={props.sort}>
                Phone <TiArrowSortedDown />
              </p>
            )
          ) : (
            <p id='sort-phone' onClick={props.sort}>
              Phone
            </p>
          )}
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
