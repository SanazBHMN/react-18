import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employees from "./pages/Employees";
import Header from "./components/Header";
import Dictionary from "./pages/Dictionary";
import Definition from "./pages/Definition";

const App = () => {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/employees" element={<Employees />} />
          <Route path="/definition" element={<Definition />} />
          <Route path="/dictionary" element={<Dictionary />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
};

export default App;
