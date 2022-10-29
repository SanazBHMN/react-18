import Employees from "./pages/Employees";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dictionary from "./components/Dictionary";

const App = () => {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/employees" element={<Employees />} />
          <Route path="/dictionary" element={<Dictionary />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
};

export default App;
