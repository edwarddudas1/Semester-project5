import './App.css'
import Header from'./components/header.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" />
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
