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
        return(
            setNewThreadForm(<NewThread onThreadSubmit={onThreadSubmit}/>)
        );
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
                <h1>I am a container Heading</h1>
                <p>This is all my text!</p>
            </header>

            <button onClick={handleNewThreadForm}>Add New Thread</button>

            {viewNewThreadForm}

            {<ThreadList threads={threads} selectedThread={selectedThread}/>}

            {viewThread ? <Thread viewThread={viewThread} /> : null}

        </div>
    );
}

export default ThreadContainer;