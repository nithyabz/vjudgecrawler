import logo from './logo.svg';
import './App.css';
import Trial from "./views/trial";
import Dom from "./dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/*" element={<Dom />} />
        <Route index element={<Dom />} />
        <Route path="trial" element={<Trial />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
