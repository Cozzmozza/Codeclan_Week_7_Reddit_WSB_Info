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

    // I want this function to check what media is attached.
    // If there is an image, render it, if not, don't
    // Likewise for videos
    // Also display any external html links
    const media = () => {
        const source = thread.url_overridden_by_dest;
        if (source){ // If there is a source linked to it
            if (source[8] === 'i'){ // If the source is an image
                return <img src={source} alt='Original poster meme or graph'></img>
            }
            else if (source[8] === 'v'){ // If the source is a video. Could also use the API "is_video = true"
                return <iframe src={thread.secure_media.reddit_video.fallback_url} type='video/mp4' alt='Original poster video'></iframe>
                // return <a href={thread.secure_media.reddit_video.fallback_url}>Click to view attached video</a>
            }
        

        // e.g. with image:  https://i.redd.it/1v0qru8jp7v61.jpg --> 'image is 'i', index 8
        // with video:  https://v.redd.it/rs9abwsl7ev61 --> video is 'v', index 8
        // with attached html: "https://uk.finance.yahoo.com/news/hedge-fund-ipm-shuts-doors-083319437.html"
        } 
    }

    return(
        <div className='thread'>
            <h1>{thread.title}</h1>
            <h3><i>Author:</i> {thread.author}</h3>
            <h4><i>Number of Awards:</i> {numAwards}</h4>
            <p>{thread.selftext}</p>
            <div className='thread-image'>
                {media()}

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