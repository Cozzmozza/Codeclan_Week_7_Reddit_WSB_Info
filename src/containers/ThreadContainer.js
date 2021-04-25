import React, {useState, useEffect} from 'react';
import ThreadList from '../components/ThreadList'
import Thread from '../components/Thread';
import NewThread from '../components/NewThread';
import './ThreadContainer.css';

const ThreadContainer = () => {

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

    const selectedThread = (thread) => {
        setViewThread(thread);
    };

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

    return(
        <div className='main-container'>
            <header>
                <h1>Reddit/WallStreetBets (WSB)</h1>
                <p>This directory on Reddit lists all the active threads in Subreddit, wallstreetbets. This is currently a highly popular subreddit, with a range of amateur and professional investors who share analysis of stocks. </p>
                <p>The Subreddit has made international news multiple times recently, as billionaire Hedgefunds (and managers) who have lost money, have attacked their methodology.</p>
                <button onClick={handleNewThreadForm}>Add New Thread</button>
            </header>

            {viewNewThreadForm}

            <body>
                {<ThreadList threads={threads} selectedThread={selectedThread}/>}

                {viewThread ? <Thread viewThread={viewThread} /> : null}    
            </body>

        </div>
    );
}

export default ThreadContainer;