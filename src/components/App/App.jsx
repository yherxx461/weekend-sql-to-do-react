import {useEffect, useState} from 'react';
import { fetchTasksList } from '../addTask.api/addTask.api';

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
  
  return (
    <div>
      <h1>TO DO APP</h1>
      <div>
      <p>{ fetchTasksList}</p>
      </div>
    </div>
  );

}

export default App
