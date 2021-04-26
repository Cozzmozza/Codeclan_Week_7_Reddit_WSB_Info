import React from 'react';
import './Thread.css';

const Thread = ({viewThread, threadComments}) => {

    // To access the info we want, we need to go viewThread.data.title for title, every time
    // const thread to avoid this;
    const thread = viewThread.data;

    // This is declared in a function in container, should find a way to pass it down
    const threadUrl = `https://reddit.com/${thread.permalink}`;

    const numAwards = thread.all_awardings.length;

    // Let's start by just returning a total of how many main comments there are in the thread
    // const commentsLength = threadComments.length


    return(
        <div className='thread'>
            <h1>{thread.title}</h1>
            <h3><i>Author:</i> {thread.author}</h3>
            <h4>Number of Awards: {numAwards}</h4>
            <p>{thread.selftext}</p>
            <div className='thread-image'>
                <img src={thread.url_overridden_by_dest} alt='Original poster meme or graph'></img>
            </div>
            <h4>
                <a href={threadUrl}>
                <i>Click here to access the full Thread</i>
                </a>
            </h4>
            {/* <p>There are a total of {commentsLength} main comments</p> */}
        </div>

    )
}

export default Thread;