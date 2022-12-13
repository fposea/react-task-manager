import React from "react";
import { Routes, Route } from "react-router-dom";
import Test from "./pages/TestPage";
import Tasks from "./pages/Tasks";
import "./App.css";
import AddMates from "./pages/AddMates";
import { CreateAccount } from "./pages/CreateAccount";
import { Login } from "./pages/Login";
import Avatars from "./pages/Avatars";
import { Alerts } from "./pages/Alerts";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/test" element={<Test />} />
        <Route path="/addmates" element={<AddMates />} />
        <Route path="/account" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/avatars" element={<Avatars />} />
        <Route path="/alerts" element={<Alerts />} />
      </Routes>
    </div>
  );
};

export default App;
