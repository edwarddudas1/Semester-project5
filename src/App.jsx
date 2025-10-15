import './App.css'
import Header from './components/header.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './registration/sign-up/Sign-up.jsx'
import Home from './components/Home.jsx';
import Footer from './components/Footer'
import Nature from "./components/Nature";
import LineChart from "./components/LineChart";
import LogIn from './registration/log-in/Log-in.jsx';
import Weather from "./components/Weather";

// import Modal from "./components/Modal";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* <Modal /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
        <Weather />
        <LineChart />
        <Nature />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
