import LoginPage from "./containers/LoginPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Login/:loginelement" element={<LoginPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
