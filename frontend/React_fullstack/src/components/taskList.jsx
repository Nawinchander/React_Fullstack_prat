function TaskList({ tasks }) {
  return (
    <div>
      <h2>Tasks (MongoDB)</h2>
      {tasks.map(task => (
        <p key={task._id}>{task.title}</p>
      ))}
    </div>
  );
}

export default TaskList;
