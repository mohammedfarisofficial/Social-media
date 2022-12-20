import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, RegisterPage, LoginPage } from "./pages";
import "./app.scss";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
