import React from 'react';

function Tweet(props) {

    return (
        <div className='tweets'>
            <h1>{props.name}</h1>
            <h1>{props.tweet}</h1>
        </div>);
}

export default Tweet;
