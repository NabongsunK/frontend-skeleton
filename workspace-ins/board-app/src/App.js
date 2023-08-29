import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./components/layout";
import Board from "./pages/board";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/boards" element={<Board />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
