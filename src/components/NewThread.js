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
        evt.preventDefault();
        const titleToSubmit = title.trim();
        const textToSubmit = selftext.trim();
        if (!titleToSubmit || !textToSubmit){
            return
        }

        onThreadSubmit(
            {'data' :  {title: titleToSubmit,
                selftext: textToSubmit}
            }
        )
        console.log(titleToSubmit);
        console.log(textToSubmit);

        setTitle('');
        setSelftext('');

    }

    return(
        <div>
            <h1>This will be our form</h1>
            <form onSubmit={handleThreadSubmit}>
                <input  type='text' value={title} placeholder='Choose a summarising title' onChange={handleTitleChange}/>
                <input  type='text' value={selftext} placeholder='And all your content here!' onChange={handleSelftextChange}/>
                <input  type='submit' value='Post New Thread'/>
            </form>
        </div>
    )

}

export default NewThread;