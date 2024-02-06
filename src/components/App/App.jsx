import { useState, useEffect } from 'react';
import { Button } from '@mui/material';

import AddTaskForm from '../AddTaskForm/AddTaskForm';
import {
  deleteTask,
  fetchTasks,
  updateTaskStatus,
} from '../addTask.api/addTask.api';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [taskStatus, setTaskStatus] = useState([]);

  const refreshTasks = () => {
    const taskPromise = fetchTasks();

    taskPromise
      // success
      .then((response) => {
        console.log('fetch GET SERVER DATA:', response);
        setTaskList(response.data);
      })
      //failure
      .catch((error) => {
        console.error('ERROR fetching GET data', error);
      });
  };

  //initial load of component
  useEffect(() => {
    //body of effect
    console.log('Initialized original to-do list successful');
    refreshTasks();
  }, []);

  const handleClickDeleteTask = (taskId) => {
    console.log('Deleting task off list', taskId);
    deleteTask(taskId)
      .then((response) => {
        refreshTasks();
      })
      .catch((error) => {
        console.error('ERROR in deleting task', error);
      });
  };

  // const handleTaskStatus = (taskId) => {
  //   console.log('Updating complete status', taskId);
  //   updateTaskStatus(taskId)
  //     .then((response) => {
  //       refreshTasks();
  //     })
  //     .catch((error) => {
  //       console.error('ERROR in updating status');
  //     });
  // };

  return (
    <div>
      <h1>TO-DO APP</h1>
      <div>
        <div>
          <AddTaskForm taskRefreshCallback={refreshTasks} />
          <h2>Saturday's To-Do List</h2>
          <main>
            {/* Rendering the list to the client DOM */}
            {taskList.map((taskData, dataIndex) => {
              return (
                <div key={dataIndex}>
                  {/* <p>
                    {dataIndex + 1}: {taskData.task}
                  </p> */}
                  {/* <p>Status: {taskData.status}</p> */}
                  {taskData.status === false ? (
                    <p>
                      {dataIndex + 1}: {taskData.task}
                    </p>
                  ) : (
                    <p style={{ textDecoration: 'line-through' }}>
                      {dataIndex + 1}: {taskData.task}
                    </p>
                  )}

                  <Button
                    // onClick={(event) => handleTaskStatus(taskData.id)}
                    onClick={(event) => handleClickDeleteTask(taskData.id)}
                  >
                    Delete
                  </Button>
                </div>
              );
            })}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
