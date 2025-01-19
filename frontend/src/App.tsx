import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { Room } from './components/Room';
import { Home } from './components/Home';
import NotFound from "./components/404";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>}>
            <Route index element={<Home />}></Route>
          </Route>
          <Route path='room/:room_number' element={<Room />}></Route>
          <Route path="*" element={<NotFound/>} />
          {/* <Route path="/about" element={<h1>About</h1>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
