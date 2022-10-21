import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Home, LogIn, Register, NotFound } from "./pages/index";
import "./index.scss";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function App() {
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser)

  const ProtectRoute = ({ children }) => {
    if (!currentUser?.email) {
      return <Navigate to="/login" />
    }

    return children;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            // <ProtectRoute>
              <Home />
            // </ProtectRoute>
          }
        />
        <Route path="/login" element={<LogIn />} />
        <Route path="/registration" element={<Register />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
