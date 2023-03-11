import { Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage/HomePage";
import ThemeContextProvider from "./Utils/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </ThemeContextProvider>
  );
}

export default App;
