import React from 'react';

const Users = ({ users, onClickUser }) => {

  const userList = users.length ? (
    users.map(user => {
      return (
        <li><button onClick={() => { onClickUser(user.id) }}>{user.email}</button></li>
      );

    })
  ) : (
      <p>User list is empty.</p>
    )
  return (
    <div className="collection">
      {userList}
    </div>
  )
}

export default Users