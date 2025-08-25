import React from "react";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="container">
      <div className="container_s">
        <div className="card">
          <div className="card_title">
            <h1>Create Account</h1>
          </div>

          <div className="form">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Firs name"
            />

            <input
              type="text"
              name="username"
              id="username"
              placeholder="Last name"
            />

            <input type="email" name="email" id="email" placeholder="Email" />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <button type="submit">Add user</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
