import { deleteTask, updateTaskStatus } from '../addTask.api/addTask.api';

function AddTaskList({ taskData, taskRefreshCallback }) {
  const handleClickToggleStatus = (taskId) => {
    updateTaskStatus(taskId)
      .then((response) => {
        taskRefreshCallback();
      })
      .catch((err) => {
        console.error('ERROR:', err);
      });
  };

  const handleClickDelete = (taskId) => {
    // ID item
    console.log('DELETE - taskId:', taskId);
    // MAKE Axios Call
    deleteTask(taskId)
      .then((response) => {
        taskRefreshCallback();
      })
      .catch((err) => {
        console.error('ERROR:', err);
      });
  };

  return (
    <Grid
      item
      xs={8}
      md={6}
      lg={3}
      onClick={() => handleClickToggleStatus(taskData.id)}
    >
      <Box
        borderRadius={3}
        border={
          taskData.complete
            ? '3px solid rgb(113, 232, 48)'
            : `3px solid ${purple[500]}`
        }
        sx={{
          margin: '10px',
          padding: '10px',
        }}
      >
        {taskData.complete && <i>complete</i>}
        {/* key prop needs to be a unique value */}
        <h3>{taskData.task}</h3>
        <p>{taskData.status}</p>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={(event) => {
            event.preventDefault();
            handleClickDelete(taskData.id);
          }}
        >
          Delete
        </Button>
      </Box>
    </Grid>
  );
}

export default AddTaskList;
