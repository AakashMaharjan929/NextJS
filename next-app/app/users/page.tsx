import React from 'react'

interface User{
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => { 
  const rest = await fetch("https://jsonplaceholder.typicode.com/users", {next: {revalidate: 60}});
  const users: User[] = await rest.json();
  return (
    <>
    <h1>Users</h1>
    <p>{new Date().toLocaleTimeString()}</p>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
        {users.map((user: User) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  )
}

export default UsersPage