import Navbar from "./Navbar";
import List from "./List";
import Counter from "./Counter";

const App = () => {
  const guitars = ["Strat", "Les Paul", "Explorer"];

  return (
    <>
      <Navbar title="Getting Started with State" />
      <Counter />

      {/* <div className="container">
        <List title="Guitars" items={guitars} background="danger" />
      </div> */}
    </>
  );
};

export default App;
