import React from 'react';

export default function ListItem(props) {
    return (
        <div id="list-item">
            <img src={props.img}/>
            <h5 id="fonts">{props.name}</h5>
            <h5 id="fonts">{props.email}</h5>
            <h5 id="fonts">{props.number}</h5>
        </div>
    )
}