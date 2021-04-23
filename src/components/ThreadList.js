import React from 'react';

const ThreadList = ({threads, selectedThread}) => {

    const handleClick = (thread) => {
        selectedThread(thread)
    };

    const allThreads = threads.map((thread) => {
        return (
            <li>
                <div onClick={() => handleClick(thread)}>
                    <h3>{thread.data.title}</h3>
                </div>
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