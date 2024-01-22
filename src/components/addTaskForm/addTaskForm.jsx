import { response } from "express";
import { useState } from useState;
import { postTaskList } from "../addTask.api/addTask.api";

function addTaskForm(props) {
    const [taskValue, setTaskValue] = useState('');
    const [statusValue, setStatusValue] = useState('');

      };
    
      const handleSubmitTask = (event) => {
        event.preventDefault();
        console.log('Values for SUBMIT:', {
          task: taskValue,
        }); 
      }    

      // post data
      postTaskList({
        task: taskValue,
        status: statusValue,
      })
      .then((response) => {
        props.taskRefreshCall();

        setTaskValue('');
        setStatusValue('');
      })

return (
    <form onSubmit={handleSubmitTask}> 
        <label>
            <span>
                <input id="task" onChange={(event) => setTaskValue(event.target.value)} 
                value={taskValue}
                />
                     </span>
                </label>
                <label>
                    <span>
                        <input id="status" onChange={(event) => setStatusValue(event.target.value)}
                        />
                    </span>
                </label>
            <button type="submit">Add Task</button>
    </form>
);

export default addTaskForm;