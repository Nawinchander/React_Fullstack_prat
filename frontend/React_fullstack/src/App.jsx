import { useEffect, useState } from "react";
import { api } from "./api";
import Header from "./components/Header";
import UserList from "./components/UserList";
import TaskList from "./components/TaskList";
import Navbar from "./components/Navbar";

function App() {
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get("/users").then(res => setUsers(res.data));
    api.get("/tasks").then(res => setTasks(res.data));
  }, []);

  return (
    <>
      <Header title="Full Stack App" />
      <UserList users={users} />
      <TaskList tasks={tasks} />
      <Navbar/>
    </>
  );
}

export default App;
