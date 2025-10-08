import './App.css'
import Header from './components/header.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './registration/Sign-up.jsx'
import Home from './components/Home.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
