import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./registration/sign-up/Sign-up.jsx";
import Home from "./components/Home.jsx";
import LogIn from "./registration/log-in/Log-in.jsx";
import MainPage from "./components/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>{" "}
    </>
  );
}

export default App;
