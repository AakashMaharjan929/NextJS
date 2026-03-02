import React from 'react'

interface User{
  id: number;
  name: string;
}

const UsersPage = async () => { 
  const rest = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await rest.json();
  return (
    <>
    <h1>Users</h1>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}

export default UsersPage