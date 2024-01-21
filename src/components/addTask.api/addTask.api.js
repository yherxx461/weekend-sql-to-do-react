import axios from "axios";

// calling all axios call in this file. Thanks to Myron's lecture notes!

export const fetchTasksList = () => {
    //axios GET call
    return axios.get('/api/todo', taskData);
}; 
 
export const postTaskList = (taskData) => {
    //axios POST call
    return axios.post('/api/todo', taskData);
};

export const deleteTask = (taskId) => {
    //axios DELETE call
    return axios.delete(`/api/todo/${taskId}`);
};

export const updatedTaskList = (taskId) => {
    //axios PUT call
    return axios.put(`/api/todo/${taskId}`);
};