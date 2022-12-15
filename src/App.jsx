import { Routes, Route } from "react-router-dom";
import "./App.css";
import Test from "./pages/TestPage";
import Tasks from "./pages/Tasks";
import AddMates from "./pages/AddMates";
import { CreateAccount } from "./pages/CreateAccount";
import LoginPage from "./pages/Login";
import Avatars from "./pages/Avatars";
import { Alerts } from "./pages/Alerts";
import { Inputs } from "./pages/Inputs";
import { ForgotPasswordPage } from "./pages/ForgotPasswordPage";
import { RecoverPasswordPage } from "./pages/RecoverPasswordPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/test" element={<Test />} />
        <Route path="/addmates" element={<AddMates />} />
        <Route path="/account" element={<CreateAccount />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/avatars" element={<Avatars />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/inputs" element={<Inputs />} />
        <Route path="/forgot" element={<ForgotPasswordPage />} />
        <Route path="/recover" element={<RecoverPasswordPage />} />
      </Routes>
    </div>
  );
};

export default App;
