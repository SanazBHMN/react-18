import { useState } from "react";
import Employee from "./components/Employee";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "./components/AddEmployee";

const App = () => {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Caleb",
      role: "Devrel Engineer",
      image:
        "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=996&t=st=1666437529~exp=1666438129~hmac=53e75d2573ad3e0a5512f5c8e4f49d9d44e9fca64c5fbfbbdedf3ec822fa9d1d",
    },
    {
      id: 2,
      name: "Sal",
      role: "Manager",
      image:
        "https://img.freepik.com/free-photo/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university_273609-1270.jpg?w=996&t=st=1666438847~exp=1666439447~hmac=c70e677548dfe086856c8fcc15c78eeb9f665d301521aa113933a23e5bb1aaae",
    },
    {
      id: 3,
      name: "John",
      role: "Director of Eng.",
      image:
        "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=996&t=st=1666439221~exp=1666439821~hmac=02d48ed9e55b2dd25a7a8200b784b89f2ba3fdd37a434bd2dcf0685688e83495",
    },
    {
      id: 4,
      name: "Melanie",
      role: "Software Engineer",
      image:
        "https://img.freepik.com/free-photo/studio-portrait-successful-young-businesswoman_1262-5844.jpg?w=996&t=st=1666438947~exp=1666439547~hmac=ed5fa50b0b365c98b87ddb2d91b3519707729a33b3efcebcb165ce68a76f8b03",
    },
    {
      id: 5,
      name: "Corey",
      role: "The devops guy",
      image:
        "https://img.freepik.com/free-photo/portrait-handsome-bearded-european-man-with-grey-hair-beard-smiles-pleasantly-looks-directly-front-being-good-mood-has-lucky-day-wears-spectacles-sweater-isolated-blue-wall_273609-44285.jpg?w=996&t=st=1666438973~exp=1666439573~hmac=f1ccb531b6250eea6b83f8505ec79a9bd925fef05338f72a432cb84f3b14a595",
    },
    {
      id: 6,
      name: "Jake",
      role: "Senior Intern",
      image:
        "https://img.freepik.com/free-photo/relaxed-friendly-good-looking-european-guy-with-bristle-smiling-joyfully-with-white-healthy-teeth-holding-hands-pockets-being-happy-satisfied-posing-cheerfully-white-wall_176420-35904.jpg?w=996&t=st=1666439262~exp=1666439862~hmac=4bc485c278d6447c9278f2d5d7086ce02e7e472ec0d266c92f602526bcdd54f6",
    },
  ]);
  const showEmployees = true;

  function updateEmployee(id, newName, newRole) {
    console.log("update empoyee inside of app.js");
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function NewEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }

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
            {employees.map((employee) => (
              <Employee
                key={uuidv4()}
                id={employee.id}
                name={employee.name}
                role={employee.role}
                image={employee.image}
                updateEmployee={updateEmployee}
              />
            ))}
          </div>
          <AddEmployee newEmployee={NewEmployee} />
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
};

export default App;
