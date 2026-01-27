function UserList({ users }) {
  return (
    <div>
      <h2>Users (MySQL)</h2>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default UserList;
