import './App.css'
import Header from './components/header.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './registration/Sign-up.jsx'
import Home from './components/Home.jsx';
import Footer from './components/Footer'
import Nature from "./components/Nature";
import LineChart from "./components/LineChart";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* <Modal /> */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
        <LineChart />
        <Nature />
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
export default App;
