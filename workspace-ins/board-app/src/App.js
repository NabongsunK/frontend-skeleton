import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./components/layout";
import Board from "./pages/board";
import Service from './pages/service';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/boards" element={<Board />} />
          <Route path="/services" element={<Service />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
