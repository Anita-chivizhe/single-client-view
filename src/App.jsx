import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home.jsx";
import UploadData from "./screens/UploadData.jsx";
import TransformData from "./screens/TransformData.jsx";
import ViewResults from "./screens/ViewResults.jsx";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<UploadData />} />
        <Route path="/transform" element={<TransformData />} />
        <Route path="/results" element={<ViewResults />} />
      </Routes>
    </div>
  );
}

export default App;
