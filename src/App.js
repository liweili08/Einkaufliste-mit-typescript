import logo from './logo.svg';
import './App.css';
import HomePage from "./pages/HomePage";
import ChangePage from "./pages/ChangePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TestPage from "./pages/TestPage";

function App() {
  return (
<div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/change" element={<ChangePage/>}/>
            <Route path="/test" element={<TestPage/>}/>
        </Routes>
      </BrowserRouter>
</div>
  );
}

export default App;
