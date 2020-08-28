import React from 'react';
import ListItem from './ListItem';
import { Grid } from 'semantic-ui-react';
import { TiArrowSortedDown, TiArrowSortedUp, TiArrowUnsorted } from 'react-icons/ti';

const columns = ['name', 'email', 'phone'];

const sortColumn = (sort, field, ascending) => {
  return columns.map((item, i) => {
    return (
      <Grid.Column key={i}>
        <p id={`sort-${item}`} data-testid={`sort-${item}`} className='clickable' onClick={sort}>
          {item.charAt(0).toUpperCase() + item.slice(1)}{' '}
          {field === item ? (
            ascending ? (
              <TiArrowSortedUp />
            ) : (
              <TiArrowSortedDown />
            )
          ) : (
            <TiArrowUnsorted />
          )}
        </p>
      </Grid.Column>
    );
  });
};

const renderList = (employees) => {
  return employees.map((employee, i) => {
    return (
      <ListItem
        img={employee.picture.thumbnail}
        name={employee.name.first + ' ' + employee.name.last}
        email={employee.email}
        number={employee.phone}
        key={i}
      />
    );
  });
};

export default function List(props) {
  return (
    <div id='employee-list'>
      <Grid.Row id='sort'>
        <Grid.Column>
          <p>Sort</p>
        </Grid.Column>
        {sortColumn(props.sort, props.order.field, props.order.ascending)}
      </Grid.Row>
      <div id='employee-scroll'>{renderList(props.employees)}</div>
    </div>
  );
}
