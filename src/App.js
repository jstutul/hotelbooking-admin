import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import { AuthContext } from "./context/AuthContext.js";
import Login from "./pages/login/Login";
function App() {
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    console.log(user);
    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
