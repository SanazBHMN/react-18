import { useState } from "react";
import Employee from "./components/Employee";

const App = () => {
  const [role, setRole] = useState("dev");
  const showEmployees = true;

  return (
    <div>
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              // console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <Employee name="Caleb" role="Intern" />
          <Employee name="Abby" role={role} />
          <Employee name="John" />
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
};

export default App;
