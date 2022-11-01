import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Employees from "./pages/Employees";
import Dictionary from "./pages/Dictionary";
import Definition from "./pages/Definition";

const App = () => {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/employees" element={<Employees />} />
          <Route path="/definition/:search" element={<Definition />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
};

export default App;
