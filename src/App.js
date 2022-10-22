import Employee from "./components/Employee";

const App = () => {
  const showEmployees = true;
  return (
    <div>
      {showEmployees ? (
        <>
          <Employee name="Caleb" role="Intern" />
          <Employee name="Abby" />
          <Employee name="John" />
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
};

export default App;
