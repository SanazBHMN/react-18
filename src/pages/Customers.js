import { useState, useEffect } from "react";

function Customers() {
  const [customers, setCustomers] = useState();

  useEffect(() => {
    fetch("http://localhost:8000/api/customers/")
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data.customers);
      });
  }, []);

  return (
    <>
      <h1>Customers:</h1>
      {customers
        ? customers.map((customer) => {
            return <p key={customer.id}>{customer.name}</p>;
          })
        : ""}
    </>
  );
}

export default Customers;
