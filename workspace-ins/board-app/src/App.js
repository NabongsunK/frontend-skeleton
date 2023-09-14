import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./components/layout";
import Board from "./pages/board";
import Service from './pages/service';
import BoardDetail from './pages/board/BoardDetail';
import BoardList from "./pages/board/BoardList";

import { Provider } from 'react-redux';
import store from './store/store';

const a = 10;
a = 20;

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/boards" element={<Board />}>
              <Route index element={<BoardList />} />
              <Route path=":id" element={<BoardDetail />} />
            </Route>
            <Route path="/services" element={<Service />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
    
  );
}

export default App;
