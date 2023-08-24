import Layout from "./components/Layout";
import Registration from "./features/Registration";
import Employees from "./features/Employees";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./sass/index.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* public routes */}
            <Route index element={<Registration />} />
            <Route path="/employees_list" element={<Employees />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
