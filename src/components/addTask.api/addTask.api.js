import axios from 'axios';

//Axio Calls

export const fetchTasks = () => {
  //axios GET call
  return axios.get('/api/todo');
};

export const postTask = (taskData) => {
  //axios POST call
  console.log('taskData in POST api', taskData);
  return axios.post('/api/todo', taskData);
};

export const deleteTask = (taskId) => {
  //axios DELETE call
  return axios.delete(`/api/todo/${taskId}`);
};

export const updateTaskStatus = (taskId) => {
  //axios PUT call
  return axios.put(`/api/todo/${taskId}`);
};
