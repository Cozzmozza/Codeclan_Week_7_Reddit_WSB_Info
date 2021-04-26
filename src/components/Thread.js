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
    // Not using the above at the moment

    // This is to check if there is an image, and render it. If not, don't - because otherwise get the img alt every time
    const image = () => {
        const source = thread.url_overridden_by_dest;
        if (source !== null){
           return <img src={source} alt='Original poster meme or graph'></img>
        }
        // return source  != null ? <img src={source} alt='Original poster meme or graph'></img> : null;
        // This is returning the image every time, because every post has an url_overridden_by_dest

        // Only some are actually images, some just link to the page

        // e.g. with image:  https://i.redd.it/1v0qru8jp7v61.jpg
        // with video:  https://v.redd.it/rs9abwsl7ev61
        // with attached html: "https://uk.finance.yahoo.com/news/hedge-fund-ipm-shuts-doors-083319437.html"
        
        // Need to find a way to check what file type it is, and render it, so we can show videos etc
    }

    return(
        <div className='thread'>
            <h1>{thread.title}</h1>
            <h3><i>Author:</i> {thread.author}</h3>
            <h4>Number of Awards: {numAwards}</h4>
            <p>{thread.selftext}</p>
            <div className='thread-image'>
                {/* <img src={thread.url_overridden_by_dest} alt='Original poster meme or graph'></img> */}
                {image()}

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