import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Users from "./components/users/Users";
// import UserManagement from "./components/users/Users";

const App = () => {
  return (
    <div>
      {/* <header><Sidebar /></header> */}
      <main>
        <section>
          <div className="container">
            <Users />
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
