import React, { useState } from "react";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!firstName || !lastName || !age || !password) {
      return;
    }

    const newUser = {
      id: Date.now(),
      firstName,
      lastName,
      age,
      password,
    };

    setUsers((prev) => [...prev, newUser]);

    localStorage.setItem("key", JSON.stringify(updatedUsers));

    setFirstName("");
    setLastName("");
    setAge("");
    setPassword("");
  };

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  return (
    <div className="users-container">
      <div className="users-grid">
        <div className="users-form">
          <h1 className="users-form__title">Create User</h1>

          <div className="users-form__inputs">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
              required
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
              required
            />
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Age"
              required
            />
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Job"
              required
            />

            <button onClick={handleSubmit} className="btn btn-primary">
              Add User
            </button>
          </div>
        </div>

        <div className="users-display">

          {users.length > 0 ? (
            <div className="users-list">
              {users.map((user) => (
                <div key={user.id} className="user-card">
                  <div className="user-avatar">
                    <span>{user.firstName.charAt(0)}</span>
                  </div>

                  <div className="user-info">
                    <h3>
                      {user.firstName} {user.lastName}
                    </h3>
                    <p>{user.age}</p>
                  </div>

                  <button
                    onClick={() => handleDelete(user.id)}
                    className="btn btn-remove"
                  >
                    Delete User
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="users-empty">No users added yet</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;
