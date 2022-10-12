import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        {/* <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} /> */}

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
