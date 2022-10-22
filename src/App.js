import { useState } from "react";
import Employee from "./components/Employee";

const App = () => {
  const [role, setRole] = useState("dev");
  const showEmployees = true;

  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              // console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            <Employee
              name="Caleb"
              role="Intern"
              image="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=996&t=st=1666437529~exp=1666438129~hmac=53e75d2573ad3e0a5512f5c8e4f49d9d44e9fca64c5fbfbbdedf3ec822fa9d1d"
            />
            <Employee
              name="Abby"
              role={role}
              image="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=996&t=st=1666437529~exp=1666438129~hmac=53e75d2573ad3e0a5512f5c8e4f49d9d44e9fca64c5fbfbbdedf3ec822fa9d1d"
            />
            <Employee
              name="John"
              image="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=996&t=st=1666437529~exp=1666438129~hmac=53e75d2573ad3e0a5512f5c8e4f49d9d44e9fca64c5fbfbbdedf3ec822fa9d1d"
            />
          </div>
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
};

export default App;
