import './App.css'
import Header from './components/header.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './registration/Sign-up.jsx'
import Home from './components/Home.jsx';
import Footer from './components/Footer'


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
