import IndexPage from "./pages/IndexPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Button } from "./components/ui/button";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<IndexPage />} />
        </Routes>
    </Router>
  );
}

export default App;
