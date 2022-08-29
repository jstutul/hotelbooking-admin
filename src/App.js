import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.js"
import {AuthContext} from "./context/AuthContext.js"
function App() {
  const ProtectedRoute=({children})=>{
    const {user}=useContext(AuthContext)
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;