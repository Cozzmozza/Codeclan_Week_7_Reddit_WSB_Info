import React from 'react';

const ThreadList = ({threads, selectedThread}) => {

    const handleClick = (thread) => {
        selectedThread(thread)
    };

    const allThreads = threads.map((thread, index) => {
        return (
            <li onClick={() => handleClick(thread)} key={index}>
                {/* When we click on a thread anywhere in our <li> we want it to display */}
                <h3>{thread.data.title}</h3>
            </li>
        );
    });

    return(
        <ul>
            {allThreads}
        </ul>
    );
}

export default ThreadList;