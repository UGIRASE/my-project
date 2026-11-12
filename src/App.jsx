import React, { useState, useEffect } from 'react'

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    const apiUserGetall = "https://jsonplaceholder.typicode.com/users"

    const response = await fetch(apiUserGetall)
    const data = await response.json()

    setUsers(data)
  }

  return (
  <div className="p-5">

    <h1 className="text-3xl font-bold text-blue-600 mb-5">
      Users List
    </h1>

    <table className="w-full border-collapse border border-gray-300">

      <thead>
        <tr className="bg-gray-100">
          <th className="border p-3">Name</th>
          <th className="border p-3">Username</th>
          <th className="border p-3">Email</th>
        </tr>
      </thead>

      <tbody>
        {users.map((item) => (
          <tr key={item.id} className="hover:bg-gray-100">

            <td className="border p-3">{item.name}</td>

            <td className="border p-3">{item.username}</td>

            <td className="border p-3">{item.email}</td>

          </tr>
        ))}
      </tbody>

    </table>

  </div>
)
  
}

export default App