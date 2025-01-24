import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { Room } from './components/Room';
import { Home } from './components/Home';
import NotFound from "./components/404";
import Login from "./pages/authPages/LoginPage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='login' element={<Login />}/>
          <Route path='signup' element={<Room />}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
