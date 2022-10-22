function Employee(props) {
  console.log(props);
  return (
    <>
      <h3>Employee {props.name}</h3>
      <p>{props.role ? props.role : "No role!"}</p>
      {/* {props.role ? (
        <p className="role">{props.role}</p>
      ) : (
        <p className="norole">No role!!</p>
      )} */}
    </>
  );
}

export default Employee;
