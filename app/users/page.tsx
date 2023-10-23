import React from 'react'

interface User {
    id: number;
    name: string;
    email: string;
}

const UsersPage = async() => {
    const rest = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await rest.json();
  
  return (
    <>
    <h1 className='bg-sky-400'>Users</h1>
    <table className='border-separate border-spacing-2 border border-slate-500'>
      <thead>
        <tr>
          <th className='border border-slate-600'>Name</th>
          <th className='border border-slate-600'>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td></tr>)}
      </tbody>
    </table>
    </>
  )
}

export default UsersPage