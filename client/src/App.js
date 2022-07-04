import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Catalogue from "./Pages/Catalogue";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Nav />
          <Routes>
            <Route exact path="/catalogue" element={<Catalogue />} />
            <Route exact path="/home" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
