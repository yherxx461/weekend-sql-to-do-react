// import { response } from "express";
import { useState } from 'react';
import { postTask } from '../AddTask.api/addTask.api';

function AddTaskForm(props) {
  const [taskValue, setTaskValue] = useState('');
  // const [statusValue, setStatusValue] = useState('');

  // const handleChangeofStatus = (event) => {
  //     setStatusValue(event.target.value);
  // }

  const handleSubmitTask = (event) => {
    event.preventDefault();
    console.log('Values for SUBMIT:', {
      task: taskValue,
      // status: statusValue,
    });

    // post data
    postTask({
      task: taskValue,
      // status: statusValue,
    })
      .then((response) => {
        props.taskRefreshCallback();

        setTaskValue('');
        // setStatusValue('');
      })
      .catch((error) => {
        console.error('ERROR posting data to the client side', error);
      });
  };

  return (
    <form onSubmit={handleSubmitTask}>
      <label>
        <span>New Task</span>
        <input
          id="task"
          onChange={(event) => setTaskValue(event.target.value)}
          value={taskValue}
        />
      </label>
      {/* <label>
                    <span>Status</span>
                        <input id="status" onChange={handleChangeofStatus} value={statusValue}/>
                </label> */}
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTaskForm;
