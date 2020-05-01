import React from 'react';
import Location from './Location';

export default function LocationsList(props) {
    return (
        <div>
            {props.searchResults.map((item, index) => (
                <Location item={item} key={index} />
            ))}
        </div>
    )
}