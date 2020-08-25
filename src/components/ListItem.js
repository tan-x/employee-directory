import React from 'react';

export default function ListItem(props) {
    return (
        <div data-testid="list-item">
            {props.name} {props.email} {props.number}
        </div>
    )
}