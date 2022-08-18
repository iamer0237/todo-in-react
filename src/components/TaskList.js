import { useState } from 'react';

export default function TaskList({
    tasks,
    onChangeTask,
    onDeleteTask
}) {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <Task
                        task={task}
                        onChange={onChangeTask}
                        onDelete={onDeleteTask}
                    />
                </li>
            ))}
        </ul>
    );
}

function Task({ task, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <input
                    value={task.text}
                    onChange={e => {
                        onChange({
                            ...task,
                            text: e.target.value
                        });
                    }} />
                <button onClick={() => setIsEditing(false)}>
                    Save
                </button>
            </>
        );
    } else {
        taskContent = (
            <>
                {task.text}
                <div className='deletebtn'>
                    <div onClick={() => setIsEditing(true)}>
                        <i class="fa fa-pencil" aria-hidden="true"></i>
                    </div>
                </div>
            </>
        );
    }
    return (
        <label>
            <input type="checkbox" className='check' checked={task.done} onChange={e => { onChange({ ...task, done: e.target.checked }); }} />
            {taskContent}
            <div className='deletebtn'>
                <div onClick={() => onDelete(task.id)}>
                    <i class="fa fa-trash" aria-hidden="true"></i>
                </div>
            </div>


        </label>
    );
}
