import React, {useState} from 'react';

const NewThread = ({onThreadSubmit}) => {

    const [title, setTitle] = useState('');
    const [selftext, setSelftext] = useState('');

    const handleTitleChange = (evt) => {
        setTitle(evt.target.value)
    }

    const handleSelftextChange = (evt) => {
        setSelftext(evt.target.value)
    }

    const handleThreadSubmit = (evt) => {
        // Prevent submit doing its default action
        evt.preventDefault();

        // Get rid of any white space
        const titleToSubmit = title.trim();
        const textToSubmit = selftext.trim();

        // Check if any of the fields are empty. Could also do this in html with required
        if (!titleToSubmit || !textToSubmit){
            return
        }

        // Call our ThreadContainer function, onThreadSubmit, with our new object
        onThreadSubmit(
            // Need to put it inside a data object, to match our API
            {'data' :  {title: titleToSubmit,
                selftext: textToSubmit}
            }
        )

        // Set the fields to empty after submission
        setTitle('');
        setSelftext('');

    }

    return(
        <div>
            <h2>Make a New Thread</h2>
            <h4>There are many threads out there. But this one is yours. What do you want to share with the community?</h4>

            <form onSubmit={handleThreadSubmit}>
                <input  type='text' value={title} placeholder='Choose a summarising title' onChange={handleTitleChange}/>
                <input  type='text' value={selftext} placeholder='And all your content here!' onChange={handleSelftextChange}/>
                <input  type='submit' value='Post New Thread'/>
            </form>
        </div>
    )

}

export default NewThread;