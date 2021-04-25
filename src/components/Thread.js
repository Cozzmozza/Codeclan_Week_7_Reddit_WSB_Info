import React from 'react';
import './Thread.css';

const Thread = ({viewThread}) => {

    // To access the info we want, we need to go viewThread.data.title for title, every time
    // const thread to avoid this;
    const thread = viewThread.data;

    const threadUrl = `https://reddit.com/${thread.permalink}`;

    const numAwards = thread.all_awardings.length;


    return(
        <div className='thread'>
            <h1>{thread.title}</h1>
            <h3><i>Author:</i> {thread.author}</h3>
            <h4>Number of Awards: {numAwards}</h4>
            <p>{thread.selftext}</p>
            <div className='thread-image'>
                <img src={thread.url_overridden_by_dest}></img>
            </div>
            <h4>
                <a href={threadUrl}>
                <i>Click here to access the full Thread</i>
                </a>
            </h4>
        </div>

    )
}

export default Thread;