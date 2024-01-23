import {useState, useEffect} from 'react';
import { deleteTask, fetchTasksList, updateTaskCompleteStatus } from '../AddTask.api/addTask.api';
import AddTaskForm from '../AddTaskForm/AddTaskForm';
import { Box, Button, Checkbox, Grid } from '@mui/material';



function App () {
  const [taskList, setTaskList] = useState([]);

  const refreshTasks = () => {
    const taskPromise = fetchTasksList();
    
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

  const handleCompleteTask = (taskId) => {
    console.log('Updating complete status', taskId);
    updateTaskCompleteStatus(taskId)
      .then((response) => {
        refreshTasks();
      })
      .catch((error) => {
        console.error('ERROR in updating status')
      })
  }

  const handleClickDeleteTask = (taskId) => {
    console.log('Deleting task off list', taskId);
    deleteTask(taskId)
    .then((response) => {
      refreshTasks();
    })
    .catch((error) => {
      console.error('ERROR in deleting task', error);
    })
  }

  return (
    <div>
      <h1>TO-DO APP</h1>
      <div>
        <div>
          <main>
          <AddTaskForm taskRefreshCallback={refreshTasks} />
          {/* Rendering the list to the client DOM */}
          <h2>Saturday's To-Do List</h2>
          {taskList.map((taskData, dataIndex) => {
          return (
            <div key={dataIndex}>
            <input type="checkbox" onClick={(event) => handleCompleteTask(taskData.id)}></input>
              <p>Task#{dataIndex +1}: {taskData.task}</p>
              {/* <p>Status: {taskData.status}</p> */}
              <button onClick={(event) => handleClickDeleteTask(taskData.id)}>Delete</button>
              </div>
              )
            })}
          </main>
        </div>
      </div>
    </div>
  );

}

export default App;
//   return (
//     <div>
//       <main>
//         <h1>TO-DO APP</h1>
//           <AddTaskForm taskRefreshCallback={refreshTasks} />
//           {/* Rendering the list to the client DOM */}
//           <h2>Saturday's To-Do List</h2>
//           {taskList.map((taskData, dataIndex) => {
//           return (
//             <Grid 
//             item 
//             xs={8}
//             xd={6}
//             lg={4}
//             onClick={(event) => handleCompleteTask(taskData.id)}>
//               <Box
//               borderRadius={5}
//               border={
//                 taskData.statusComplete
//                 ? '3px solid rbg (113, 253, 56)'
//                 : '3px solid ${green[435]'
//               }
//               sx={{
//                 margin: '10px',
//                 padding: '10px',
//                 }}
//                 />
//               <Checkbox/>
//               <p>Task#{dataIndex +1}: {taskData.task}</p>
//               {/* <p>Status: {taskData.status}</p> */}
//               <Button onClick={(event) => handleClickDeleteTask(taskData.id)}>Delete</Button>
//               )
//               </Grid>
//               </main>

//               </div>
//               }
// export default App
