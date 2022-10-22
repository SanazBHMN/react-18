import Employee from "./components/Employee";

const App = () => {
  console.log("we are about to list the employees");
  const showEmployees = true;
  return (
    <div>
      {showEmployees ? (
        <>
          <Employee />
          <Employee />
          <Employee />
          <Employee />
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
};

export default App;
