import { Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage/HomePage";
import { useFont } from "./Utils/FontChange";
import ThemeContextProvider from "./Utils/ThemeContext";

function App() {
  const { font, setFont, list_of_fonts } = useFont();
  return (
    <div style={{ fontFamily: `${font}` }}>
      <ThemeContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
