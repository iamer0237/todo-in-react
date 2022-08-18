import { useState } from 'react';

export default function AddTask({ onAddTask }) {
    const [text, setText] = useState('');
    return (
        <>
            <input className='addtask'
                placeholder="Add task"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button className='addbtn' onClick={() => {
                setText('');
                onAddTask(text);
            }}>Add</button>
        </>
    )
}
