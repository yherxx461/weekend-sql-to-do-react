import axios from "axios";

// calling all axios call in this file. Thanks to Myron's lecture notes!

export const fetchTasksList = () => {
    //axios GET call
    return axios.get('/api/todo');
}; 
 
export const postTaskList = (taskData) => {
    //axios POST call
    console.log('taskData in POST api', taskData);
    return axios.post('/api/todo', taskData);
};

export const deleteTask = (taskId) => {
    //axios DELETE call
    return axios.delete(`/api/todo/${taskId}`);
};

export const updateTaskCompleteStatus = (taskId) => {
    //axios PUT call
    return axios.put(`/api/todo/${taskId}`);
};