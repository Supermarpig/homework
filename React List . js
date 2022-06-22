import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function DataList({data}) {
    return (
        <ul>
            {data.map( (item) => {
                return (
                <li>
                    <span>{item.name}</span>
                    &nbsp;
                    <span>{item.age}</span>
                </li>
                )
            })}
        </ul>
    );
}

const data = [
    { name: 'Daniel', age: 25 },
    { name: 'John', age: 24 },
    { name: 'Jen', age: 31 },
];

ReactDOM.render(
    <DataList data={ data } />,
    document.getElementById('root')
);
