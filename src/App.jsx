import './App.css'
import Header from './components/header.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './registration/sign-up/Sign-up.jsx'
import Home from './components/Home.jsx';
import LogIn from "./registration/log-in/Log-in.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
