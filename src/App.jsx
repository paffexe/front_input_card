import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Users from "./components/users/Users";

const App = () => {
  return (
    <div>
      <header>
        <Sidebar />
      </header>
      <main>
        <section>
          <Users />
        </section>
      </main>
    </div>
  );
};

export default App;
