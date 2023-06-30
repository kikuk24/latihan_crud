import axios from 'axios';
import React, {useEffect,useState} from 'react'
import Table from 'react-bootstrap/Table';

const UserList = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers();
  },[])
  // ?fetch data
  const getUsers = async () => {
    const response = await axios.get('http://localhost:5000/users');
    setUsers(response.data);
  }
  return (
    <div>
      <div>
        <h1 className='text-center m-3'>DAFTAR TABEL</h1>
      </div>
      <div className='container'>
        <Table>
      <thead>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Action</th>
          
        </tr>
      </thead>
          <tbody>
            {/* melooping atau menampilkkan data ke dalam table */}
            {users.map((user, index) => (
          <tr key={user.id}>
                <td>{index + 1 }</td>
                <td>{user.name }</td>
                <td>{user.email}</td>
                <td>{user.gender }</td>
                <td>
                  <button className='btn btn-info'>Edit</button>
                  <button className='btn btn-danger my-1'>delete</button>
            </td>
          </tr>
              
            ))}
      </tbody>
    </Table>
      </div>
    </div>
  )
}

export default UserList