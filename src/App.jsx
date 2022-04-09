import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import "./App.scss";
import GetStarted from "./pages/get-started/GetStarted";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<GetStarted />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
