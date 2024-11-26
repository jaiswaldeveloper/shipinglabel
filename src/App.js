import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LabelDownloader from "./LabelDownloader";
// import LabelDownloader from "./components/LabelDownloader";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route with dynamic parameter for tracking number */}
        <Route path="/label/:trackingNo" element={<LabelDownloader />} />
      </Routes>
    </Router>
  );
}

export default App;
