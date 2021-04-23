import React from 'react';

const Thread = ({viewThread}) => {

    // To access the info we want, we need to go viewThread.data.title for title, every time
    // const thread to avoid this
    const thread = viewThread.data

    return(
        <div>
            <h1>{thread.title}</h1>
            <p>{thread.selftext}</p>
        </div>

    )
}

export default Thread;