import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.scss";
import { HomePage,RegisterPage } from "./pages";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
