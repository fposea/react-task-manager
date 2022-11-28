import React from "react";
import { Routes, Route } from "react-router-dom";
import Test from "./pages/TestPage";
import Tasks from "./pages/Tasks";
import "./App.css";
import AddMates from "./pages/AddMates";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/test" element={<Test />} />
        <Route path="/addmates" element={<AddMates />} />
      </Routes>
    </div>
  );
}

export default App;
