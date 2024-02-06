// import { response } from "express";
import { useState } from 'react';
import { postTask } from '../addTask.api/addTask.api';
import { TextField, Button } from '@mui/material';

function AddTaskForm(props) {
  const [taskValue, setTaskValue] = useState('');
  const [statusValue, setStatusValue] = useState('FALSE');

  const handleChangeofStatus = (event) => {
    setStatusValue(event.target.value);
  };

  const handleSubmitTask = (event) => {
    event.preventDefault();
    console.log('Values for SUBMIT:', {
      task: taskValue,
      status: statusValue,
    });

    // post data
    postTask({
      task: taskValue,
      status: statusValue,
    })
      .then((response) => {
        props.taskRefreshCallback();

        setTaskValue('');
        setStatusValue('');
      })
      .catch((error) => {
        console.error('ERROR posting data to the client side', error);
      });
  };

  return (
    // <form onSubmit={handleSubmitTask}>
    //   <label>
    //     {/* <span>New Task</span> */}
    //     <input
    //       id="task"
    //       onChange={(event) => setTaskValue(event.target.value)}
    //       value={taskValue}
    //       placeholder="new task"
    //     />
    //   </label>
    //   <label
    //     id="status"
    //     onChange={handleChangeofStatus}
    //     value={statusValue}
    //   ></label>
    //   <button type="submit">Add</button>
    // </form>
    <form className="task-form" onSubmit={handleSubmitTask}>
      <TextField
        id="outlined-basic"
        label="new task"
        variant="outlined"
        size="small"
        sx={{
          margin: '10px',
        }}
        onChange={(event) => setTaskValue(event.target.value)}
        value={taskValue}
        // placeholder="new task"
      />
      <Button
        type="submit"
        variant="text"
        size="medium"
        sx={{ margin: '10px' }}
      >
        add
      </Button>
    </form>
  );
}

export default AddTaskForm;
