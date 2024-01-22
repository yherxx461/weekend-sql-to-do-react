import { useState } from useState;
import { postTaskList } from "../addTask.api/addTask.api";

function addTaskForm(props) {
    const [taskValue, setTaskValue] = useState('');
}

return (
    <form onSubmit={handleSubmitTask}> 
        <label>
            <span>
                <input id="task" onChange={(event) => setTaskValue(event.target.value)} 
                value={taskValue}
                />
                <button type="submit">Add Task</button>
            </span>
        </label>
    </form>
);

export default addTaskForm;