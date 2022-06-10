import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/home.route";
import Dashboard from "./routes/Dashboard/dashboard.route";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard/:address" element={<Dashboard />}></Route>
    </Routes>
  );
};

export default App;
