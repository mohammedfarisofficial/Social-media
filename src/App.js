import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomePage, RegisterPage, LoginPage, ProfilePage } from "./pages";
import "./app.scss";
import { useSelector } from "react-redux";
import Loading from "./components/Loading/Loading";
function App() {
  const isAuth = Boolean(useSelector((state) => state.token));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isAuth ? <HomePage /> : <Navigate to="/login" />}
          // element={<HomePage />}
        />
        <Route
          path="/profile/:userId"
          element={isAuth ? <ProfilePage /> : <Navigate to="/login" />}
          // element={<ProfilePage />}
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
