import React, {useState, useEffect} from 'react';
import ThreadList from '../components/ThreadList'
import Thread from '../components/Thread';
import NewThread from '../components/NewThread';
import './ThreadContainer.css';

const ThreadContainer = () => {
    //--------------------------------------------------------

    // TO DO:
    // I want to show the thread comments when I click on a thread.
    // This involves another API fetch, as comments aren't in our original API.
    // We have a URL to the page okay from our original API.


    /// -------------------------------------------------------

    // Variable the threads to empty array initially, set them up as a State
    const [threads, setThreads] = useState([]);

    // Chosen thread we want to view, initially null
    const [viewThread, setViewThread] = useState(null);

    const [viewNewThreadForm, setNewThreadForm] = useState(null);
    
    // Fn to fetch the threads, from the json .data.children
    // Children is an array of objects, with each object being one thread
    const getThreads = () => {
        fetch('https://www.reddit.com/r/wallstreetbets.json')
        .then(response => response.json())
        .then(threads => setThreads(threads.data.children))
    }

    // Fetch the threads with useEffect
    useEffect(() => {
        getThreads();
    }, []);


    const handleNewThreadForm = () => {
        // If statement is in place due to an error we had
        // If I clicked add new thread before threads had populated, it was taking in threads = [] and appending our one item to it
        // Now if I load the page and click add new thread, it doesn't do anything, till threads is loaded
        if (threads.length > 0){
        return(
            setNewThreadForm(<NewThread onThreadSubmit={onThreadSubmit}/>)
        )}
        else return

    };

    const onThreadSubmit = (newThread) => {
        addThread(newThread);
    };

    const addThread = (newThread) => {
        const updatedThreads =[...threads, newThread];
        setThreads(updatedThreads);
        
        // Set the form to null, so it does not render in our html
        setNewThreadForm(null);
    };

    const selectedThread = (thread) => {
        setViewThread(thread);
        //const threadUrl = `https://reddit.com/${thread.data.permalink}`; //Good, and the link.json is good
        // console.log(threadUrl) // good
        // getComments(threadUrl); // BAD:
        // Access.... has been blocked by CORS policy: No 'Access-Control-Allow-Origin'
    };


    // THIS HAS PREVENTED US FROM SHOWING COMMENTS, WHICH THE CODE BELOW IS FOR:

    // // This is us grabbing the comments for an individual thread
    // const [threadComments, setThreadComments] = useState([]);

    // useEffect(() => {
    //     getComments();
    // }, []);

    // // Called upon selectedThread
    // const getComments = (threadUrl) => {
    //     fetch(`${threadUrl}.json`)
    //     .then(response => response.json())
    //     .then(threadComments => setThreadComments(threadComments[1].data.children)); // This is an array of comments with many sub objects
    // }

    return(
        <div className='main-container'>
            <header>
                <h1>Reddit/WallStreetBets (WSB)</h1>
                <p>This directory pulls live threads from Reddit, in a Subreddit called WallSreetBets (WSB). This is currently a highly popular Sub, with a range of amateur and professional investors who share analysis of stocks. </p>
                <p>WSB has made international news multiple times recently, as billionaire Hedgefund managers and Redditors have appeared in court justifying their actions.</p>
                <p>The WSB Subreddit has reports of small time investors going all in on stocks that Hedgefunds were 'shorting', resulting in not only saving the company being shorted (saving it from liquidation or collapse), but with these small time investors paying off their tuition, family medical bills, mortgages, debt, and donating substantial amounts to charities. </p>
                <p>There are also growing reports of stock market manipulation and suspicious circumstances from the real Wall Street traders and Hedgefund managers, although the court cases and investigations continue.  </p>
                <h3>This page shows a small sample of the kind of posts that have led to these interntional news events.</h3>
                <button onClick={handleNewThreadForm}>Add New Thread</button>
            </header>

            {viewNewThreadForm}

            <main>
                {<ThreadList threads={threads} selectedThread={selectedThread}/>}

                {/* {viewThread ? <Thread viewThread={viewThread} comments={threadComments}/> : null}    */}
                {viewThread ? <Thread viewThread={viewThread}/> : null}    
 
            </main>

        </div>
    );
}

export default ThreadContainer;