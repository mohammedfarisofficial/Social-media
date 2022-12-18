import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage,RegisterPage } from "./pages";
import "./app.scss";
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
