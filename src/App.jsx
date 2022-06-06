import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import "./App.scss";
import GetStarted from "./pages/get-started/GetStarted";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
